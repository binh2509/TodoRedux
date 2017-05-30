import React from 'react';

export default class Login extends React.Component{
  render(){
    const h3 = {
      textAlign: "center",
    }
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className= "panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title" style={h3}>đăng nhập</h3>
                </div>
                <div className="panel-body">
                  <form className="form-group">
                    <input className="form-control" name="email" type="text" placeholder="Nhập Email"/>
                    <br/>
                    <input className="form-control" name="password" type="text" placeholder="Nhập Password"/>
                    <br/>
                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Đăng Nhập" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
