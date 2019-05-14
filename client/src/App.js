import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import history from './history.js';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import EditRecipe from './components/EditRecipe/EditRecipe';
import { fetchRecipes, createRecipe, deleteRecipe, editRecipe, fetchCuisines, fetchOneCuisine, fetchUser } from './services/axios'
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

  componentDidMount() {
    this.fetchRecipeData();
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className="flex-column">
      <button onClick={()=>history.replace(`/recipe/`)}>CLICK ME</button>
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
        
      </div>
    );
  }
}

export default App;