const db= require("../controller/test.js");
const Labtest=db.labtests;


// Create and Save a new labtest
exports.create = (req, res) => {

    
};


// Retrieve all labtests from the database.
// exports.findAll = (req, res) => {
//     const testName = req.query.testName;
//     const condition = testName ? { testName: { [Op.like]: `%${testName}%` } } : null;
//     Labtest.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "some error occured while retrieveing tutorial"
//             })
//         })
// };

//find all
 exports.findAll=(req, res) => {
    Labtest.findAll().then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
  };