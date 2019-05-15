const express = require('express');
const {Comments,Users,Receipies} = require('../models');
const commentRoute = express.Router();

commentRoute.get('/',async(req,res)=>{
  try{
    const allComments = await Comments.findAll();
    res.send(allComments);
  }catch(e){
    console.log(e.message);
    res.send(e.message);
  }
});
commentRoute.post('/create/:userId/recep/:recepId', async(req,res)=>{
  try{
    const createdComment = await Comments.create(req.body);
    userId = req.params.userId;
    recepId = req.params.recepId;
    const user = await Users.findByPk(userId);
    const recipe = await Receipies.findByPk(recepId) 
    console.log(recipe)
    await createdComment.setUser(user);
    await createdComment.setReceipie(recipe);
    res.send(createdComment);
  }catch(e){
    console.log(e.message);
    res.send(e.message);
  }
});
commentRoute.put('/:id',async(req,res)=>{
  const id = req.params.id;
  const comment = await Comments.findByPk(id);
  await comment.update(req.body);
  console.log(`comment with name: ${comment.name}`);
  res.send(`comment with name: ${comment.name}`);
});
commentRoute.delete('/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    await Comments.destroy({
      where:{
        id:id
      }
    });
    console.log(`Comment with id: ${id} deleted`);
    res.send(`Comment with id: ${id} deleted`);
  }catch(e){
    console.log(e.message);
    res.send(e.message);
  }
});
module.exports =  commentRoute;