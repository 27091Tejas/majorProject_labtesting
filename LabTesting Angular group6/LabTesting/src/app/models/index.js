//add configuration for mysql database here.
//initialize Sequelize here

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db= {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model.js")(sequelize, Sequelize);
// db.comments = require("./comments.model.js")(sequelize, Sequelize);
// db.tutorials.hasMany(db.comments, {as: "comments"});
// db.comments.belongsTo(db.tutorials, {
//     foreignKey: "tutorialId",
//     as: "tutorial",
// })
module.exports = db;

//We use hasMany() to help one Tutorial have many Comments, and belongsTo() to indicate that one Comment only belongs to one Tutorial.
