import React, { Component } from "react";

class RecipeList extends Component {
  render() {
    const { id, name, picture_url, userId } = this.props.recipe;
    const { handleDelete, history, handleFetch } = this.props;

    return (
      <div className="recipe-img">
        <div
          onClick={e => {
            handleFetch(e, id);
            history.push(`/recipe/${id}`);
          }}
        >
          <div className="recipe-list-center">
            <img alt="recipe" src={picture_url} />
            <div className="recipe-list-name">
              <p>{name}</p>
            </div>
          </div>
        </div>
        <div id="center">
          {localStorage.getItem("id") == userId ? (
            <button id="button-submit" onClick={e => handleDelete(e, id)}>
              DELETE
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default RecipeList;