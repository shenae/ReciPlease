import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
  
class LogIn extends Component {

  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />
          <div className="login-display">
          <div className="flex-column">
          {/*Main*/}
          <form className="flex-column" onSubmit={this.props.handleLogin}>
          <h1>Log In</h1>

          <label id="label-input">Email:</label>
          <input type="email" name="email" placeholder="Enter your email"/>

          <label id="label-input">Password:</label>
          <input type="password" name="password"/>
          
          <button id="button-submit">Submit</button>
        </form>
            
          </div>
            </div>
        </div>
    );
  }
}

export default LogIn;