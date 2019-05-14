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
import { fetchRecipes, createRecipe, deleteRecipe, editRecipe, fetchCuisines, fetchOneCuisine, fetchUser } from './services/axios';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes:[]
    };
    this.deleteRecipeData=this.deleteRecipeData.bind(this);
    this.fetchRecipeData=this.fetchRecipeData.bind(this);
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
    // const formData = new FormData(e.target);
    const data = {
      "name":"sidgi",
      "email":"example@gmail.com",
      "password":"123456"
    };
    const resp = await axios.post(`http://localhost:4567/users/login`, data);
    const token = resp.data.token;
    localStorage.setItem('token', token);
    console.log(token);
  }

  submitSignUp = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    const data = {
      "email":"example@gmail.com",
      "password":"123456"
    };
    const resp = await axios.post(`http://localhost:4567/users/login`, data);
    const token = resp.data.token;
    localStorage.setItem('token', token);
    console.log(token);
  }

  componentDidMount() {
    this.fetchRecipeData();
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className="flex-column">
      <button onClick={()=>history.replace(`/recipe/`)}>CLICK ME</button>
      <button onClick={this.submitLogIn}>LOGIN</button>
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
        <Route path="/recipe" render={()=>
          <Recipe
          />
        }
        />
        <Route path="/createrecipe" render={()=>
          <CreateRecipe
          recipes={recipes}
          handleCreate={this.createRecipe}
          handleFetch={this.fetchRecipeData}
          />
        }
        />
        <Route path="/editrecipe" render={()=>
          <EditRecipe
          recipes={recipes}
          handleEdit={this.editRecipeData}
          handleFetch={this.fetchRecipeData}
          />
        }
        />
        <Route path="/login" render={()=>
          <LogIn
          />
        }
        />
        <Route path="/signup" render={()=>
          <SignUp
          />
        }
        />
        
      </div>
    );
  }
}

export default App;