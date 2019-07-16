const mongoose=require('mongoose')
const Schema=mongoose.Schema
const roomBookingSchema= new Schema({
    room:{
        type:Schema.Types.ObjectId,
        ref:'Room'
    },
    extra:{
        type:Boolean,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'  
    },
    checkin:{
        type:Date,
        required:true
    },
    checkout:{
        type:Date
    },
    addon:{
        type:Schema.Types.ObjectId,
        ref:'addon'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    amount:{
        type:Number,
        required:true
    }

})
const RoomBooking=mongoose.model('RoomBooking',roomBookingSchema)
module.exports={
    RoomBooking
}