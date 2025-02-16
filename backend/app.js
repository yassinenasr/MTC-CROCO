//import express from 'express';
const express = require("express");
//import bodyParser from 'body-parser';
const bodyParser = require("body-parser");
//creates app express
const app = express();
//confi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// tab matchesTable
const matchesTable = [
  { id: 1, team1: "FCB", team2: "RMD", score1: 3, score2: 0 },
  { id: 2, team1: "ATM", team2: "VIL", score1: 1, score2: 1 },
  { id: 3, team1: "SEV", team2: "ESP", score1: 2, score2: 2 },
  { id: 4, team1: "GET", team2: "GRA", score1: 0, score2: 2 },
];
//business logic: add match
app.post("/matches", (req, res) => {
  const match = req.body;
  matchesTable.push(match);
  res.json({ Message: "Match added" });
});
//business logic: get all matches
app.get("/matches", (req, res) => {
  res.json({ matches: matchesTable });
});
//business logic: get match by id
app.get("/matches/:id", (req, res) => {
  const id = req.params.id;
  const match = matchesTable.find((match) => match.id == id);
  if (!match) {
    res.json({ message: "Match Not Found" });
  } else {
    res.json({ match: match });
  }
});
// business logic : delete match by id
app.delete("/matches/:id", (req, res) => {
  const id = req.params.id;
  const index = matchesTable.findIndex((match) => match.id == id);
  if (index === -1) {
    res.json({ message: "Match Not Found" });
  } else {
    matchesTable.splice(index, 1);
    res.json({ message: " Match Deleted " });
  }
});

// business logic : update match by id
app.put("/matches/:id", (req, res) => {
  // match id from the request parameters
  const id = req.params.id;
  // match to update that comes from the request body
  const match = req.body;
  // find the index of the match to update in the matchesTable
  const index = matchesTable.findIndex((match) => match.id == id);
  if (index === -1) {
    res.json({ message: "Match Not Found" });
  } else {
    matchesTable[index] = match;
    res.json({ message: "Match Updated" });
  }
});
const teamsTable = [
  { name: "FCB", owner: "figo ", foundation: 1900 },
  { name: "Real Madrid", owner: "Ronaldo", foundation: 1902 },
  { name: "Atletico Madrid", owner: "Torres", foundation: 1903 },
  { name: "Valencia", owner: "Silva", foundation: 1905 },
  { name: "Club affricain ", owner: "Yassine", foundation: 1920 },
];
app.post("/teams", (req, res) => {
  const team = req.body;
  teamsTable.push(team);
  res.json({ Message: "Team added" });
});

app.get("/teams", (req, res) => {
  res.json({ teams: teamsTable });
});
app.get("/teams/:foundation", (req, res) => {
  const foundation = req.params.foundation;
  const team = teamsTable.filter((team) => team.foundation == foundation);
  if (team) {
    res.json({ team: team });
  } else {
    res.json({ message: "Team Not Found" });
  }
});
app.delete("/teams/:name", (req, res) => {
  const name = req.params.name;
  const index = teamsTable.findIndex((team) => team.name == name);
  if (index === -1) {
    res.json({ message: "Team Not Found" });
  } else {
    teamsTable.splice(index, 1);
    res.json({ message: " Team Deleted " });
  }
});
module.exports = app;
