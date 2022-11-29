const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let pizzasSchema = new Schema({

name: {
    type: String
},
varients :{
  type: Array
},
prices: {
    type: Number
},
category: {
    type: String
},
desk:{
    type: String
},
toppings :{
  type: Array
},
Image :{
    type: String
  },
  cheesetypes :{
    type: Array
  },
},{
    collection: 'pizzas'
})

module.exports = mongoose.model('Pizza', pizzasSchema)
