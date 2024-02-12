var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

app.use('/example',
    function(req,res,next){
        console.log('The example middleware1 called');
        next();
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name) ;
        //console.log('I am example');
    }
);
app.use('/example',
    function(req,res,next){
        console.log('The example middleware2 called');
        next();
    }
);
app.get('/example/:fname/:lname',
    function(request,response){
        response.send('Hello '+request.params.fname+' '+request.params.lname) ;
        //console.log('I am example');
    }
);

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);
module.exports = app;
