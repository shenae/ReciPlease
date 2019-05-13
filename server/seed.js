const {Users,Cuisines,Receipies} = require('./models');
const {receipies,cuisines,users} = require('./data');
const createModels = async()=>{
  try{
    Users.destroy({where:{}});
    Cuisines.destroy({where:{}});
    Receipies.destroy({where:{}});
    const initialUsers = await Users.bulkCreate(users,{returning:true});
    const initialCuisines = await Cuisines.bulkCreate(cuisines);
    const initialReceipies = await Receipies.bulkCreate(receipies,{returning:true});

  }catch(e){
    console.log(e.message);
  }finally{
    await process.exit();
  }
}

createModels();