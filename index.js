const express=require('express')
const cors=require("cors")
const app=express()
const port=3006
const {mongoose}=require("./config/database")

const {userRouter}=require('./app/controllers/userController')
const { CuisineRouter }=require('./app/controllers/cuisineController')
const RoomCategoryRouter=require('./app/controllers/roomController')
app.use(express.json())
app.use(cors())
app.use('/users', userRouter)
app.use('/cuisines', CuisineRouter)
app.use('/roomcategory',RoomCategoryRouter)

app.listen(port,(req,res)=>{
  console.log("listening to app", port);
})