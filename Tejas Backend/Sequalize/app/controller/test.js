
const Sequelize = require("sequelize");
const router = require("express").Router();
const {response} = require('express');

const sequelize = new Sequelize("mydb","root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: Sequelize.STRING
    },    
    email: {
      type: Sequelize.STRING
    }
    },{timestamps:false});

    const Appointment = sequelize.define("appointment", {
      appointmentid: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },    
      description: {
        type: Sequelize.STRING
      }
      },{timestamps:false});

      User.belongsTo(Appointment,{
        through:"appointment",
        as:"appointment",
        foreignKey:"appointmentId"});
      Appointment.belongsTo(User,
        {
          through:"appointment",
          as:"users",
          foreignKey:"userId"});


    sequelize.sync();
   
    router.get("/home", (req, res) => {
        res.send('welcome');
      });

      //save user
      router.post("/addUser", (req, res) => {
        User.create(req.body).then((response)=>{res.send("user created")})
        .catch((error)=>console.log(error));
      });

      //find all
      router.get("/", (req, res) => {
        User.findAll().then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

      //find by name
      router.get("/:name", (req, res) => {
        User.findAll({where:{name:req.params.name}}).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

      //find by id
      router.get("/byId/:id", (req, res) => {
        User.findByPk(req.params.id).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

      //update
      router.put("/update/:id", (req, res) => {
        User.update(req.body,{where : {id:req.params.id}}).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });
      
      //delete
      router.delete("/delete/:id", (req, res) => {
        User.destroy({where : {id:req.params.id}}).then((response)=>{res.send("user deleted")})
        .catch((error)=>console.log(error));
      });

      //custom query
      router.get("/getUsers", (req, res) => {sequalize.query("select * from userinfos",
      {type:sequelize.QueryTypes.SELECT}).then((data)=>{res.send(data)})
      .catch((error)=>console.log(error));})

module.exports = router;