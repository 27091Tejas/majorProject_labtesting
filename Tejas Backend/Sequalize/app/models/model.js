module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        contains: '@'
      },    
      contact_no: {
        type: Sequelize.DOUBLE
      },
      Address: {
        type: Sequelize.STRING
      },
      Profession: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING,
        validate: {
          // is: /^[0-9a-f]$/i
          len: [5,10]
        }
      }
    });
    return User;
  };