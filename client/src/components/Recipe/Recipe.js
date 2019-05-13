import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
  
class Recipe extends Component {

  render() {
    return (
        <div>
          {/*navbar*/}
          <NavBar />

          <div className="flex-column">
          {/*Main*/}
            <img src="http://via.placeholder.com/640x360"/>
            <h1>Recipe Title</h1>
            <h2>Username</h2>

            <p>Prep Time</p>
            <p>Cooking Time</p>
            <p>Servings</p>

            <h2>Ingredients</h2>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
              <li>Ingredient 4</li>
              <li>Ingredient 5</li>
            </ul>
            
            <h2>Direction</h2>
            <ol>
              <li>Direction 1</li>
              <li>Direction 2</li>
              <li>Direction 3</li>
              <li>Direction 4</li>
              <li>Direction 5</li>
            </ol>

          </div>

        </div>
    );
  }
}

export default Recipe;