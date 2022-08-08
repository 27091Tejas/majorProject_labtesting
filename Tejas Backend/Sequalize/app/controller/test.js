
const Sequelize = require("sequelize");
const router = require("express").Router();
const {response} = require('express');
const cors = require("cors");
const sequelize = new Sequelize("labtest","root", "root1", {
  host: "localhost",
  dialect: "mysql",
});


//User table

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
    },
    contact_no:{
      type:Sequelize.INTEGER
    },
        password:{
            type: Sequelize.STRING
        },
        role:{
            type: Sequelize.STRING
        }
    },{timestamps:false});
       
  
    // test table 
       const Tests = sequelize.define("labtests",
       {
        testId:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        testName:{
          type:Sequelize.STRING
        },
        costOfTest:{
          type:Sequelize.INTEGER
        }
       },{timestamps:false});


    //appointment table;
    const Appointment = sequelize.define("appointment", {
      appointmentid: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
     
      Appointment_date:{
          type:Sequelize.DATEONLY           
      } ,   
      description: {
        type: Sequelize.STRING
      }
      },{timestamps:false});

      
      Appointment.belongsTo(User,
        {
          through:"appointment",
          as:"users",
          foreignKey:"userId"});


    sequelize.sync();
   
    router.get("/home", (req, res) => {
        res.send('welcome');
      });

     





      //save user working
      router.post("/addUser", (req, res) => {
        User.create(req.body).then((response)=>{res.send("user created")})
        .catch((error)=>console.log(error));
      });


      //save labtest working

      router.post("/addtest",(req,res)=>{
        Tests.create(req.body).then((response)=>{res.send("test uploaded")})
        .catch((error)=>console.log(error));
      });
           
      //save appoint working
      router.post("/appo",(req,res)=>{
        Appointment.create(req.body).then((response)=>{res.send("appointment booked")})
        .catch((error)=>console.log(error));
      });



      //find all working
      router.get("/", (req, res) => {
        User.findAll().then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

              
      //find tests it is working
      router.get("/lab", (req, res) => {
        Tests.findAll().then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });
      
      //find appoint ment  Appointment working

      router.get("/appoint", (req, res) => {
        Appointment.findAll().then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });
      
    
      //find by name working
      router.get("/:name", (req, res) => {
        User.findAll({where:{name:req.params.name}}).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

       //find by testNAme working
      router.get("/testname/:name", (req, res) => {
        Tests.findAll({where:{testName:req.params.name}}).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

      


      //find by id working
      router.get("/byId/:id", (req, res) => {
        User.findByPk(req.params.id).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });


      //find by id test working
      router.get("/bytestId/:id", (req, res) => {
        Tests.findByPk(req.params.id).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });
       
     

      //find by id appointment
      router.get("/byappoId/:id", (req, res) => {
        Tests.findByPk(req.params.id).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });

      //update
      router.put("/update/:id", (req, res) => {
        User.update(req.body,req.params.id).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });
      
      //delete
      router.delete("/delete/:id", (req, res) => {
        User.destroy({where : {id:req.params.id}}).then((response)=>{res.send("user deleted")})
        .catch((error)=>console.log(error));
      });

      //custom query
      router.get("/getUsers", (req, res) => {sequalize.query("select * from users",
      {type:sequelize.QueryTypes.SELECT}).then((data)=>{res.send(data)})
      .catch((error)=>console.log(error));})

module.exports = router;