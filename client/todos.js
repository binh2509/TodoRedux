import React from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setTodo, addTodo, updateTodo, editTodo, changeEditTodoValue,filterDone, filterActive, filterAll, filterSearch} from './actions';
import $ from 'jquery';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleChangeEditTodo = this.handleChangeEditTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTodoDone = this.handleTodoDone.bind(this);
    this.filterDone = this.filterDone.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterActive = this.filterActive.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
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
    console.log('Add')
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
  handleDelete(id){
    $.ajax({
      type: "DELETE",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:7000/delete-todo/" + id,
      success: (response) => {
        if (response.success) {
          this.getTodo();
        }
      }
    });
  }
  handleTodoDone(event, todo){
    $.ajax({
      type: "PUT",
      contentType: "application/json; charset=utf-8",
      url: "http://localhost:7000/update-todo-done/" + todo._id,
      data: JSON.stringify({
        value: !todo.done,
      }),
      success: (response) =>{
        if (response.success) {
          this.getTodo();
        }
      }
    });
  }
  filterDone(){
    this.props.filterDone();
  }
  filterAll(){
    this.props.filterAll();
  }
  filterActive(){
    this.props.filterActive();
  }
  filterSearch(event){
    this.props.filterSearch(event.target.value);
  }
  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h1 style={{textAlign:'center'}}>Todos</h1>
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="todo-input" className="form-control" placeholder="How to be for done ?"/>
              </form>
              <input type="text" onChange={this.filterSearch} id="todo-search" className="form-control" placeholder="Search"/>
              <ul className="list-group">
                {this.props.todoApp.todo.map((todoItem, index) =>{
                  return <li key={index} className="list-group-item">
                    {(this.props.todoApp.editTodo.index !== index) ? <div>
                      <input type="checkbox" onChange={(event) => this.handleTodoDone(event, todoItem)} checked={todoItem.done} className="pull-left"/>
                      <span onDoubleClick={() => this.editItem(index, todoItem)}>{todoItem.name}</span>
                      <a className="pull-right" onClick={() => this.handleDelete(todoItem._id)}>Remove</a>
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
            <div className="col-md-8 col-md-offset-2">
              <button onClick={this.filterAll} type="button" className="btn btn-lg btn-success btn-block">All</button>
              <button onClick={this.filterDone} type="button" className="btn btn-lg btn-success btn-block">Check Done</button>
              <button onClick={this.filterActive} type="button" className="btn btn-lg btn-success btn-block">Active</button>
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
function mapDispatchProps (dispatch) {
  return bindActionCreators ({setTodo, addTodo, updateTodo, editTodo, changeEditTodoValue, filterDone, filterActive, filterAll, filterSearch}, dispatch);
}
export default connect (mapStateToProps, mapDispatchProps)(App);
