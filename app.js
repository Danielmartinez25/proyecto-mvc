const express = require('express');
const app = express();
const path = require('path');
PORT = 3000;


app.use(express.static('public'));


const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server running in http://localhost:' +  3000))
