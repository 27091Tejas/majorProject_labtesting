const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    // Validate request
   
    // Create a comments
    const comment = {
      name: req.body.name,
      text: req.body.text,
      tutorialId:req.body.tutorialId
     
    };
    // Save Tutorial in the database
    Comments.create(comment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the comments."
        });
      });
  };


    //new methods
  //get tutorial  for specific comment
  exports.getTutorial = (req, res) => {
    Comments.findByPk(req.params.id,{include: 'tutorial'})
      .then(data => {
        res.send({ message: data });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
     
  };
