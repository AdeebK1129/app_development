// import assert. assert is used to compare two Boolean values
const assert = require('assert');

// import student schema
const Student = require('../src/students');

// describe function to push testing through Mocha
describe('Create the first data', () => {
    it('Saved the student', () => {
        // create a new student
        const student1 = new Student({name: "Martha"});

        // read and save the student in the database. Mongo will save the new student in the database
        student1.save()
        // check if the student is not new using the .then method
        // if the student is new, the promise reaches the 'fulfilled' state and will proceed to create the schema for the new student. Otherwise, the promise reaches the 'rejected' state and will proceed to reject line 'student1.save()'
        .then(() => {
            assert(!student1.isNew)
        })
        
    })
})