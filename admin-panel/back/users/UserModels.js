const mongoose = require('mongoose');


const UserSchema=mongoose.Schema({
    username: { type: String, required: true, unique: true} ,
    lastName:String,
    email:String,
    password:String,
    isactive: String ,
    isadmin: String 
   
})


module.exports=mongoose.model('adminuers', UserSchema);