
const Sequelize = require("sequelize");
const router = require("express").Router();
const {response} = require('express');
const cors = require("cors");
const mysql=require('mysql2');

const sequelize = new Sequelize("labtest","root", "root1", {
  host: "localhost",
  dialect: "mysql",
});
const db = mysql.createConnection
({
    host:'localhost',
    user:'root',
    password:'root1',
    database:'labtest',
    // port:3306
})

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
        id:{
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
      id: {
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
        User.create(req.body).then((response)=>{res.json("user created")})
        .catch((error)=>console.log(error));
      });


      //save labtest working

      router.post("/addtest",(req,res)=>{
        Tests.create(req.body).then((response)=>{res.json("test uploaded")})
        .catch((error)=>console.log(error));
      });
           
      //save appoint working
      router.post("/appo",(req,res)=>{
        Appointment.create(req.body).then((response)=>{res.json("appointment booked")})
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

       //find by testNAme
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
       


      //find by id appointment working
      router.get("/byappoId/:id", (req, res) => {
        Appointment.findByPk(req.params.id).then((data)=>{res.send(data)})
        .catch((error)=>console.log(error));
      });
               
      //update user working
      
      router.put('/user/:id',(req,res)=>{

        console.log(req.body);       
        let gID= req.params.id;
        let fullname = req.body.name;
        let email = req.body.email;
        let mobile = req.body.contact_no;
        let password=req.body.password;
       
        let query = `UPDATE users 
                     SET name='${fullname}',email='${email}',contact_no='${mobile}',password='${password}'
                     WHERE id=${gID}`;
    
        db.query(query,(err,result)=>
        {
            if(err) console.log(err);    
            
            res.json({
                message:"Data Updated Successfully!!"
            })
        
        
        })
    
    })

    //update test working
    router.put('/updatelabtest/:id',(req,res)=>{

      console.log(req.body);       
      let gID= req.params.id;
      let testName = req.body.testName;
      let cost = req.body.costOfTest;
      
     
      let query = `UPDATE labtests 
                   SET testName='${testName}',costOfTest='${cost}'
                   WHERE id=${gID}`;
  
      db.query(query,(err,result)=>
      {
          if(err) console.log(err);    
          
          res.json({
              message:"Data Updated Successfully!!"
          })
      
      
      })
  
  })


      //update Appointments working
      router.put('/updateappointment/:id',(req,res)=>{

        console.log(req.body);       
        let gID= req.params.id;
        let description = req.body.description;
        let userId = req.body.userId;
        let Appointment_date=req.body.Appointment_date;
        
       
        let query = `UPDATE appointments 
                     SET description='${description}',userId='${userId}',Appointment_date='${Appointment_date}'
                     WHERE id=${gID}`;
    
        db.query(query,(err,result)=>
        {
            if(err) console.log(err);    
            
            res.json({
                message:"Data Updated Successfully!!"
            })
        
        
        })
    
    })

    //update password

    //update Appointments working
    router.put('/changePass',(req,res)=>{

      console.log(req.body);       
      
      let eamil = req.body.email;
      let password = req.body.password;
      let newPasssword=req.body
      let Appointment_date=req.body.Appointment_date;
      
     
      let query = `UPDATE appointments 
                   SET description='${description}',userId='${userId}',Appointment_date='${Appointment_date}'
                   WHERE id=${gID}`;
  
      db.query(query,(err,result)=>
      {
          if(err) console.log(err);    
          
          res.json({
              message:"Data Updated Successfully!!"
          })
      
      
      })
  
  })


    //get single data
    router.post('/loginuser',(req,res)=>
{
    let email= req.body.email;
    let pass = req.body.password;
    let query= `SELECT * FROM users WHERE email='${email}' and password='${pass}'`;

    db.query(query,(err,result)=>
    {
        if(err)console.log(err);

        if(result.length>0)
        {
            res.send(
                {
                    message:"Get Single Data",
                    data: result
                }
            );
        }
        else{
            res.json({
                message:"Data not found"
            })
        }
    })
})


//petients appointments


router.get('/appointments/:id',(req,res)=>
{
    let id= req.params.id;
   
    let query= `SELECT * FROM appointments WHERE userId=${id} `;

    db.query(query,(err,result)=>
    {
        if(err)console.log(err);

        if(result.length>0)
        {
            res.send(
                {
                    message:"Get Single Data",
                    data: result
                }
            );
        }
        else{
            res.send({
                message:"Data not found"
            })
        }
    })
})

      
      //delete working
      router.delete("/delete/:id", (req, res) => {
        User.destroy({where : {id:req.params.id}}).then((response)=>{res.send("user deleted")})
        .catch((error)=>console.log(error));
      });


      //delete test working
      
      router.delete("/deletetest/:id", (req, res) => {
        Tests.destroy({where : {id:req.params.id}}).then((response)=>{res.send("test deleted")})
        .catch((error)=>console.log(error));
      });
        

      // delete appointment working

      
      router.delete("/deleteappo/:id", (req, res) => {
        Appointment.destroy({where : {id:req.params.id}}).then((response)=>{res.send("appointment deleted ")})
        .catch((error)=>console.log(error));
      });

      //
      router.get("/getUsers", (req, res) => {sequalize.query("select * from users",
      {type:sequelize.QueryTypes.SELECT}).then((data)=>{res.send(data)})
      .catch((error)=>console.log(error));})

//       router.patch('/update',(req,res,next)=>
// {
//     let users = req.body;
//     let query = "update users set name=?,email=?,contact_no=?,password=? role=? where id=?";
//     sequelize.query(query,[users.name,users.email,users.contact_no,users.password,users.id],(err,results)=>
//     {
//         if(!err)
//         {
//             if(results.affectedRows == 0)
//             {
//                 return res.status(404).json({message: "user id does not exists"});
//             }
//             return res.status(200).json({message: "user updated successfuly"});
          
//         }
//         else
//         {
//             return res.status(500).json(err);
//         }
//     })
// })


module.exports = router;