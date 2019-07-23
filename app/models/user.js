const mongoose=require("mongoose")
const validator=require("validator")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

const Schema=mongoose.Schema

const UserScheme=new Schema({
    username:{
        type:String,
        required:true,
        minlength:5,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    isAdmin:{
        type:Boolean,
        default:false
    }, 
    tokens:[{
        token:{
            type:String
        },
        createAt:{
            type:Date,
            default:Date.now
        }
    }]
})

//pre-save

UserScheme.pre('save',function(next){
    const user=this
    if(user.isNew){
    bcryptjs.genSalt(10)
    .then(salt=>{
        bcryptjs.hash(user.password,salt)
        .then(encryptedPassword=>{
            user.password=encryptedPassword
            next()
        })
    })  
}else{
    next()
}
})

//static method

UserScheme.statics.findByCredentials=function(email,password){
    const User=this
    return User.findOne({email})
    .then(user=>{
        if (!user) {
            return Promise.reject({error:'invalid email/password'})
        }
            return bcryptjs.compare(password, user.password)
            .then(result=>{
                if(result){   
                    return Promise.resolve(user)
                } else{
                    return Promise.reject({error:'invalid email/password'})
                }
            }) 
    })
    .catch(err=>{
        return Promise.reject(err)
    })  
}

//instance method

UserScheme.methods.generateToken=function(){
    const user=this
    const tokenData={
        _id:user._id,
        username:user.username,
        createAt:Date.now
    }
    const token=jwt.sign(tokenData,'jwt@123')
    user.tokens.push({token})
    return user.save()
    .then(user=>{
        return Promise.resolve(token)
    })
    .catch(err=>{
        return Promise.reject(err)
    })
}

//static method

UserScheme.statics.findByToken=function(token){
    const User=this
    let tokenData
    try{
        tokenData=jwt.verify(token,'jwt@123')
    }
    catch(err){
        return Promise.reject(err)
    }
    return User.findOne({
        _id:tokenData._id,
        'tokens.token': token
    })
}
const User=mongoose.model('User', UserScheme)
module.exports={User}