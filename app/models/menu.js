const mongoose=require('mongoose')
const Schema=mongoose.Schema

const MenuSchema=new Schema({
    image:{
        type:String
    },
    price:{
        type:Number
    },
    introduction:{
        type:String
    },
    cuisine:{
        type:Schema.Types.String,
        ref:'Cuisine'
    }
})

const Menu=mongoose.model('Menu', MenuSchema)

module.exports={Menu}
