const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const badgesRouter = require('./routes/badges');
const matchesRouter = require('./routes/matches');
const messagesRouter = require('./routes/messages');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter(db));
app.use('/badges', badgesRouter(db));
app.use('/matches', matchesRouter(db));
app.use('/messages', messagesRouter(db));
app.use('/users', usersRouter(db));


module.exports = app;
