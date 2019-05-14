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
      include:[Cuisines]
    });
    res.json(particularReceipe);
  }catch(e){
    res.status(404).json({ msg: e.status });
  }
})
receipeRoute.post('/create',async(req,res)=>{
  try{
    console.log(req.body.token,'*** token');
    let decoded = jwtDecode(req.body.token);
    console.log(decoded.email,'***decoded token');
    const userCreatedReceipie = await Users.findOne({
      where:{
        email:decoded.email
      }
    });
    const createdReceipe = await Receipies.create(req.body);
    
    // ** cuisine ** //
    const existingCuisine = await Cuisines.findAll({
      where:{
        name:req.body.cuisine
      }
    })
    console.log(userCreatedReceipie.dataValues.id);
    
    await createdReceipe.setUser(userCreatedReceipie);
    res.send(createdReceipe);
    // await db.sequelize.query(`UPDATE receipies userId:userCreatedReceipie[0].dataValues.id, recepId:createdReceipe.dataValues.id SET user_id = :userId  WHERE id = :recepId`,{ 
    //   replacements: {userId:userCreatedReceipie[0].dataValues.id, recepId:createdReceipe.dataValues.id},
    //   type: db.sequelize.QueryTypes.UPDATE
    //  })
    
    if(!existingCuisine[0]){
      console.log(typeof req.body.cuisine);
      const cuisine = req.body.cuisine;
      const newCuisinie = await Cuisines.create({name:cuisine});
      console.log(newCuisinie,'**new cuisine');
      await createdReceipe.addCuisines(newCuisinie);
      
    }else{
      console.log('**outside if***');
      await createdReceipe.addCuisines(existingCuisine);
    }
     // ************* //   
    
  }catch(e){
    res.json({ msg: e.status });
  }
})
receipeRoute.delete('/delete/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const deletedReceipie = await Receipies.findByPk(id);
    await deletedReceipie.destroy();
    res.send(`rec deleted`);
  }catch(e){
    res.json({ msg: e.status })    
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
    res.send(`Recepie with id: ${id} edited`);
  }catch(e){
    res.status(404).json({ msg: e.status });   
  }
})
module.exports = receipeRoute;
