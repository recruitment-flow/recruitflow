const express = require("express");
const pool = require('./config/database');

const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get('/', (req, res) => {   
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))