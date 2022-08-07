

const { Router } = require("express");


module.exports = app => {
    const user=require("../controller/user.controller.js");
    const router = require("express").Router();
    
    // Create a new Tutorial
    router.post("/", user.create);
    app.use('/api/user', router);
}

//to find all User which name contains ‘node’: GET /user?name=node
//http://api/user?name=node