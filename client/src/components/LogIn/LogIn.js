import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
  
class LogIn extends Component {

  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />

          <div className="flex-column">
          {/*Main*/}
          <form className="flex-column" onSubmit={this.props.handleLogin}>
          
          <h1>Log In</h1>

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email"/>

          <label>Password</label>
          <input type="password" name="password"/>
          
          <button>Submit</button>
        </form>
          </div>

        </div>
    );
  }
}

export default LogIn;