const express = require('express');
const cors = require('cors');
let bodyParser = require('body-parser');
const receipeRoute = require('./routes/recepieRoute');
const cuisineRoute = require('./routes/cuisineRoute');
const usersRoute = require('./routes/userRoute');
const commentRoute = require('./routes/commentRoute');
const morgan = require('morgan');
const passport  = require('passport');
const PORT = process.env.PORT || 4567;
const app = express();
app.use(morgan('combined'));
// bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(cors());
app.use(passport.initialize());
app.use('/receipies',receipeRoute);
app.use('/cuisines',cuisineRoute);
app.use('/users',usersRoute);
app.use('/comments',commentRoute);
app.listen(PORT,()=>console.log(`App is listening on: ${PORT} port`));