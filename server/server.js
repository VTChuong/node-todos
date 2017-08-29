const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then(doc=> {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos',(req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, e => res.status(400).send(e))
});

// GET/todos/12345
app.get('/todos/:id', (req, res)=> {
    const id = req.params.id;

    // validate id using isValid
        // 404 - send back empty send
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // findById
    Todo.findById(id).then(todo => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo})
    }).catch(e => res.status(400).send())
        // success
          // if todo - send it back
          // no todo - send back 404 with empty body
        // error
            // 400 - and send empty body back
});

app.listen(port, () => {
    console.log(`Started up on port ${port}`);
});

module.exports = { app };