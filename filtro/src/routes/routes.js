const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentsController');
const auth = require('../middelware/auth');

// router.get('/api/v1/students', auth.authenticate(), studentsController.getStudenst);
router.get('/api/v1/students', studentsController.getStudenst);
router.get('/api/v1/students/id/:id', studentsController.getStudentById);
router.post('/api/v1/students', studentsController.createStudent);
router.patch('/api/v1/students/update/:studentId', studentsController.updateStudent);
router.delete('/api/v1/students/delete/:studentId', studentsController.deleteStudent);
router.post('/api/v1/students/register', studentsController.register);


module.exports = router;