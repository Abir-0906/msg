const mongoose = require('mongoose');

const chatschema= new mongoose.Schema({
    from:{
        type:String,
        required:true
        },
    to:{
        type:String,
        required:true
    },

    message:{
        type:String,
        maxlength:50

    },
    createdate:{
        type:Date,
        required:true
    },

})

const Chat=mongoose.model("Chat",chatschema);
module.exports=Chat;
