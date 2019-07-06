const express=require('express')
const {Cuisine}=require('../models/cuisine')
const router=express.Router()

router.get('/', (req, res) => {
    Cuisine.find()
        .then(cuisines => res.json(cuisines))
        .catch(err => res.json(err))
})

router.post('/', (req, res) => {
    const body = req.body
    const cuisine = new Cuisine(body)
    cuisine.save()
        .then(cuisine => res.json(cuisine))
        .catch(err => res.json(err))
})
router.get('/:id', (req, res) => {
    const id = req.params.id
    Cuisine.findById(id)
        .then(cuisine => res.json(cuisine))
        .catch(err => res.json(err))
})
router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    Cuisine.findByIdAndUpdate(id, body, { new: true })
        .then(cuisine => res.json(cuisine))
        .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Cuisine.findByIdAndDelete(id)
        .then(cuisine => res.json(cuisine))
        .catch(err => res.json(err))
})

module.exports = {
    CuisineRouter:router
}