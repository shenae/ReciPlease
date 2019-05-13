const express = require('express');
const usersRoute = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {passport,jwt} = require('../auth');
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
      return res.json({message: "User successfully created"})
    } catch(error) {
      return next(error)
    }
  })(req, res, next)
})
// usersRoute.post('/signup',async(req,res)=>{
//   try{
//     const newUser = await Users.create(req.body);
//     console.log(newUser);
//     res.send(newUser);
//   }catch(e){
//     console.log(e.message)
//   }
// })
// usersRoute.post('/login',async(req,res)=>{
//   try{
//     const findedUser = await Users.findOne({
//       where:{
//         email:req.body.email
//       }
//     })
//     if(findedUser){
//       const validate = await bcrypt.compare(req.body.password, findedUser.password);
//       if(validate){
//         res.send(findedUser);
//       }else{
//         res.send('password not right try again')
//       }
//     }
//   }catch(e){
//     console.log(e.message)
//   }
// })

// /////////

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
        return res.json({ user,token })
      })

    } catch(error) {
      return next(error);
    }
  })(req, res, next)
})
module.exports = usersRoute;