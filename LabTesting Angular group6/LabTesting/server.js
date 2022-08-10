const express = require("express");  //express is for building rest api's
const cors = require("cors"); //cors provide Express middleware to enable CORS with various options.
const app = express();
const db = require("./src/app/models");


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));


//simple route
app.get("/", (req,res) => {
    res.json({ message: "welcome"});
})

//To drop existing tables and re-sync databses.
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db");
})

require("./src/app/routes/tutorial.routes")(app);
//set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});