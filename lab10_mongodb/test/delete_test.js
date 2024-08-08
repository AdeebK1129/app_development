const assert = require('assert');
const Student = require('../src/students');
const { describe } = require('mocha');

describe('Delete the records', () => {
    let student1

    beforeEach((done) => {
        student1 = new Student({name: "Peter"})
        student1.save()

        .then(() => {
            done()
        })
    })

    it('delete by id', () => {
        Student.findByIdAndDelete(student1._id)
        .then(() => {
            Student.findOne({name: "Peter"})
        })
        .then((student) => {
            assert(student === null)
            done()
        })
    })

})