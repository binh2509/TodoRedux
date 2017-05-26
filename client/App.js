import React from 'react';
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {setTodo, addTodo, updateTodo, editTodo, changeEditTodoValue} from './actions';
import $ from 'jquery';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleChangeEditTodo = this.handleChangeEditTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentWillMount(){
    this.getTodo();
  }
  getTodo() {
    $.get('http://localhost:7000/todo' , (response) => {
      this.props.setTodo(response.todo);
    });
  }
  editItem (index, todo){
    console.log('Edit');
    this.props.editTodo({index, todo});
  }
  handleChangeEditTodo(event) {
    this.props.changeEditTodoValue(event.target.value);
  }
  handleUpdate(event) {
    event.preventDefault();
    $.ajax({
      type: "PUT",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:7000/update-todo/" + this.props.todoApp.editTodo.todo._id,
      data: JSON.stringify({
        name: this.props.todoApp.editTodo.todo.name,
      }),
      success: (response) =>{
        if (response.success) {
          this.getTodo();
        }
      }
    });
  }
  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:7000/create-todo",
      data: JSON.stringify({
        name: document.getElementById('todo-input').value,
      }),
      success: (response) =>{
        if (response.success) {
          document.getElementById('todo-input').value = '';
          this.getTodo();
        }
      }
    });
  }
  render(){
    return(
      <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="todo-input" className="form-control"/>
          </form>
          <ul className="list-group">
            {this.props.todoApp.todo.map((todoItem, index) =>{
              return <li key={index} className="list-group-item">
                {(this.props.todoApp.editTodo.index !== index) ? <div>
                  <input type="checkbox"/>
                  <span onDoubleClick={() => this.editItem(index, todoItem)}>{todoItem.name}</span>
                  <a className="pull-right">Remove</a>
                </div>: <form onSubmit={this.handleUpdate}>
                  <input
                    onChange={this.handleChangeEditTodo}
                    type="text"
                    value={this.props.todoApp.editTodo.todo.name}
                    className="form-control"
                  />
                </form>}
              </li>
            })}
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return { todoApp: state.todo}
}
function mapDispatchProps (dispacth) {
  return bindActionCreators ({setTodo, addTodo, updateTodo, editTodo, changeEditTodoValue}, dispacth);
}
export default connect (mapStateToProps, mapDispatchProps)(App);
