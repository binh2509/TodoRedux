const mongoose = require('mongoose');
const Todo = mongoose.model('Todo', {
  name: String,
  done: {
    type: Boolean,
    default: false
  },
  createdAt: Date
});
module.exports = Todo;