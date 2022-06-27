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


app.post("/getdata", fetch.viewOne);  


// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('alertButton').addEventListener('click', startRequest);
// });




app.post("/shopify", async(req, res) => {

    await shopify(req.body)
 
});


app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
 


  
 
});











const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = app;
