const express = require("express");
const pool = require('./config/database');
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

const clientRouter = require('./routes/clientRouter');
const groupRouter = require('./routes/groupRouter');
const managerRouter = require('./routes/managerRouter');
const requirementRouter = require('./routes/requirementRouter');
const roleRouter = require('./routes/roleRouter');
const userRouter = require('./routes/userRouter');
const leadRouter = require('./routes/leadRouter');
const recruiterRouter = require('./routes/recruiterRouter');
const submissionRouter = require('./routes/submissionRouter');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/', clientRouter)
app.use('/api/', groupRouter)
app.use('/api/', managerRouter)
app.use('/api/', requirementRouter)
app.use('/api/', roleRouter)
app.use('/api/', userRouter)
app.use('/api/', leadRouter)
app.use('/api/', recruiterRouter)
app.use('/api/', submissionRouter)



app.get('/', (req, res) => {   
    res.send('WELCOME TO BACKEND APPLICATION!')
})

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))