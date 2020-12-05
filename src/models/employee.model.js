'use strict';

const dbConn = require('../../config/db.config');

class Employee {
  constructor(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.role = employee.role;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

Employee.create = (newEmp, result) => {
  dbConn.query('INSERT INTO employees set ?', newEmp, (err, res) => {
    if (err) {
      console.log('Error inserting into DB: ', err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Employee.findById = (id, result) => {
  dbConn.query('Select * from employees where id = ?', id, (err, res) => {
    if (err) {
      console.log('Error finding by ID: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Employee.findAll = (result) => {
  dbConn.query('Select * from employees', (err, res) => {
    if (err) {
      console.log('Error selecting all employees: ', err);
      result(err, null);
    } else {
      console.log('Employees: ', res);
      result(null, res);
    }
  });
};

Employee.update = (id, employee, result) => {
  dbConn.query(
    'UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,role=?,salary=? WHERE id = ?',
    [
      employee.first_name,
      employee.last_name,
      employee.email,
      employee.phone,
      employee.organization,
      employee.role,
      employee.salary,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log('Error updating: ', err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Employee.delete = (id, result) => {
  dbConn.query('DELETE FROM employees WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('Error deleting: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
