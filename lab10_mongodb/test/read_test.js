// import 
const assert = require('assert');
const Student = require('../src/students');
const { describe } = require('mocha');

describe('Read the data', () => {
    let student1, student2

    beforeEach((done) => {
        student1 = new Student({name: "Peter"})
        student2 = new Student({name: "Martha"})
        student1.save()
        student2.save()
        .then(() => {
            done()
        })
    })

    it('Find all students with name Martha', async() => {
        const students = await Student.findOne({name:"Martha"})
        console.log(students)
        console.log(students._id)
    })
})


