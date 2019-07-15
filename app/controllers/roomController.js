const express=require('express')
const router=express.Router()
const {RoomCategory}=require('../models/roomCategory')
const {authenticateUser}=require('../middleware/user-authentication')
const upload=require('../../index')
router.get('/',(req,res)=>{
    RoomCategory.find()
    .then(rooms=>{
        res.json(rooms)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.post('/',upload.single('image'),function(req,res){
    const body=req.body   
        const roomCategory=new RoomCategory(body)
        roomCategory.save()
        .then(roomcategory=>{
            res.json(roomcategory)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    // else{
    //     res.json({notice:"authenticate user"})
    // }
)

router.put('/:id',authenticateUser,(req,res)=>{
    const id=req.params.id
    const body=req.body
    if(req.user){
        RoomCategory.findOneAndUpdate({_id:id},{$set:body},{new:true})
        .then(roomcategory=>{
            res.json(roomcategory)
        })
        .catch(err=>{
            res.json(err)
        })
    }
})
router.get('/:id',(req,res)=>{
    const id=req.params.id
    RoomCategory.findById(id)
    .then(roomcategory=>{
        res.json(roomcategory)
    })
    .catch(err=>{
        res.json(err)
    })
})
const RoomCategoryRouter=router
module.exports=RoomCategoryRouter