const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    studentId: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    identification: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
});

const Students = mongoose.model('students', studentSchema);

module.exports = Students;