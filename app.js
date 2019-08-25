var createError = require('http-errors');
var config = require('config');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const auth = require('./middleware/auth');
const role_permission = require('./middleware/role_permission');

const passport = require("passport");

var hospitalRouter = require("./model/hospital/hospital.route");
var doctorRouter = require("./model/doctor/doctor.route");
var patientRouter = require('./model/patient/patient.route');
var staffRouter = require("./model/staff/staff.route");
var departmentRouter = require('./model/department/department.route');
var loginRouter = require('./model/login/login.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./database/database-config');
require('./config/passport-local');

 // all routes 
app.use('/hospital',auth ,role_permission, hospitalRouter);
app.use('/doctor',auth, role_permission, doctorRouter);
app.use('/patient',auth, role_permission, patientRouter);
app.use('/staff', auth, role_permission, staffRouter);
app.use('/department',auth, role_permission, departmentRouter);
app.use('/login', loginRouter);


app.use("/", (req, res,next) => {
  res.status(200).json({message: "My first API using express JS"});
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
