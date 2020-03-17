require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect database
mongoose.connect(process.env.DB_LOCAL || process.env.DB_HOST,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log('ERROR! : ',err));

app.get('/', function (req, res) {
    res.json('welcome to backend cuahang7ty')
})

app.listen(process.env.PORT || process.env.PORT, function () {
    console.log('Server is running on Port:', process.env.PORT || process.env.PORT);
})

module.exports = app
