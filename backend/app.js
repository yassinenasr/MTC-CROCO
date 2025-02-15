// import express module 
const express = require("express");

//import body-parser module
const bodyParser =require("body-parser");

// creates express app 
const app = express();

// configuration de l'application
app.use(bodyParser.json());// REC FE -- BE
app.use(bodyParser.urlencoded( { extended: true }));// recuperer l'objet
let matchesTable = [
    { id: 1, team1: "PSG", team2: "OM", score1: 2, score2: 1,},
    { id: 2, team1: "Barcelona", team2: "Real Madrid", score1: 1, score2: 2,},
    { id: 3, team1: "Juventus", team2: "Milan", score1: 2, score2: 2,},
    { id: 4, team1: "Bayern", team2: "Dortmund", score1: 3, score2: 1,},
    { id: 5, team1: "Chelsea", team2: "Arsenal", score1: 1, score2: 0,},

];
let playersTable = [ 
    { id: 1, name: "Messi", age: 33, poste: "attaquant",},
    { id: 2, name: "Ronaldo", age: 35, poste: "attaquant",},
    { id: 3, name: "Mbappe", age: 20, poste: "attaquant",},
    { id: 4, name: "Neymar", age: 29, poste: "attaquant",},  

];

app.post("/matches", (req, res) => {  
    // get the data from the request
    let match = req.body;
    // generate a new id
    let id = Object.keys(matchesTable).length + 1;
    // add the new match to the table
    matchesTable.push(match);
    // send the response
    res.json({ msg: "Match added successfully" });

});

// make app exportable
// app est utilisable dans d'autres fichiers 
module.exports = app;
