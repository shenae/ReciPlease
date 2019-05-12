# General Assembly - Project 3

## Project Name: ReciPlease

## Project Overview
This is the third project assignment for General Assembly's Software Engineering Immersive program. This is a group assignment with the following members on the team: 

    * Keigo Tanaka      https://github.com/KeigoAlexTanaka
    * Shenae Simmons    https://github.com/shenae
    * Sidgi Samuels     https://github.com/Sidgi

### Description
Our recipe app will allow users to view a collection of recipes posted on our site. The user will be able to search for recipes based on ingredients, user, recipe name, and/or cuisine type. The user will also be able to update a recipe and delete a recipe.

Here are the requirements: 

##### A RESTful JSON API
* Must have an Express server exposing RESTful JSON endpoints.
* Must have a PostgreSQL database with at least three tables: 1 user table and at least two others of your choice. There must be at least 1 pair of associated tables (one to many, many to many, etc.)
* Must use sequelize to define models for interacting with the database.
* Must have each of the generic controller actions (Index, Show, Create, Update, Delete) between the two non-user models.
* Must use Express Router to organize your route endpoints.
##### A front-end that consumes your own API
* Permit the user to perform Index, Show, Create, Update, and Delete actions whether or not they are logged in (unless it makes sense for that information to be restricted to particular users).
* Layout and style your front-end with clean & well-formatted CSS. Remember to use Grid and Flexbox!
* Use React Router for client side routing.


### Project Schedule table

Day | Deliverable
-----------------|----------------------------------------
Day 1: Friday    | Group Assignments, Idea, Research
Day 2: Saturday    | Wireframes, Research, Component Hierarchy
Day 3: Sunday   | Pseudo Code
Day 4: Monday | Set up Server, Coding, Working Prototype
Day 5: Tuesday  | Working Prototype, Testing, Front End
Day 6: Wednesday    | Editing, Post MVP
Day 7: Thursday    | Final Testing, App Completed, Deployment
Day 8: Friday    | Presentation


### App Components	
* CREATE - User will be able to create a recipe (Auth pending)
* READ - Users will be able to view all of the recipes and search based on username, ingredients or cusine type
* UPDATE - will be able to update a recipe (Auth pending)
* DELETE - will be able to delete a recipe (Auth pending)

### Technologies Being Used:
For this project, we will be using Express.js, SQL, Postgres, React, HTML and CSS. 

An explanation of the major challenges you expect to face while building this app and how you foresee your team solving them:
    * Implementing AUTH
        Solution: Referring to past labs with Auth
    * Deploying to Heroku
        Solution: Working as a class to deploy on Friday
    * Merge Conflicts
        Solution: Communicating as a team when there is a merge conflict and agreeing to a folder structure/component hierarchy prior to beginning the project

### MVP
* Display all recipes
* Create new recipe
* Delete recipe
* Update recipe

### Post MVP
* Auth
* Search recipe based on name/user/cuisine type/ingredients
* Improve CSS
* Implement Recipe API
* Comments
* Tags

### Wireframes
* Wireframe for main page: https://wireframe.cc/NuzbTK
* Wireframe for recipe page: https://wireframe.cc/CjDsxw
* Wireframe for create recipe page: https://wireframe.cc/uoKzdw

### Entity Relationship Diagram (ERD)
ERD link:

### Deployment
This project will be deployed on Heroku.com. 
