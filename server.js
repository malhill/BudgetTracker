// Given code
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', 
{ 
    useNewUrlParser: true, 
    useFindAndModify: false 
});
 
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});