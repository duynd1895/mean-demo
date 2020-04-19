const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


// import router
const postRoute = require('./routes/post');
mongoose.connect('mongodb://localhost:27017/kakaka', {useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to database.')
  })
  .catch(() => {
    console.log('Connected failed!')
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', postRoute);


module.exports = app;
