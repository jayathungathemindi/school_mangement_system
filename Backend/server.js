var express = require("express");
require("dotenv").config();
var cors = require("cors");
const path = require("path");
// var bodyParser= require("body-parser")
const mongoose = require("mongoose");
// var jwt= require("jsonwebtoken");
const randomString = require("randomstring");

var port = process.env.PORT || 3000;

//const config = require("./database/db");
mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.xktux.mongodb.net/project?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("Database connected");
  }
);
module.exports = mongoose;
var app = express();

//Database Connect
//mongoose.connect(config.database);
// On connection
// mongoose.connection.on('connected', () => {
//     console.log('Connected to database '+ config.database);
// });
// // On error
// mongoose.connection.on('error', (err) => {
//     console.log('database error '+ err);
// });

//Cors Middleware
app.use(cors());

app.use('/add/documet', express.static(path.join('documents')));
//Body-Parser Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes

//routes for controllers
const router = require("./routes/routes");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});
app.use(router);

// Start Server
app.listen(port, function () {
  console.log("Server is running on port " + port);
});

// router.post('/create/form',FormController.createForm);  // create a form
// router.get('/form/:slug',FormController.FormBySlug);   // show selected form
// router.get('/forms',FormController.getForms);      // show all the forms
// router.post('/form/response',FormController.saveFormResponse); // fill and submit the form
// router.get('/form/:slug/responses',FormController.getFormResponses); // view responses for a particular form
// module.exports = router;
