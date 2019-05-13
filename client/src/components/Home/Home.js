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
    return (
        <div>
          {/*navbar*/}
          <NavBar />

          <div className="flex">
          {/*Main*/}
            <RecipeList />
            <RecipeList />
            <RecipeList />
          </div>
          
          <div className="flex">
          {/*Filter&CreateRecipe*/}
            <form>
              <label>Filter</label>
              <input name="recipeFilter" onChange={this.onChange} placeholder="Filter Recipes"/>
              <button>Click me</button>
            </form>
            <button>Create Recipe</button>
          </div>
        </div>
    );
  }
}

export default Home;