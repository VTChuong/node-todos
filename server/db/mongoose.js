const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const conn = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(conn);

module.exports = { mongoose };