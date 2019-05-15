import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import { fetchRecipes, createRecipe, deleteRecipe, editRecipe, fetchCuisines, fetchOneCuisine, fetchUser } from '../../services/axios'
import axios from 'axios';
  
class EditRecipe extends Component {
  
  editRecipeData = async (e,id)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
    "name": formData.get("name"),
    "picture_url":formData.get("picture_url"),
    "rating":0,
    "ingredients":[formData.get("ingredients")],
    "directions":formData.get("directions"),
    "categories":formData.get("categories"),
    "cuisine": formData.get("cuisine")
    };
    console.log(id.id);
    const recipe = await editRecipe(id.id,data);
    await this.props.handleFetch();
  }


  render() {
    const {recipes}=this.props;
    return (
      <div>
        {/*navbar*/}
        <NavBar />
        <form className="flex-column" onSubmit={(e)=>this.editRecipeData(e,recipes[0])}>
          
          <h1>Update a Recipe</h1>

          <label>Recipe Title</label>
          <input name="name"  placeholder="Recipe title..."/>
          <label>Ingredients</label>
          <input name="ingredients" placeholder="Ingredients"/>
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

export default EditRecipe;