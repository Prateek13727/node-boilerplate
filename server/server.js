require("./config/config")

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({'text': req.body.text})
  todo.save()
    .then((doc) => {
      res.send(doc)
    })
    .catch( (err) => {
      res.status(400).send(err)
    })
});


app.listen(process.env.PORT, () => {
  console.log(`started on port ${process.env.PORT}`);
});

module.exports = {
  app
}
