import React, { Component } from 'react';
import { editRecipe } from '../../services/axios'
  
class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayList: [1]
    };
  }

  editRecipeData = async (e,id)=>{
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
    const resp = await editRecipe(id,data,header);
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

  componentDidMount() {
    const arrayList=this.props.recipe.ingredients;
    this.setState({arrayList});
  }

  render() {
    const {recipe,match:{params:{id}}}=this.props;
    if (!recipe) {this.props.navigateHome();this.props.history.go()}
    return (
      <div>
        <div className="edit-display">
        <form className="flex-column" onSubmit={(e)=>this.editRecipeData(e,id)}>
          <h1>Update a Recipe</h1>
          <div className='create-container'>
          <div className="create-1">
            <label id="label-input">Recipe Title:</label>
            <input name="name" defaultValue={recipe?recipe.name:null} placeholder="Recipe title..."/>
            <label id="label-input">Ingredients:</label>
            <button onClick={(e)=>this.addButton(e)}>+</button>
            <button onClick={(e)=>this.removeButton(e,e.target.name)}>-</button>
            {<div>{recipe.ingredients.map((ingredient,key)=><input name="ingredients" key={`${key}`} defaultValue={ingredient} placeholder="ingredients"/>)}</div>}
            <label id="label-input">Directions:</label>
            <textarea id="input-directions" name="directions" defaultValue={recipe?recipe.directions:null} placeholder="Directions"/>
            </div>

            <div className="create-2">
                <label id="label-input">Picture:</label>
                <input name="picture_url" defaultValue={recipe?recipe.picture_url:null} placeholder="Insert Link here"/>
                <div className="box-4">
                <label id="label-input">Categories:</label>
                <input name="categories" defaultValue={recipe?recipe.categories:null} placeholder="CategoryType"/>
                </div>
                <div className="box-6">
                <label id="label-input">Cuisine:</label>
                <input name="cuisine" defaultValue={recipe?recipe.cuisines[0].name:null} placeholder="CuisineType"/>
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