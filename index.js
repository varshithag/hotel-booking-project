const express=require('express')
const cors=require("cors")
const app=express()
const port=3006
const {mongoose}=require("./config/database")

const {userRouter}=require('./app/controllers/userController')

app.use(express.json())
app.use(cors())
app.use('/users', userRouter);

app.listen(port,(req,res)=>{
    
    console.log("listening to app", port);
})