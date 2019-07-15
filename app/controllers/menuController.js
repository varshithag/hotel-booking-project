const express=require('express')
const router=express.Router()
const {Menu}=require('../models/menu')


router.get('/',(req,res)=>{
    Menu.find()
    .then(menus=>res.json(menus))
    .catch(err=>res.json(err))
})

router.post('/',(req,res)=>{
    const body=req.body
    const menu=new Menu(body)
    menu.save()
    .then(menu=>res.json(menu))
    .catch(err=>res.json(err))
})

router.get('/:id', (req, res)=>{
    const id=req.params.id
    Menu.findById(id).populate('cuisine')
    .then(menu => res.json(menu))
    .catch(err => res.json(err))
})

router.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Menu.findByIdAndUpdate(id, {$set:body}, {new:true})
    .then(menu => res.json(menu))
    .catch(err => res.json(err))
})

router.delete('/:id', (req,res)=>{
    const id=req.params.id
    Menu.findByIdAndDelete(id)
    .then(menu => res.json(menu))
    .catch(err => res.json(err))
})

module.exports={
    menuRouter:router
}