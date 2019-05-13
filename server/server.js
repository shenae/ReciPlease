const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const receipeRoute = require('./routes/receipeRoute');
const cuisineRoute = require('./routes/cuisineRoute');
const ingredientsRoute = require('./routes/ingredientsRoute');
const usersRoute = require('./routes/usersRoute');
const morgan = require('morgan');
const passport  = require('passport');
const PORT = process.env.PORT || 4567;
const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(passport.initialize())
app.use('/receipies',receipeRoute);
app.use('/cuisines',cuisineRoute);
app.use('/ingredients',ingredientsRoute);
app.use('/users',usersRoute)
app.listen(PORT,()=>console.log(`App is listening on: ${PORT} port`))