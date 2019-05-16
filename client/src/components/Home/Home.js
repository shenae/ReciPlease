import React, { Component } from "react";
import RecipeList from "../RecipeList/RecipeList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearch: null,
      recipeFilter: null
    };
  }

  onChange = e => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { recipes, handleDelete, history, handleFetch } = this.props;
    return (
      <div className="flex-column">
        <div className="home-recipe-list">
          {recipes.length ? (
            recipes.map((recipe, key) => {
              return (
                <RecipeList
                  className="recipe-list"
                  key={key}
                  recipe={recipe}
                  handleDelete={handleDelete}
                  handleFetch={handleFetch}
                  history={history}
                />
              );
            })
          ) : (
            <h1>Fetching recipes...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Home;