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
            <div className="recipe-name-display">
            <h1>Recipe Title</h1>
            <h2>Username</h2>
            </div>

        <div className="recipe-display">
        <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>Ingredient 1 Lorem ipsum dolor</li>
              <li>Ingredient 2 noluisse incorrupte</li>
              <li>Ingredient 3 per probo inimicus</li>
              <li>Ingredient 4 saepe copiosae</li>
              <li>Ingredient 5 oluptaria intellegebat</li>
            </ul>
            </div>
            <div className="recipe-directions">
            <h2>Directions</h2>
            <p>Lorem ipsum dolor sit amet, noluisse incorrupte te duo, per probo inimicus comprehensam eu. Mel saepe copiosae no. Vel ea suscipit iracundia hendrerit, eos ut putent aeterno equidem. Has eu sapientem voluptaria intellegebat, vim ne iriure inermis detracto. Ut semper fuisset mea, alia minim mea an. Ut aliquam invidunt voluptatibus duo, regione definiebas eos ad.
            </p>
            </div>
            </div>
          </div>

        </div>
    );
  }
}

export default Recipe;