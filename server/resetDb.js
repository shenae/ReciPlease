const {db} = require('./models');

const sync = async()=>{
  try{
    await db.sync({force:true});
    console.log('database synced');
  }catch(e){
    console.log(e)
  }finally{
    await process.exit();
  }
}

sync();