var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// db connection
const db = require('./configs/db.config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var matchesRouter = require('./routes/matches');
var messagesRouter = require('./routes/messages');
var badgesRouter = require('./routes/badges');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/matches', matchesRouter(db));
app.use('/messages', messagesRouter(db));
app.use('/badges', badgesRouter(db));


module.exports = app;
