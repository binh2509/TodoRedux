const Todo = require('./todo.model');

const TodoController = {
  getTodo(req , res) {
    Todo.find({}).sort({createdAt: -1}).exec(function (err, todo) {
      if (err) {
        res.json({success: false, todo: todo, message: 'add contact fail'});
      } else {
        res.json({success: true, todo: todo, message: 'add contact true'});
      }
    })
  },
  createTodo(req, res){
    var todo = new Todo({
      name: req.body.name,
      createdAt: Date.now()
    });
    todo.save(function (err) {
      if (err) {
        console.log(err);
        res.json({success: false, message: 'add contact fail'});
      } else {
        res.json({success: true, message: 'add contact true'});
      }
    })
  },
  updateTodo(req, res){
    var todoId = req.param('id');
    Todo.findOne({_id: todoId}, function (error, todo) {
      todo.name = req.body.name;
      todo.save(function (err, result) {
        if (err) {
          return res.json({success: false, message: 'Update failed'});
        }
        res.json({success: true, message: 'Update success'});
      })
    })
  },
  updateTodoDone(req, res){
    var todoId = req.param('id');
    Todo.findOne({_id: todoId}, function (error, todo) {
      todo.done = req.body.value;
      todo.save(function (errror, result) {
        if (error) {
          console.log(error);
          res.json({success: false, message: 'done contact fail'});
        } else {
          res.json({success: true, message: 'done contact true'});
        }
      })
    })
  },
  deleteTodo(req, res){
    var todoId = req.param('id');
    Todo.findOneAndRemove({_id: todoId}, function (errors, result) {
      if (errors) {
        return res.json({success: false, message: 'Remove failed'});
      }
      res.json({success: true, message: 'Remove success'});
    })
  }

};

module.exports = TodoController;
