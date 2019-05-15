import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
  
class SignUp extends Component {

  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />

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
          <button>Submit</button>
        </form>
          </div>

        </div>
    );
  }
}

export default SignUp;