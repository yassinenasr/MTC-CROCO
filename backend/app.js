// import express module 
const express = require("express");

//import body-parser module
const bodyParser =require("body-parser");

// creates express app 
const app = express();

// configuration de l'application
app.use(bodyParser.json());// REC FE -- BE
app.use(bodyParser.urlencoded( { extended: true }));// recuperer l'objet

// make app exportable
// app est utilisable dans d'autres fichiers 
module.exports = app;