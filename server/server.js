require("./config/config")

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const _ = require('lodash');

// const {ObjectID} = require('mongodb');
// const {mongoose} = require('./db/mongoose');
// const {Todo} = require('./models/todo');

var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
}
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions))

// app.post('/todo', (req,res) => {
//   const todo = new Todo({'text': req.body.text})
//   todo.save()
//     .then((doc) => {
//       res.send(doc)
//     })
//     .catch( (err) => {
//       res.status(400).send(err)
//     })
// });

app.get('/sucess', (req, res) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080').status(200).send({type: "success", message: "Ready for the next"})
})

app.get('/timeout',(req, res) => {
  setTimeout(() => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080').status(502).send({type: "testing", message: "testing_timeout"})
  }, 1000000)
});

app.get('/error', (req, res) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080').status(400).send({type: "Bad Request", message: "error"})
})

app.get('/unhandled', (req, res) => {
  throw new Error()
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080').status(400).send({type: "Bad Request", message: "error"})
})


app.listen(process.env.PORT, () => {
  console.log(`started on port ${process.env.PORT}`);
});

module.exports = {
  app
}
