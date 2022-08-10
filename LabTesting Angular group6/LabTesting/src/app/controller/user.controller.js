const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a User
    const user = {
        name:req.body.title,
        address:req.body.title,
        contact_no: req.body.contact_no,
        email : req.body.email,
        password:  req.body.password,
        role: req.body.role
      
    };
    // Save user in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
      res.send(err.message);
        });
     
  };