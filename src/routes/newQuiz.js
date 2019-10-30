const express = require('express');
const router = express.Router();
const Quiz = require('../models/newQuiz');
const Outcome = require('../models/outcome');
const Questions = require('../models/questions');
//create new quiz

router.post('/newquiz', async(req, res)=>{
    const newQuiz = new Quiz(req.body)
   await newQuiz.save()
    .then(()=> res.status(200).send(newQuiz))
    .catch((err)=> res.status(400).send(err))
})

//create new outcome
router.post('/outcome', async(req, res)=>{
    const outcome = new Outcome(req.body)
   await outcome.save()
    .then(()=> res.status(200).send(outcome))
    .catch((err)=> res.status(400).send(err))
})

//create new questions
router.post('/questions', async(req,res)=>{
    const questions = new Questions(req.body) 
    await questions.save()
    .then(()=> res.status(200).send(questions))
    .catch((err)=> res.status(400).send(err))
})

//get single outcome
router.get('/outcome/:id', (req, res) => {
    const id = req.params.id
     Outcome.findById(id)
        .then((outcome) => {
            res.status(200).send(outcome)
        })
        .catch((error) => res.status(400).send(error))
})
module.exports = router