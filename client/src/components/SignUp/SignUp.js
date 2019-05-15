import React, { Component } from 'react';
  
class SignUp extends Component {

  render() {
    if (localStorage.getItem("token")) {this.props.navigateHome();this.props.history.go()}
    return (
        <div>
          <div className="signup-display">
          <div className="flex-column">
          {/*Main*/}
          <form className="flex-column" onSubmit={this.props.handleSignUp}>
          
          <h1>Sign Up</h1>

          <label>First Name</label>
          <input type="text" name="firstName"/>
          <label>Last Name</label>
          <input type="text" name="lastName"/>
          <label>Password</label>
          <input type="password" name="password"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email"/>
          <button id="button-submit">Submit</button>
        </form>
          </div>
          </div>
        </div>
    );
  }
}

export default SignUp;