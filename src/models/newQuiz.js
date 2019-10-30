const mongoose = require('mongoose');
const newQuiz = new mongoose.Schema({
    quizName: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100
    },
    quizImage: {
        type: String,

    },
    quizTitle: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100


    },
    quizDescription: {
        type: String,
        minlength: 10,
        maxlength: 100

    }
    

})


module.exports = mongoose.model('QUIZ', newQuiz);