'use strict';

const Employee = require('../models/employee.model');

exports.findAll = (req, res) => {
  Employee.findAll((err, employees) => {
    if (err) {
      res.status(401).json({
        success: false,
        msg: 'Error finding all employees',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        msg: 'All employees found',
        data: employees,
      });
    }
  });
};

exports.create = (req, res) => {
  const new_employee = new Employee(req.body);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({
      success: false,
      msg: 'Please provide all required fields',
      data: null,
    });
  } else {
    Employee.create(new_employee, (err, employee) => {
      if (err) {
        res.status(401).json({
          success: false,
          msg: 'Error adding new employee',
          data: null,
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'Employee added successfully',
          data: employee,
        });
      }
    });
  }
};

exports.findById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) {
      res.status(401).json({
        success: false,
        msg: 'Error finding employee',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        msg: 'Employee found successfully',
        data: employee,
      });
    }
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({
      success: false,
      msg: 'Please provide all required fields',
      data: null,
    });
  } else {
    Employee.update(req.params.id, new Employee(req.body), (err, employee) => {
      if (err) {
        res.status(401).json({
          success: false,
          msg: 'Error updating employee',
          data: null,
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'Employee updated successfully',
          data: employee,
        });
      }
    });
  }
};

exports.delete = (req, res) => {
  Employee.delete(req.params.id, (err, employee) => {
    if (err) {
      res.status(401).json({
        success: false,
        msg: 'Error deleting employee',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        msg: 'Employee deleted successfully',
        data: employee,
      });
    }
  });
};
