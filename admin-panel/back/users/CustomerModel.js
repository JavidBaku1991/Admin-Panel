const mongoose = require('mongoose');


const CustomerSchema=mongoose.Schema({
    name:String,
    lastName:String,
    number: Number ,
   
})


module.exports=mongoose.model('admincustomers', CustomerSchema);