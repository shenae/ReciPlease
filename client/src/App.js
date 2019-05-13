import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/';
import Recipe from './components/Recipe/';
import CreateRecipe from './components/CreateRecipe/';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="App">
	      <nav>
					<ul>
					 <li>
					   <Link to="/">Home</Link>
					 </li>
					 <li>
					   <Link to="/recipe">Recipe</Link>
					 </li>
					 <li>
					   <Link to="/createrecipe">CreateRecipe</Link>
					 </li>
					</ul>
				</nav>
	      <Route exact path="/" render={()=>
          <Home />
        }
        />
        <Route exact path="/recipe" render={()=>
          <Recipe />
        }
        />
        <Route exact path="/createrecipe" render={()=>
          <CreateRecipe />
        }
        />
      </div>
    );
  }
}

export default App;