import React, { Component } from 'react';
	
class RecipeList extends Component {

  render() {

    const { id, name, picture_url,userId} = this.props.recipe;
    const {handleDelete,history,handleFetch} = this.props;

    return (
        <div className = {'recipe-img'}>
          <div onClick={(e)=>{handleFetch(e,id);history.push(`/recipe/${id}`)}}>
            <img alt="recipe" src={picture_url}/>
            <p>{name}</p>
          </div>
          {localStorage.getItem("id")==userId?<button onClick={e => handleDelete(e, id)}>DELETE</button>:null}
        </div>
    );
  }
}

export default RecipeList;