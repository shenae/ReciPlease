const passport  = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {Users} = require('./models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const SECRET = 'Super secret token';
const jwtSign = (payload)=>{
  return jwt.sign(payload,SECRET)
}
passport.use('signup', new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await Users.create({ email: email, password: password })

    if (!user) {
      return done(null, false, { message: 'Unable to sign up user'})
    }

    done(null, user)

  } catch(error) {
    done(error)
  }
}))
passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    // find user by their email
    console.log(Users,'****')
    const user = await Users.findOne({ where: { email: email }})
    console.log(user,'$%#$%#$%')
    if (!user) {
      return done(null, false, { message: 'User not found'})
    }

    // compare passwords
    const validate = await bcrypt.compare(password, user.password);
    console.log(validate,'validate')
    if (!validate) {
      return done(null, false, { message: 'Wrong password'})
    }

    // login was a success, return the user object
    return done(null, user, { message: 'Logged in successfully'})

  } catch(error) {
    return done(error)
  }
}))

module.exports = {
  passport,
  jwtSign
}