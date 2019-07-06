const mongoose=require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.Promise=global.Promise

mongoose.connect("mongodb://localhost:27017/hotel-booking",{ useNewUrlParser:true })
.then(res=>{
    console.log("connected to db successfully")
})
.catch(err=>{
    console.log("error to connect db")
})

module.exports={mongoose}