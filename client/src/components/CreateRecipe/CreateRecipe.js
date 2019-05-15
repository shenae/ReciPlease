import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import { createRecipe} from '../../services/axios'
  
class CreateRecipe extends Component {

  createRecipeData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
    "name": formData.get("name"),
    "picture_url":formData.get("picture_url"),
    "rating":0,
    "ingredients":[formData.get("ingredients")],
    "directions":formData.get("directions"),
    "categories":formData.get("categories"),
    "cuisine": formData.get("cuisine"),
    "token": localStorage.getItem("token")
    };
    const recipe = await createRecipe(data);
    await this.props.handleFetch();
  }

  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />
          <h1 id="center">Create a Recipe</h1>
          <div className="create-display">
          <form onSubmit={this.createRecipeData}>
            <div className='create-container'>
              <div className="create-1">
                  <label id="label-input">Recipe Title:</label>
                  <input name="name" placeholder="Recipe title..."/>
                    <label id="label-input">Ingredients:</label>
                    <input name="ingredients" placeholder="Ingredients"/>
              
                    <label id="label-input">Directions:  </label>
                    {/* <input id="input-directions" type="textarea" name="directions" placeholder="Directions"/> */}
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
            <br />
          </form>

        </div>
        </div>
    );
  }
}

export default CreateRecipe;