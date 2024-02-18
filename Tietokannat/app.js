var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require('./database');
const bcrypt = require('bcryptjs');
const basicAuth = require('express-basic-auth');

var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))
app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use(
    function(req,res,next){
        console.log('The common middleware1 called');
        next();
    }
);


app.use(
    function(req,res,next){
        console.log('The common middleware2 called');
        next();
    }
);
function myAuthorizer(username, password,cb){
    db.query('SELECT password FROM user WHERE username = ?',[username], 
      function(dbError, dbResults, fields) {
        if(dbError){
              response.json(dbError);
              console.log("error1");
            }
        else {
          if (dbResults.length > 0) {
            bcrypt.compare(password,dbResults[0].password, 
              function(err,res) {
                if(res) {
                  console.log("succes");
                  return cb(null, true);
                }
                else {
                  console.log("wrong password");
                  return cb(null, false);
                }			
                response.end();
              }
            );
          }
          else{
            console.log("user does not exists");
            return cb(null, false);
          }
        }
      }
    );
    }
module.exports = app;
