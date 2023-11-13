const mongoose = require('mongoose');


const EmployeesSchema=mongoose.Schema({
    name:String,
    lastName:String,
    email:String,
    address:String,
    number: Number ,
   
})


module.exports=mongoose.model('adminEmployees', EmployeesSchema);