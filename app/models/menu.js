const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    // image: {
    //     type: String
    // },
    name:{
        type:String
    },
    price: {
        type: Number
    },
    introduction: {
        type: String
    },
    cuisine: {
        type: Schema.Types.ObjectId,
        ref: 'Cuisine'
    }
})

const Menu = mongoose.model('Menu', MenuSchema)

module.exports = { Menu }
