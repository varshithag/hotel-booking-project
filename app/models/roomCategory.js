const mongoose=require('mongoose')
const Schema=mongoose.Schema
const roomCategorySchema=new Schema({
    roomType:{
        type:String,
        required:true
    },
    // image:{
    //     type:File,
    // },
    occupancy:{
        type:Number,
        required:true
    },
    bedType:{
        type:String,
        required:true
    },
    extraBed:{
        type:Boolean,
        required:true,
        default:false
    },
    price:{
        type:Number,
        required:true
    }
})
const RoomCategory=mongoose.model('Room',roomCategorySchema)
module.exports={ RoomCategory }