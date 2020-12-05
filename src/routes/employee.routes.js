const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// Get all employees
router.get('/', employeeController.findAll);

// Create new employee
router.post('/', employeeController.create);

// Get single employee by ID
router.get('/:id', employeeController.findById);

// Update employee by ID
router.put('/:id', employeeController.update);

// Delete an employee by ID
router.delete('/:id', employeeController.delete);

module.exports = router;
