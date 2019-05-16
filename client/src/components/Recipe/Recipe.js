import React, { Component } from 'react';
  
class Recipe extends Component {
  componentDidMount(){
    const e = document.createEvent("MouseEvent");
    this.props.handleFetch(e,this.props.match.params.id);
  }
  render() {
    const {recipe,history,navigateHome,handleDelete}=this.props
    return (
        <div>

          <div className="flex-column">
          {/*Main*/}
            <img alt="recipe" src={recipe?recipe.picture_url:null}/>
            <div className="recipe-name-display">
            <h1>{recipe?recipe.name:null}</h1>
            <h2>Created by:</h2>
            </div>

            {recipe?
              (localStorage.getItem("id")==recipe.userId?
                <div>
                  <button id="button-submit" onClick={(e)=>{history.push(`/editrecipe/${recipe.id}`)}}>EDIT</button>
                  <button id="button-submit" onClick={e => {handleDelete(e, recipe.id).then(resp=>resp?navigateHome():null)}}>DELETE</button>
                </div>
                :null)
              :null}
              <br/>
        <div className="recipe-display">
        <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe?recipe.ingredients.map((ingredient,key)=><li key={`${key}`}>{ingredient}</li>):null}
            </ul>
            </div>
            <div className="recipe-directions">
            <h2>Directions</h2>
            <p>{recipe?recipe.directions:null}</p>
            </div>
            </div>
          </div>

        </div>
    );
  }
}

export default Recipe;