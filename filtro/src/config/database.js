const mongoose = require('mongoose');
let Students

const connectDatabase = async () => {
    try {
        if (!Students) {
            Students = mongoose.model('students', require('../model/studentsModel').schema);
        }

        await mongoose.connect('mongodb+srv://pipe2893:w01XhYIx9xWeLkHK@filtro.3cjnv7i.mongodb.net/')
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        console.log('Initializing data');
    } catch (error) {
        console.log('Error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
