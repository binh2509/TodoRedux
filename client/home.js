import React from 'react';

export default class Home extends React.Component{
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
        {this.props.children}
      </div>
    );
  }
}
