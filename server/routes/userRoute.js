const express = require('express');
const usersRoute = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {passport,jwtSign} = require('../auth');
usersRoute.get('/',async(req,res)=>{
  try{
    const allUsers = await Users.findAll();
    res.send(allUsers);
  }catch(e){
    console.log(e.message)    
  }
})
usersRoute.post('/signup', async(req, res, next) => {
  passport.authenticate('signup', async(err, user, info) => {
    try {
      console.log('user from /signup', user);
      await Users.create(req.body);
      return res.json({message: "User successfully created"})
    } catch(error) {
      return next(error)
    }
  })(req, res, next)
})

usersRoute.post('/login',async(req,res,next)=>{
  passport.authenticate('login', async(err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An Error Occurred');
        return next(error);
      }
      req.login(user, { session : false }, async (error) => {
        if ( error ) return next(error)
        const { email, id } = user
        const token = jwtSign({email,id})
        return res.json({token})
      })

    } catch(error) {
      return next(error);
    }
  })(req, res, next)
})
module.exports = usersRoute;