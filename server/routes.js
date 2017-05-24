const express = require('express');
const TodoController = require('./todo/todo.controller');

const router = express.Router();

router.get('/todo', TodoController.getTodo);
router.post('/create-todo/', TodoController.createTodo);
router.put('/update-todo/:id', TodoController.updateTodo);
router.delete('/delete-todo/:id', TodoController.deleteTodo);
router.put('/update-todo-done/:id', TodoController.updateTodoDone);

module.exports = router;