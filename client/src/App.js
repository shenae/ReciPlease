import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import history from './history.js';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Recipe from './components/Recipe/Recipe';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import EditRecipe from './components/EditRecipe/EditRecipe';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Search from './components/Search/Search';
import { fetchRecipes, fetchOneRecipe, logIn, signUp } from './services/axios';
import axios from 'axios';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes:[],
      recipe:null,
      recipeSearch:null
    };
    this.deleteRecipeData=this.deleteRecipeData.bind(this);
    this.fetchRecipeData=this.fetchRecipeData.bind(this);
    this.submitLogIn=this.submitLogIn.bind(this);
    this.submitSignUp=this.submitSignUp.bind(this);
    this.submitLogOut=this.submitLogOut.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  fetchRecipeData = async () => {
    const recipes = await fetchRecipes();
    this.setState({
      recipes
    });
  }

  fetchOneRecipeData = async (e,id) => {
    e.preventDefault();
    const recipe = await fetchOneRecipe(id);
    console.log(recipe)
    this.setState({
      recipe
    });
  }

  deleteRecipeData = async (e,id)=>{
    e.preventDefault();
    const reply=window.confirm("Delete this recipe?");
    if(reply){
      await axios.delete(`http://localhost:4567/receipies/delete/${id}`, {
        headers: {
          token: `${localStorage.getItem('token')}`
        }
      })
      await this.fetchRecipeData();
      return reply;
    }
    else{
      return false;
    }
  }

  submitLogIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      "email":formData.get("email"),
      "password":formData.get("password")
    };
    const resp = await logIn(data);
    if(resp){
      const id = resp.id;
      const token = resp.token;
      localStorage.setItem("user",data.email);
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
    }
    else{
      console.log(resp);
      console.log("Incorrect Password")
    }
    if (await localStorage.getItem("token")) {this.navigateHome();history.go()}
  }

  submitLogOut = async (e) => {
    e.preventDefault();
    localStorage.setItem('token', "");
    localStorage.setItem('user', "");
    localStorage.setItem('id', "");
    if (!localStorage.getItem('token')){
      console.log("Logged out")
    }
    history.push('/');
  }

  submitSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      "name" : formData.get("firstName")+" "+formData.get("lastName"),
      "email": formData.get("email"),
      "password": formData.get("password")
    };
    const resp = await signUp(data);
    if(resp){
      const id = resp.id;
      const token = resp.token;
      localStorage.setItem("user",data.email);
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
    }
    else{
      console.log(resp);
      console.log("An error occured");
    }
    if (await localStorage.getItem("token")) {this.navigateHome();history.go()}
  }

  navigateBack = () =>{
    history.go(-1);
  }

  navigateHome = () =>{
    history.push('/');
  }


  navigateLogIn = () =>{
    history.push('/login');
  }

  navigateSignUp = () =>{
    history.push('/signup');
  }

  navigateCreateRecipe = () =>{
    history.push('/createrecipe');
  }

  onChange = e => {
    const {
     target: { value, name },
    } = e;
    this.setState({
     [name]: value
    });
  };

  componentDidMount() {
    this.fetchRecipeData();
  }



  render() {
    const {recipe,recipes} = this.state;
    return (
    <div className="flex-column">
        <NavBar
        onChange={this.onChange}
        history={history}
        navigateHome={this.navigateHome}
        navigateCreateRecipe={this.navigateCreateRecipe}
        navigateBack={this.navigateBack}
        navigateLogIn={this.navigateLogIn}
        submitLogOut={this.submitLogOut}
        navigateSignUp={this.navigateSignUp}
        />
        {/*Routes*/}
	      <Route exact path="/" render={()=>
          <Home
          recipe={recipe}
          recipes={recipes}
          handleFetch={this.fetchOneRecipeData}
          handleDelete={this.deleteRecipeData}
          history={history}
          />
        }
        />
        <Route exact path="/search" render={()=>
          <Search
          recipes={recipes}
          handleDelete={this.deleteRecipeData}
          handleFetch={this.fetchOneRecipeData}
          history={history}
          recipeSearch={this.state.recipeSearch}
          />
        }
        />
        <Route exact path="/recipe/:id" render={(props)=>
          <Recipe
          {...props}
          recipe={recipe}
          history={history}
          handleFetch={this.fetchOneRecipeData}
          handleDelete={this.deleteRecipeData}
          navigateHome={this.navigateHome}
          />
        }
        />

        <Route exact path="/createrecipe" render={()=>
          <CreateRecipe
          recipes={recipes}
          handleCreate={this.createRecipe}
          handleFetch={this.fetchRecipeData}
          navigateHome={this.navigateHome}
          history={history}
          />
        }
        />
        <Route exact path="/editrecipe/:id" render={(props)=>
          <EditRecipe
          {...props}
          recipe={recipe}
          recipes={recipes}
          navigateHome={this.navigateHome}
          handleEdit={this.editRecipeData}
          handleFetch={this.fetchRecipeData}
          history={history}
          />
        }
        />
        <Route exact path="/login" render={()=>
          <LogIn
          handleLogin={this.submitLogIn}
          navigateHome={this.navigateHome}
          history={history}
          />
        }
        />
        <Route exact path="/signup" render={()=>
          <SignUp
          handleSignUp={this.submitSignUp}
          navigateHome={this.navigateHome}
          history={history}
          />
        }
        />
       <div className="flex-row">
      </div>
      </div>
    );
  }
}

export default App;