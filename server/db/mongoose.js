const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const conn = process.env.MONGODB_URI;
mongoose.connect(conn);

module.exports = { mongoose };