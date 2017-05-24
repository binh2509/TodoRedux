import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTodo, addNewTodo } from './actions';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.setTodo(['Hello', 'Hello 1']);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewTodo(document.getElementById('todo-input').value);
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">NOTE</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="http://localhost:8080/#/about">About</a></li>
              <li><a href="http://localhost:8080/#/login">Login</a></li>
              <li><a href="http://localhost:8080/#/todo">Todos</a></li>
            </ul>
          </div>
        </nav>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input id="todo-input" type="text" className="form-control"/>
          </form>
          <ul className="list-group">
            {this.props.todoApp.todo.map((todo, index) => {
              return <li key={index} className="list-group-item">{todo}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todoApp: state.todo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setTodo, addNewTodo}, dispatch);
}

export default                 (mapStateToProps, mapDispatchToProps)(App);