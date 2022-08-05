const express=require("express");

const app=express();
app.use(express.json());//this should be at upper place always 

const router=require('./app/controller/test.js');
app.use("/test",router);

app.listen();


app.get("/", (req, res) => {
    res.json({ message: "Welcome to Node JS application." });
  });


  // const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});