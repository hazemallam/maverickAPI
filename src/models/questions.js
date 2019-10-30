const mongoose = require('mongoose');
const questions = mongoose.Schema({
    question:{
        type: String,
        required: true,
        minlength: 10,
        maxlength:100
    },
    answerType:{
        type: String,
        required: true
    }, 
    answers:{
        type: String
    }
})

module.exports = mongoose.model('questions', questions)