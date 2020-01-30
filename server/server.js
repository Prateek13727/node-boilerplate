require("./config/config")

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var cors = require('cors')
const _ = require('lodash');
// const {mongoose} = require('./db/mongoose');
// const {Todo} = require('./models/todo');

var corsOptions = {
  origin: 'http://localhost:9000',
  credentials: true
}
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions))
// app.options('*', cors());
app.get('/todos',(req, res) => {
  // const todo = new Todo({'text': req.body.text})
  // todo.save()
  //   .then((doc) => {
  //     res.send(doc)
  //   })
  //   .catch( (err) => {
  //     res.status(400).send(err)
  //   })
  setTimeout(() => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:9000').status(502).send({type: "testing", message: "testing"})
  }, 1000000)
});


app.listen(process.env.PORT, () => {
  console.log(`started on port ${process.env.PORT}`);
});

module.exports = {
  app
}
