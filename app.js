const app = require('express')();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');


const indexRouter = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);

module.exports = app;
