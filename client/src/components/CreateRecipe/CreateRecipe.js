import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import axios from 'axios';
import { fetchRecipes, createRecipe, deleteRecipe, editRecipe, fetchCuisines, fetchOneCuisine, fetchUser } from '../../services/axios'
  
class CreateRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onChange = async e => {
    let { name, value } = e.target;
    // a way of dealing with nested state
    this.setState(state => ({
      ...state, 
        'recipe': {
          ...state.recipe, [name]: value
        }
      }
    ));
  }

  createRecipeData = async (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const formData = new FormData(e.target);
    const data = {
    "name": formData.get("name"),
    "picture_url":formData.get("picture_url"),
    "rating":0,
    "ingredients":[formData.get("ingredients[]")],
    "directions":formData.get("directions"),
    "categories":formData.get("categories"),
    "cuisine": formData.get("cuisine")
    };
    // const data = {
    //   "name":"Delicious",
    //   "picture_url":"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    //   "rating":5,
    //   "ingredients":["10 onions"],
    //   "directions":"slice them",
    //   "categories":"appetizer",
    //   "cuisine": "japanese"
    // }
    console.log(data);
    const recipe = await createRecipe(data);
    await this.props.handleFetch();
  }

  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />
          <h1>Create/Update a Recipe</h1>

          <form className="flex-column" onSubmit={this.createRecipeData}>
              <label>Recipe Title</label>
              <input name="name" placeholder="Recipe title..."/>
              <label>Ingredients</label>
              <input name="ingredients[]" placeholder="Ingredients"/>
              <label>Directions</label>
              <input name="directions" placeholder="Directions"/>
              <label>Picture</label>
              <input name="picture_url" placeholder="Insert Link here"/>
              <label>Categories</label>
              <input name="categories" placeholder="CategoryType"/>
              <label>Cuisine</label>
              <input name="cuisine" placeholder="CuisineType"/>
              <button>Submit</button>
          </form>


        </div>
    );
  }
}

export default CreateRecipe;