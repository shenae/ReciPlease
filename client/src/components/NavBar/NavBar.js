import React, { Component } from 'react';
	
class NavBar extends Component {

  render() {
    const {onChange}=this.props;
    return (
        <div>
          <nav className="flex">
            <div onClick={()=>{this.props.navigateHome()}}>
            <h1 id="nav-title">ReciPlease<i className="fas fa-utensils fa-1x"></i> <i className="fas fa-book fa-1x"></i></h1>
            </div>
            <br />
            </nav>

          <div className="flex-row">
          <button id="button-back" onClick={()=>this.props.navigateBack()}>BACK</button>
            <form onSubmit={(e)=>{e.preventDefault();this.props.history.push('/search')}}>
              <input name="recipeSearch" onChange={onChange} placeholder="Search for Recipes"/>  
              <button id="button-submit">Search</button> 
            </form>
            </div>
            {!localStorage.getItem("token")?
            <div>
              <button id="button-login" onClick={this.props.navigateLogIn}>LOGIN</button>
              <button id="button-signup" onClick={this.props.navigateSignUp}>SIGN UP</button>
            </div>
            :<div>
              <button id="button-logout" onClick={(e)=>{this.props.submitLogOut(e);this.props.history.go()}}>LOG OUT</button>
              <button id="button-create-recipe" onClick={this.props.navigateCreateRecipe}>CREATE RECIPE</button>
            </div>}
      
        </div>
    );
  }
}

export default NavBar;