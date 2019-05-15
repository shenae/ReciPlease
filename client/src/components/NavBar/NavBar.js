import React, { Component } from 'react';
	
class NavBar extends Component {

  render() {
    return (
        <div>
          <nav className="flex">
            <form>
              <label>Search for Recipes</label>
              <input name="recipeSearch" onChange={this.onChange} placeholder="Search for Recipes"/>
              <button>Click me</button>
              <h1>ReciPlease</h1>
            </form>
          
          {/*Auth*/}
          {/*
            <button>Login</button>
            <button>Register</button>
          */}
          </nav>
        </div>
    );
  }
}

export default NavBar;