import React, { Component } from "react";

class Login extends Component {

    state = {
        user: {username:'', password:''}
    }

    handleChange = e =>{
        const name = e.currentTarget.name;
        const value = e.target.value;

        const updatedUser = {...this.state.user};
        updatedUser[name] = value;

        this.setState({ user: updatedUser});
    } 

    handleSubmit = e =>{
        e.preventDefault();

        const username = e.target[0].value;
        const password = e.target[1].value;

        console.log({username, password});
    }


  render() {
    return (
      <div className="container w-50 mx-auto">
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            User Name
          </label>
          <input
            autoFocus
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </div>  
    );
  }
}

export default Login;
