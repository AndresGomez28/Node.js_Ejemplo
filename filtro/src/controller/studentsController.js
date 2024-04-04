const Students = require('../model/studentsModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = '##%asdqweasdqwe##';

const studentsController = {
    getStudenst: async (req, res) => {
        try {
            const student = await Students.find();
            res.json(student);
        } catch (err) {
            console.error('Error to get students:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getStudentById: async (req, res) => {
        const id = req.params.studentId;
        try {
            const idStudent = await Students.findById(id)
            res.json(idStudent);
        } catch (error) {
            console.error('Error to get students:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    createStudent: async (req, res) => {
        const dataStudent = req.body;
        console.log(dataStudent);
        try {
            const newStudent = new Students(dataStudent);
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent);
        } catch (error) {
            console.error('Error to create student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    updateStudent: async (req, res) => {
        try {
            const {studentId} =req.params;
            const updateStudent = await Students.findOneAndUpdate({studentId: studentId}, {$set: {name:'Updated Student'}});
            res.json(updateStudent)
        } catch (error) {
            console.error('Error to update student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const {studentId} = req.params;
            const deleteStudent = await Students.findOneAndDelete({studentId: studentId});
            res.json(deleteStudent);
        } catch (error) {
            console.error('Error to delete student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    register: async (req, res) => {
        try {
            const student = await Students.find();
            const {name, identification, age} = req.body;
            
            const studentData = {
                studentId: student.length + 1,
                name: name,
                identification: identification,
                age: age,
            }
            
            const newStudent = new Usuarios(studentData);
            const savedStudent = await newStudent.save();
            // res.status(201).json(savedStudent)
            res.status(201).json('Student creeated successfully')
        
        } catch (error) {
            console.error('Error to student register:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

module.exports = studentsController;