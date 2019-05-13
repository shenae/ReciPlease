import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="flex-column">
        {/*navbar*/}
	      <nav className="flex">
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

        {/*Routes*/}
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