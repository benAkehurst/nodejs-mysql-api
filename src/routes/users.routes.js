const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

// Get all employees
router.get('/', userController.findAll);

// Create new employee
router.post('/', userController.create);

// Get single employee by ID
router.get('/:id', userController.findById);

// Update employee by ID
router.put('/:id', userController.update);

// Delete an employee by ID
router.delete('/:id', userController.delete);

module.exports = router;
