const express = require('express');

// PORT NUMBER AT WHICH OUR SERVER WILL BE RUNNING
const port = 3000;

// CREATE OBJECT OF EXPRESS
const app = express();

// GET THE PATH OBJECT TO SET THE PATH OF CSS FILE (OR JAVASCRIPT FILE)
const path = require('path');

// FOR DECODING URL
app.use(express.urlencoded());

// CREATE TO THE DATABASE
const db = require('./config/mongoose');

// IMPORT TODO OBJECT FROM THE MODEL

const Todo = require('./models/todo');

// USING EJS AS TEMPLE ENGINE 
app.set('view engine', 'ejs');

// SET THE PATH OF VIEWS DIRECTORY
app.set('views', path.join(__dirname, 'views'));


// THIS IS HOME PAGE URL
app.get('/', function (req, res) {
    res.locals = {variable:"Ajay Rathore"}
    res.render('home', res.locals)
});









// SERVER
app.listen(port, function (err) {
    if (err) {
        console.log("Error in setting up the express server!");
    }
    console.log("Express server is up and running on port:", port);
});


    

