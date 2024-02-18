var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require('./database');
const bcrypt = require('bcryptjs');
const basicAuth = require('express-basic-auth');

var bookRouter = require('./routes/book');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/********myAuthorizer.js********/
app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))


function myAuthorizer(username, password,cb){
    db.query('SELECT password FROM user WHERE username = ?',[username], 
      function(dbError, dbResults, fields) {
        if(dbError){
              response.json(dbError);
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



/* **********************************/
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);


module.exports = app;