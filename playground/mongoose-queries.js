const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '59a50e590546db0b6ac2f955000';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch(e => {
//     console.log(e);
// });

User.findById('59a4eb0aa4e5ad210725ad23').then(user => {
    if (!user) {
        console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
})