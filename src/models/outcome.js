const mongoose = require('mongoose');
const outcome = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    content: { 
        type: String
    },
    url:{
        type: String
    },
    Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"QUIZ"
    }
    

})


module.exports = mongoose.model('outcome', outcome)