const express=require('express')
const cors=require("cors")
const app=express()
const multer=require('multer')
const port=3006
const {mongoose}=require("./config/database")
const bodyParser=require('body-parser')

const {userRouter}=require('./app/controllers/userController')
const { CuisineRouter }=require('./app/controllers/cuisineController')
const RoomCategoryRouter=require('./app/controllers/roomController')
app.use(express.json())
app.use(cors())
app.use('/users', userRouter)
app.use('/cuisines', CuisineRouter)
app.use('/roomcategory',RoomCategoryRouter)
app.use(bodyParser.urlencoded({extended:true}))
var storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads')
  },
  filename:function(req,file,cb){
    cb(null,file.fieldname+'-'+Date.now())
  }
})
const upload=multer({storage:storage})
module.exports=upload
app.listen(port,(req,res)=>{
  console.log("listening to app", port);
})