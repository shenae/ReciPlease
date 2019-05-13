import React, { Component } from 'react';
	
class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
          <img src="https://via.placeholder.com/300"/>
          <p>Recipe Name</p>
          <p>Cuisine Type</p>
        </div>
    );
  }
}

export default RecipeList;