const mongoose = require('mongoose');


const ProductsSchema=mongoose.Schema({
    customer:String,
    name: String,
    date: { type: Date},
    totalSale:Number,
    description:String
})


module.exports=mongoose.model('adminproducts', ProductsSchema);