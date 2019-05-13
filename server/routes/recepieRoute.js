const express = require('express');
const receipeRoute = express.Router();

const {Receipies,Cuisines} = require('../models');

receipeRoute.get('/',async(req,res)=>{
  try{
    const allReceipies = await Receipies.findAll({include:[Cuisines]});
    res.json(allReceipies);
  }catch(e){
    res.status(500).json({ msg: e.status })
  }
})
receipeRoute.get('/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const particularReceipe = await Receipies.findByPk(id,{
      include:[Cuisines]
    });
    res.json(particularReceipe)
  }catch(e){
    res.status(404).json({ msg: e.status })
  }
})
receipeRoute.post('/create',async(req,res)=>{
  try{
    const createdReceipe = await Receipies.create(req.body);
    res.send(createdReceipe);
  }catch(e){
    res.status(404).json({ msg: e.status })    
  }
})
receipeRoute.delete('/delete',async(req,res)=>{
  try{

  }catch(e){
    res.status(404).json({ msg: e.status })    
  }
})
receipeRoute.put('/edit',async(req,res)=>{
  try{

  }catch(e){
    res.status(404).json({ msg: e.status })    
  }
})
module.exports = receipeRoute;
