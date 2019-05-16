import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gate: true
    };
  }
  render() {
    if (localStorage.getItem("token")) {
      this.props.navigateHome();
      this.props.history.go();
    }
    return (
      <div>
        <div className="login-display">
          <div className="flex-column">
            <form
              className="flex-column"
              onSubmit={e => {
                this.props.handleLogin(e);
              }}
            >
              <h1>Log In</h1>

              <label id="label-input">Email:</label>
              <input
                type="email"
                name="email"
                required="true"
                placeholder="Enter your email"
              />

              <label id="label-input">Password:</label>
              <input
                type={this.state.gate ? "password" : "text"}
                required="true"
                name="password"
              />
              <label>Show Password</label>
              <input
                name="gate"
                type="checkbox"
                onClick={() => {
                  this.setState({ gate: !this.state.gate });
                }}
              />
              <button id="button-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;