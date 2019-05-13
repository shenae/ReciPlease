const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

/* *** DEFINE DATABASE *** */
const db = new Sequelize({
  database: "receipiesDB",
  dialect: "postgres",
  define:{
    underscored:true,
    returning: true
  }
})
/* *** DEFINE MODELS *** */
const Users = db.define('user',{
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true,
    validate:{
      isEmail:{
        msg: "Name must be valid email address"
      }     
    }
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false,
    validate:{
      len: [5,10]
    }
  }
})
const Receipies = db.define('receipie',{
  name:{
    type: Sequelize.STRING,
    allowNull:false
  },
  picture_url:{
    type: Sequelize.STRING,
    validate:{
      isUrl:true,
      msg: "Name must be url"
    }
  },
  rating:{
    type:Sequelize.INTEGER
  },
  ingredients:{
    type:Sequelize.STRING,
    allowNull:false
  },
  directions:{
    type:Sequelize.STRING,
    allowNull:false
  },
  mealCategories:{
    name:{
      type: Sequelize.STRING
    }
  }
})

const Cuisines = db.define('cuisine',{
  name:{
    type: Sequelize.STRING,
    allowNull:false
  }
})
const Comments = db.define('comment',{
  name:{
    type: Sequelize.STRING
  }
})
/* ************************************************* */
/* *** DEFINE RELATIONSHIP *** */
/* ** Users => Receipies (one to many) ** */
Users.hasMany(Receipies);
Receipies.belongsTo(Users);
/* ************************************************* */
/* ** Cuisines => Receipies (many to many) ** */
Receipies.belongsToMany(Cuisines,{through:"receipies_cuisines_xref"});
Cuisines.belongsToMany(Receipies,{through:"receipies_cuisines_xref"});
/* ************************************************* */
/* ** Comments => Receipies && Comments => Users (one to many) & (one to many) ** */
Comments.belongsTo(Receipies);
Comments.belongsTo(Users);
Users.hasMany(Comments);
Receipies.hasMany(Comments);
/* ************************************************* */
/* ** Encrypting password of user before creating** */
Users.beforeCreate(async(user, options) => {
  const hashPassword = await bcrypt.hash(user.password,12);
  user.password = hashPassword;
});
Users.beforeBulkCreate(async(users, options) => {
  for(const user of users){
    const hashPassword = await bcrypt.hash(user.password,12);
    user.password = hashPassword;
  }
});
/* ************************************************* */
/* **EXPORT MODELS & DATABASE** */
module.exports = {
  db,
  Users,
  Receipies,
  Cuisines,
  Comments,
}