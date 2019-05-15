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
        <div className="edit-display">
        <form className="flex-column" onSubmit={(e)=>this.editRecipeData(e,recipes[0])}>
          <h1>Update a Recipe</h1>
          <div className='create-container'>
          <div className="create-1">
            <label id="label-input">Recipe Title:</label>
            <input name="name" placeholder="Recipe title..."/>
            <label id="label-input">Ingredients:</label>
            <input name="ingredients" placeholder="Ingredients"/>
            <label id="label-input">Directions:</label>
            {/* <input name="directions" placeholder="Directions"/> */}
            <textarea id="input-directions" name="directions" placeholder="Directions" />
            </div>

            <div className="create-2">
                <label id="label-input">Picture:</label>
                <input name="picture_url" placeholder="Insert Link here"/>
                <div className="box-4">
                <label id="label-input">Categories:</label>
                <input name="categories" placeholder="CategoryType"/>
                </div>
                <div className="box-6">
                <label id="label-input">Cuisine:</label>
                <input name="cuisine" placeholder="CuisineType"/>
                </div>
            </div>
          </div>
          <br />
              <div id="center">
            <button id="button-submit">Submit</button>
            </div>
        </form>
        </div>
      </div>
    );
  }
}

export default EditRecipe;