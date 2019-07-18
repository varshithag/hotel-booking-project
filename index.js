const express=require('express')
const cors=require("cors")
const app=express()
const multer=require('multer')
const {mongoose}=require("./config/database")
const path = require("path");
const port = process.env.PORT || 3006


const {userRouter}=require('./app/controllers/userController')
const { CuisineRouter }=require('./app/controllers/cuisineController')
const RoomCategoryRouter=require('./app/controllers/roomController')
const {menuRouter}=require('./app/controllers/menuController')

app.use(express.json())
app.use(cors())
app.use('/users', userRouter)
app.use('/cuisines', CuisineRouter)
app.use('/roomcategory',RoomCategoryRouter)
app.use('/menus', menuRouter)
app.use(express.static(path.join(__dirname, "client/build")))


app.get('/', function(req,res){
  res.sendFile(__dirname+'/index.html')
})
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})


app.listen(port,(req,res)=>{
  console.log("listening to app", port);
})