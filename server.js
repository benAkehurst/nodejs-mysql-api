const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();
require('dotenv').config();

// Setup server port
const port = process.env.PORT || 5000;

// Server setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors Controls
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS'
  );
  next();
});
app.use(cors());

// Expose routes & methods
const employeeRoutes = require('./src/routes/employee.routes');
app.use('/api/v1/employees', employeeRoutes);
const userRoutes = require('./src/routes/users.routes');
app.use('/api/v1/users', userRoutes);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
