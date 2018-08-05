const {ObjectID} = require('mongodb');
const {Todo} = require('../../models/todo');

const todos = [{
  text: "create a new test from postman",
  _id: new ObjectID()
},{
  text: "create a new test2 from postman",
  _id: new ObjectID()
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos).then(() => done())
  })
}

module.exports = {
	todos,
	populateTodos,
}