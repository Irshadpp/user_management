const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
});

module.exports = mongoose.model('User', UserSchema);