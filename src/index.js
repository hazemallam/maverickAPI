const express = require('express');
const cors = require('cors');
require('./db/mongoose')
const newQuizRouter = require('./routes/newQuiz');
const app = express()
app.use(cors())
port = process.env.port || 5006
app.use(express.json())
app.use(newQuizRouter)
app.listen(port , ()=> console.log(`server run on port ${port}`))