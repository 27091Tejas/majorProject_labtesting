const { sequelize, Sequelize } = require(".");
//This Sequelize Model represents tutorials table in MySQL database.
//These columns will be generated automatically: id,name, address, contact_no,  password,email:{

//create Sequelize data model in models.

module.exports = (sequelize, Sequelize) => {
    //call sequelize for performing for 
      const User = sequelize.define("user", {
          id:{
              type:Sequelize.INTEGER,
              allowNull:false,
              primaryKey:true,
              autoIncrement:true
          },
        name: {
          type: Sequelize.STRING
        },
        address: {
          type: Sequelize.STRING
        },
        contact_no:{
            type:Sequelize.INTEGER
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        role:{
            type: Sequelize.STRING
        }
        
      });
      return User;
    };
//After initializing Sequelize, we dont need to write CRUD functions, Sequelize supports all of them.