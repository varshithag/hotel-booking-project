const mongoose=require('mongoose')
const Schema=mongoose.Schema
const RoomBookingSchema= new Schema({
    room:{
        type:Schema.Types.ObjectId,
        ref:'RoomCategory'
    },
    extrabed:{
        type:Boolean
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    checkin:{
        type:Date
    },
    checkout:{
        type:Date
    },
    addon:{
        type:Schema.Types.ObjectId,
        ref:Addon
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const RoomBooking=mongoose.model('RoomBooking',RoomBookingSchema)
module.export={
    RoomBooking
}