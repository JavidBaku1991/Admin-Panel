const mongoose = require('mongoose');


const dateSchema=mongoose.Schema({
    title:String,
    start:Date,
    end:Date,
    allDay: Date ,
   
})


module.exports=mongoose.model('admindates', dateSchema);