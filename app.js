const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const index = require('./routes/index');

const app = express();
const port = 1337;

app.use(cors());

// Login with Morgan
if (process.env.NODE_ENV !== 'test') {
  // use morgan to log at command line
  app.use(morgan('combined'));  // 'combined' outputs the Apache style LOGs
}

app.use('/', index);
app.use('/user', index);

// To use parameters with POST, PUT and DELETE
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenconded

// Middleware - Custom log called for all routes
// Put this first!
/* app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  next();
}); */


// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last!
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Custom error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
      return next(err);
  }

  res.status(err.status || 500).json({
      "errors": [
          {
              "status": err.status,
              "title":  err.message,
              "detail": err.message
          }
      ]
  });
});