import React, { Component } from 'react';
import Home from '../Home/Home';
import Recipe from '../Recipe/Recipe';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
// import { fetchRecipes, createRecipe, deleteRecipe, editRecipe, fetchCuisines, fetchOneCuisine, fetchUser, logIn, signUp } from '../services/axios';
	
class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
          <nav className="flex">
            <h1 id="nav-title">ReciPlease<i class="fas fa-utensils fa-1x"></i> <i class="fas fa-book fa-1x"></i></h1>
            {/* <button id="button-login">Login/Register</button> */}
              {/* <button id="button-login" onClick={this.submitLogOut}>LOG OUT</button>
              <button id="button-login" onClick={this.navigateHome}>LOGIN</button> */}
            <br />
            </nav>
            {/* <div className="flex"> */}
          
          {/* </div> */}
          {/*Filter&CreateRecipe*/}
          <div className="flex-row">
            <form>
              <label id="label-nav">Search</label>
              <input name="recipeSearch" onChange={this.onChange} placeholder="Search for Recipes"/>  
              <button id="button-submit">Click me</button> 
            </form>
           
            <button id="button-create-recipe" onClick={this.props.navigateToCreateRecipe}>Create Recipe</button>
            <form>
              <label id="label-nav">Filter</label>
              <input name="recipeFilter" onChange={this.onChange} placeholder="Filter Recipes"/>
              <button id="button-submit">Click me</button>
            </form>
            </div>
          {/*Auth*/}
          {/*
            <button>Login</button>
            <button>Register</button>
          */}
      
        </div>
    );
  }
}

export default NavBar;