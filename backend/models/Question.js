const mongoose = require("mongoose")
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    user :{
        //works as foreign key
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    quest : {
        type:String,
    },
    marks :{
        type:String,
    },
    year : {
        type: String,
    },
    subject : {
        type: String,
      }
});


const Question = mongoose.model('question',QuestionSchema) ;
Question.createIndexes();   //correspondes to email...can check in compass
module.exports = Question;


// module.exports = mongoose.model('user',UserSchema);