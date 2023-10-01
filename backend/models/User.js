const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type:String,
        required : true
    },
    email :{
        type:String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true
    },
    date : {
        type: Date,
        default : Date.now
    },
    isPremium : {
        type: Boolean,
        default : false
    },
    chatbot: {
        type: String,
        default : "3"
      }
});


const User = mongoose.model('user',UserSchema) ;
User.createIndexes();   //correspondes to email...can check in compass
module.exports = User;


// module.exports = mongoose.model('user',UserSchema);