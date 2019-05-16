const { Users, Cuisines, Receipies } = require("./models");
const { receipies, cuisines, users } = require("./data");
const createModels = async () => {
  try {
    Users.destroy({ where: {} });
    Cuisines.destroy({ where: {} });
    const initialUsers = await Users.bulkCreate(users, { returning: true });
    const initialCuisines = await Cuisines.bulkCreate(cuisines, {
      returning: true
    });
    const initialReceipies = await Receipies.bulkCreate(receipies, {
      returning: true
    });
    for (i = 0; i < initialReceipies.length; i++) {
      await initialReceipies[i].setUser(initialUsers[0]);
      await initialReceipies[i].addCuisines(initialCuisines[2]);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    await process.exit();
  }
};

createModels();