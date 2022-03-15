const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        required : true,
    
    },
    password:{
        type: Number,
        required : true,
    },
    place:{
        type:String,
        required: true,
    },
});

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel;