module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

   const comments= require("../controllers/comment.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
    //comments
   router.post("/addComments", comments.create);

   //retrive comments for particular tutorial
   router.get("/getComments/:id",tutorials.getComments);

   router.get("/getTutorial/:id",comments.getTutorial);
    app.use('/api/tutorials', router);
  };