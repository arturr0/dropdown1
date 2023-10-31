const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const subpageRouter1 = require('./routes/service1'); // Import the subpage router
const subpageRouter2 = require('./routes/service2');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public'), { 'Content-Type': 'text/javascript' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(flash());

app.use('/', routes); // Use the main router
app.use('/service1', subpageRouter1);
app.use('/service2', subpageRouter2);

module.exports = app;