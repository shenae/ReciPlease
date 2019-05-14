const express = require('express');
const receipeRoute = express.Router();
var jwtDecode = require('jwt-decode');
const {Receipies,Cuisines,Users} = require('../models');

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
    console.log(req.body.token,'*** token');
    let decoded = jwtDecode(req.body.token);
    console.log(decoded.email,'***decoded token');
    const userCreatingReceipie = await Users.findAll(decoded.email); //sidgi
    const createdReceipe = await Receipies.create(req.body);
    // ** cuisine ** //
    const existingCuisine = await Cuisines.findAll({
      where:{
        name:req.body.cuisine
      }
    })
     console.log(existingCuisine[0], '*****indif')
    if(!existingCuisine[0]){
      console.log('***inside if***')
       console.log(typeof req.body.cuisine)
       const cuisine = req.body.cuisine
      const newCuisinie = await Cuisines.create({name:cuisine})
       console.log(newCuisinie,'**new cuisine')
      // newCuisinie.addReceipies(createdReceipe);
      createdReceipe.addCuisines(newCuisinie)
    }else{
      console.log('**outside if***')
      createdReceipe.addCuisines(existingCuisine)
    }
     // ************* //   
    res.send('created receipie');
  }catch(e){
    res.status(404).json({ msg: e.status })    
  }
})
receipeRoute.delete('/delete/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const deletedReceipie = await Receipies.findByPk(id);
    await deletedReceipie.destroy();
    res.send(`rec deleted`);
  }catch(e){
    res.status(404).json({ msg: e.status })    
  }
})
receipeRoute.put('/edit/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const editedRecepie = await Receipies.update(req.body,{
      where:{
        id:id
      }
    })
    res.send(`Recepie with id: ${id} edited`)
  }catch(e){
    res.status(404).json({ msg: e.status })    
  }
})
module.exports = receipeRoute;
