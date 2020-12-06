'use strict';

const dbConn = require('../../config/db.config');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

class User {
  constructor(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = bcrypt.hashSync(user.password, 10);
    this.phone = user.phone;
    this.unique_id = uuidv4();
    this.status = user.status ? user.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

User.create = (newUser, result) => {
  dbConn.query('INSERT INTO users set ?', newUser, (err, res) => {
    if (err) {
      console.log('Error inserting into DB: ', err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

User.findById = (id, result) => {
  dbConn.query('Select * from users where id = ?', id, (err, res) => {
    if (err) {
      console.log('Error finding by ID: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.findAll = (result) => {
  dbConn.query('Select * from users', (err, res) => {
    if (err) {
      console.log('Error selecting all users: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.update = (id, result) => {
  dbConn.query(
    'UPDATE users SET first_name=?,last_name=?,email=?,phone=?,password=? WHERE id = ?',
    [
      user.first_name,
      user.last_name,
      user.email,
      user.password,
      user.phone,
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

User.delete = (id, result) => {
  dbConn.query('DELETE FROM users WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('Error deleting: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
