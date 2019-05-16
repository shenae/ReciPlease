const express = require('express');
const receipeRoute = express.Router();
let jwtDecode = require('jwt-decode');
const {Receipies,Cuisines,Users,db} = require('../models');

receipeRoute.get('/',async(req,res)=>{
  try{
    const allReceipies = await Receipies.findAll({include:[Cuisines]});
    res.json(allReceipies);
  }catch(e){
    res.status(500).json({ msg: e.status });
  }
})
receipeRoute.get('/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const particularReceipe = await Receipies.findByPk(id,{
      include:[{all: true}]
    });
    res.json(particularReceipe);
  }catch(e){
    res.status(404).json({ msg: e.status });
  }
})
receipeRoute.post('/create',async(req,res)=>{
  try{
    console.log(req.body.picture_url, '** created recipe **')
    let decoded = jwtDecode(req.headers.token);
    console.log(decoded,'inside post method')
    const userCreatedReceipie = await Users.findOne({
      where:{
        email:decoded.email
      }
    });
      let createdReceipe = await Receipies.create(req.body);
    // ** cuisine ** //
    console.log(createdReceipe, '** created recipe **')
    const existingCuisine = await Cuisines.findAll({
      where:{
        name:req.body.cuisine
      }
    })    
    await createdReceipe.setUser(userCreatedReceipie);     
    if(!existingCuisine[0]){
      const cuisine = req.body.cuisine;
      const newCuisinie = await Cuisines.create({name:cuisine});
      await createdReceipe.addCuisines(newCuisinie);
      
    }else{
      console.log('**outside if***');
      await createdReceipe.addCuisines(existingCuisine);
    }
    res.send('receipie created'); 
     // ************* //   
  }catch(e){
    console.log("message", e.message);
    res.json({ message: e.message });
  }
})
receipeRoute.delete('/delete/:id',async(req,res)=>{
  try{
    let decoded = jwtDecode(req.headers.token);
    console.log(decoded,'in delete')
    const userCreatedReceipie = await Users.findOne({
      where:{
        email:decoded.email
      }
    });
    if(userCreatedReceipie){
      const id = req.params.id;
      const deletedReceipie = await Receipies.findByPk(id);
      await deletedReceipie.destroy();
      res.send(`recepie deleted deleted`);
    }else{
      res.send('user is not autorized')
    }
  }catch(e){
    res.send(e.messge)    
  }
})
receipeRoute.put('/edit/:id',async(req,res)=>{
  try{
    let decoded = jwtDecode(req.headers.token);
    const userCreatedReceipie = await Users.findOne({
      where:{
        email:decoded.email
      }
    });
    if(userCreatedReceipie){
      const id = req.params.id;
      const editedRecepie = await Receipies.update(req.body,{
        where:{
          id:id
        }
      })
      res.send(`Recepie with id: ${id} edited`);
    }else{
      res.send('You are not authorized to edit recepie')
    }
  }catch(e){
    res.status(404).json({ msg: e.status });   
  }
})
module.exports = receipeRoute;
