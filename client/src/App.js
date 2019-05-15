import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import history from './history.js';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import EditRecipe from './components/EditRecipe/EditRecipe';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import { fetchRecipes, createRecipe, deleteRecipe, editRecipe, fetchCuisines, fetchOneCuisine, fetchUser, logIn, signUp } from './services/axios';
import axios from 'axios';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes:[]
    };
    this.deleteRecipeData=this.deleteRecipeData.bind(this);
    this.fetchRecipeData=this.fetchRecipeData.bind(this);
    this.submitLogIn=this.submitLogIn.bind(this);
    this.submitSignUp=this.submitSignUp.bind(this);
    this.submitLogOut=this.submitLogOut.bind(this);
  }

  fetchRecipeData = async () => {
    const recipes = await fetchRecipes();
    this.setState({
      recipes
    },()=>console.log("recipes: ",recipes));
  }

  deleteRecipeData = async (e,id)=>{
    e.preventDefault();
    const recipe = await deleteRecipe(id);
    await this.fetchRecipeData();
  }

  submitLogIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      "email":formData.get("email"),
      "password":formData.get("password")
    };
    const resp = await logIn(data);
    const token = resp.token;
    localStorage.setItem('token', token);
  }

  submitLogOut = async (e) => {
    e.preventDefault();
    localStorage.setItem('token', "");
    if (!localStorage.getItem('token')){
      console.log("Logged out")
    }
    history.push('/');
  }

  submitSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      "name" : formData.get("firstName")+" "+formData.get("lastName"),
      "email": formData.get("email"),
      "password": formData.get("password")
    };
    const resp = await signUp(data);
    const token = resp.token;
    localStorage.setItem('token', token);
  }

  navigateHome = () =>{
    history.push('/login');
    history.go(0);
    console.log(history);
  }
  componentDidMount() {
    this.fetchRecipeData();
  }



  render() {
    const {recipes} = this.state;
    return (
      <div className="flex-column">
      <button onClick={this.submitLogOut}>LOG OUT</button>
      <button onClick={this.navigateHome}>LOGIN</button>

        {/*navbar*/}
	      <nav className="flex">
					<ul>
					 <li>
					   <Link to="/">Home</Link>
					 </li>
					 <li>
					   <Link to="/recipe">Recipe</Link>
					 </li>
					 <li>
					   <Link to="/createrecipe">CreateRecipe</Link>
					 </li>
           <li>
             <Link to="/editrecipe">EditRecipe</Link>
           </li>
           <li>
             <Link to="/login">Login</Link>
           </li>
           <li>
             <Link to="/signup">SignUp</Link>
           </li>
					</ul>
				</nav>

        {/*Routes*/}
	      <Route exact path="/" render={()=>
          <Home
          recipes={recipes}
          handleDelete={this.deleteRecipeData}
          />
        }
        />
        <Route exact path="/recipe" render={()=>
          <Recipe
          />
        }
        />
        <Route exact path="/createrecipe" render={()=>
          <CreateRecipe
          recipes={recipes}
          handleCreate={this.createRecipe}
          handleFetch={this.fetchRecipeData}
          />
        }
        />
        <Route exact path="/editrecipe" render={()=>
          <EditRecipe
          recipes={recipes}
          handleEdit={this.editRecipeData}
          handleFetch={this.fetchRecipeData}
          />
        }
        />
        <Route exact path="/login" render={()=>
          <LogIn
          handleLogin={this.submitLogIn}
          />
        }
        />
        <Route exact path="/signup" render={()=>
          <SignUp
          handleSignUp={this.submitSignUp}
          />
        }
        />
        
      </div>
    );
  }
}

export default App;