const express = require('express');

// PORT NUMBER AT WHICH OUR SERVER WILL BE RUNNING
const port = 3000;

// CREATE OBJECT OF EXPRESS
const app = express();


// FOR DECODING URL
app.use(express.urlencoded());


// THIS IS HOME PAGE URL
app.get('/', function (req, res) {
    res.send("<h1>hello world</h1>")
});






// SERVER
app.listen(port, function (err) {
    if (err) {
        console.log("Error in setting up the express server!");
    }
    console.log("Express server is up and running on port:", port);
});


    

