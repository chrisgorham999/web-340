/*
============================================
; Title:  team-manager.js
; Author: Professor Krasso
; Modified By: Chris Gorham
; Date:   16 January 2023
; Description: team-manager code
; Sources Used: 
; Web340 Week 3 Assignment Word Doc 
; W3 Schools JavaScript Array find() URL: https://www.w3schools.com/jsref/jsref_find.asp
;===========================================
*/

// Imports the Team class from the team.js file.
const Team = require('./team');

// create the array of teams and assign to teams variable
let teams = [
    new Team('New England College', 'Pilgrim', '40'),
    new Team('University of New Hampshire', 'Wildcat', '32'),
    new Team('University of Maine', 'Black Bear', '29'),
    new Team('Plymouth State University', 'Panther', '45'),
    new Team('Keene State College', 'Owl', '52'),
]

// creates the getTeams function that returns the variable teams, consisting of the teams array
module.exports.getTeams = function() {
  return teams;
}

// creates the getTeam function which looks for a specific team name in the array then returns the team
module.exports.getTeam = function(name) {
  for (let team of teams) {
    if (team.name == name) {
        return team
        }
    }
}


// creates the displayTeam function that takes the team names and displays them in the formatted string with line breaks
module.exports.displayTeam = function(team) {
  return 'Name: ' + team.name + '\nMascot: ' + team.mascot + '\nPlayer Count: ' + team.playerCount + '\n';
}

