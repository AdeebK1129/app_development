// import mongoose
const mongoose = require('mongoose');

// connect to MongoDB where 'students_list' is the name of the database
mongoose.connect("mongodb://localhost/students_list");

// check if it is connected
mongoose.connection
    // use .once to watch for mongoDB to connect the first time when the event occurred
    .once('open', () => {
        console.log('\n ----- Connected to MongoDB ----- \n')
    })
    // use the .on to watch for error in the connection
    .on('error', (e) => {
        console.log('Error Counting '), e
    })

// clear all collections from the 'students' document
beforeEach((done) => {
    mongoose.connection.collections.students.drop()
    done()
})