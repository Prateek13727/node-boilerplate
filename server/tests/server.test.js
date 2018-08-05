const expect =  require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../models/todo');
const {app} = require('./../server');
const { todos, populateTodos } = require('./seed/seed');

beforeEach(populateTodos);

describe('POST /todos', () => {
  it('create a new todo', (done) => {
    const text = "Test todo text";
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }
      Todo.find({'text': 'Test todo text'})
        .then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        })
        .catch((e) => done(e));
    });
  });
});

