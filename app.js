const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const fetch = require("./fetchfollwers");

const cors = require("cors");









app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(cors());

app.use(express.json({ limit: "125mb" }));


const { Blob } = require('buffer') ;

const port = 5000;


app.get("/getdata", fetch.viewOne);  


// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('alertButton').addEventListener('click', startRequest);
// });




app.post("/shopify", async(req, res) => {

    await shopify(req.body)
 
});


app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
 


  
 
});








process.on("unhandledRejection", (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log("unhandledRejection", error.message);
});

process.on("uncaughtException", (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log("uncaughtException", error.message);
});

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on("SIGKILL", function (code) {
  console.log("SIGKILL received...", code);
});

process.once("SIGINT", function (code) {
  console.log("SIGINT received...", code);
});

// vs.

process.once("SIGTERM", function (code) {
  console.log("SIGTERM received...", code);
});



const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = app;
