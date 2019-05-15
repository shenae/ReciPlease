import React, { Component } from 'react';
import RecipeList from '../RecipeList/RecipeList'
	
class Search extends Component {

  render() {
    
    const {recipes,handleDelete,handleFetch,history,recipeSearch} = this.props;
    
    let filter = [];
    
    const filterMount=()=>{
      if (recipes &&recipeSearch){
        filter= recipes.filter(recipe=>recipe.name.toLowerCase().includes(recipeSearch.toLowerCase()));
      }
      else{
        filter= [];
      }
    }

    filterMount();

    return (
        <div>
          <div className="flex-column App">
          {/*Main*/}
          <h1>Showing results for <i>{this.props.recipeSearch}</i></h1>
            { filter.length!=0 ? filter.map((recipe, key) => {
            return <RecipeList key={key} recipe={recipe} handleDelete={handleDelete} handleFetch={handleFetch} history={history}/>
        }) : <h1>No results</h1> }
          </div>
        </div>
    );
  }
}

export default Search;