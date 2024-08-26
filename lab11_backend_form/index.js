// import libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./src/models/User'); // Import the User model

// create an app using express
const app = express();

// use the body-parse middleware to handle data sent in the body of HTTP requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from the 'public' folder
app.use(express.static('public'));

// connect to the database using mongoose
mongoose.connect('mongodb://localhost/userlogin', { useNewUrlParser: true, useUnifiedTopology: true });

// check the database connection
mongoose.connection
  .once('open', () => {
    console.log('Connected to userlogin database');
  })
  .on('error', (e) => {
    console.log('Error connecting ...', e);
  });

// ** HTTP REQUESTS **
// POST: posting the form
app.post('/login', async (request, response) => {
    try {
        // Get the data from index.html form
        const username = request.body.username;
        const password = parseInt(request.body.password); // password is cast as an integer
        
        // Testing (optional)
        console.log(`Entered username = ${username} and entered password = ${password}`);

        // Get data from the database, MongoDB, and check if information, username, and password match
        const user = await User.findOne({ username: username });

        if (!user) {
            response.send('Information does not match');
        } else if (user.password === password) {
            console.log('Successfully logged in');
            response.send('Login successful');
        } else {
            console.log('Password does not match');
            response.send('Password does not match');
        }
    } catch (error) {
        console.log(error);
        response.send('Invalid Information');
    }
});

// *** ROUTES ***
// create checking page 
app.get('/', (request, response) => {
    response.redirect('index.html');
}).listen(3000);
