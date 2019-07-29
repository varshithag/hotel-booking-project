const mongoose=require('mongoose')
const Schema=mongoose.Schema
const tableBookingSchema=new Schema({
        adult:{
            type:Number,
            required:true
        },
        children:{
            type:Number            
        },
        bookingDay:{
            type:Date,
            required:true
        },
        bookingTime:{
            type:Number,
            required:true
        }
    })
    const Table=mongoose.model('Table',tableBookingSchema)
    module.exports=Table
