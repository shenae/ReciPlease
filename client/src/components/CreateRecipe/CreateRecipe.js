import React, { Component } from 'react';
import { createRecipe} from '../../services/axios'
  
class CreateRecipe extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arrayList: [1]
    };
  }

  createRecipeData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
    "name": formData.get("name"),
    "picture_url":formData.get("picture_url"),
    "rating":0,
    "ingredients":formData.getAll("ingredients"),
    "directions":formData.get("directions"),
    "categories":formData.get("categories"),
    "cuisine": formData.get("cuisine")
    };
    const header={
      headers: {
        token: `${localStorage.getItem('token')}`
      }
    }
    const resp = await createRecipe(data,header);
    if(resp){
      await this.props.handleFetch();
      this.props.navigateHome();
      this.props.history.go();
    }
    else{
      console.log(resp);
      console.log("An error occured");
    }
  }

  addButton = (e) =>{
    e.preventDefault();
    const arrayList=this.state.arrayList;
    arrayList.push(1);
    this.setState({arrayList})
  }
  removeButton = (e,key) =>{
    e.preventDefault();
    const arrayList=this.state.arrayList;
    arrayList.splice(1,1);
    this.setState({arrayList})
  }

  render() {
    const {arrayList} = this.state
    return (
        <div>
          <h1 id="center">Create a Recipe</h1>
          <div className="create-display">
          <form onSubmit={this.createRecipeData}>
            <div className='create-container'>
              <div className="create-1">
                  <label id="label-input">Recipe Title:</label>
                  <input name="name" placeholder="Recipe title..."/>
                    <label id="label-input">Ingredients:</label>
                    <button onClick={(e)=>this.addButton(e)}>+</button>
            <button onClick={(e)=>this.removeButton(e,e.target.name)}>-</button>
            {<div>{arrayList.map((array)=><input name="ingredients" placeholder="ingredients"/>)}</div>}
                    <label id="label-input">Directions:  </label>
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