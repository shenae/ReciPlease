import React, { Component } from 'react';
import RecipeList from '../RecipeList/RecipeList'
import NavBar from '../NavBar/NavBar'
	
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeSearch:null,
      recipeFilter:null
    };
  }

    onChange = e => {
    const {
     target: { value, name },
    } = e;
    this.setState({
     [name]: value
    });
  };


  render() {
    const {recipes,handleDelete}= this.props;
    return (
        <div>
          {/*navbar*/}
          <NavBar
          navigateToCreateRecipe={this.props.navigateToCreateRecipe}/>

          <div className="flex-column App">
          {/*Main*/}
            { recipes.length ? recipes.map((recipe, key) => {
            return <RecipeList key={key} recipe={recipe} handleDelete={handleDelete}/>
        }) : <h1>Fetching recipes...</h1> }
          </div>
          
          
        </div>
    );
  }
}

export default Home;