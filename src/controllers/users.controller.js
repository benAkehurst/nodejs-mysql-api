'use strict';

const User = require('../models/users.model');

exports.findAll = (req, res) => {
  User.findAll((err, users) => {
    if (err) {
      res.status(401).json({
        success: false,
        msg: 'Error finding all users',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        msg: 'All users found',
        data: users,
      });
    }
  });
};

exports.create = (req, res) => {
  const new_user = new User(req.body);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({
      success: false,
      msg: 'Please provide all required fields',
      data: null,
    });
  } else {
    User.create(new_user, (err, user) => {
      if (err) {
        res.status(401).json({
          success: false,
          msg: 'Error adding new user',
          data: null,
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'user added successfully',
          data: user,
        });
      }
    });
  }
};

exports.findById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(401).json({
        success: false,
        msg: 'Error finding user',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        msg: 'user found successfully',
        data: user,
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
    User.update(req.params.id, new User(req.body), (err, user) => {
      if (err) {
        res.status(401).json({
          success: false,
          msg: 'Error updating user',
          data: null,
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'user updated successfully',
          data: user,
        });
      }
    });
  }
};

exports.delete = (req, res) => {
  User.delete(req.params.id, (err, user) => {
    if (err) {
      res.status(401).json({
        success: false,
        msg: 'Error deleting user',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        msg: 'user deleted successfully',
        data: user,
      });
    }
  });
};
