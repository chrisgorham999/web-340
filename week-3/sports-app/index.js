/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Modified By: Chris Gorham
; Date: 16 January 2023
; Description: sports-app index.js
; Sources Used: 
; Web340 Week 3 Assignment Word Doc 
;===========================================
*/

// loads the team-manager.js for use
const TeamManager = require('./team-manager');

// define the variable that gets the teams from the arrays and puts them in one place
let teams = TeamManager.getTeams();

// prints the array
console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

// assigns the first variable for a single team utilizing the getTeam function
const team1 = TeamManager.getTeam('New England College');

// assigns the second variable for a single team utilizing the getTeam function
const team2 = TeamManager.getTeam('University of New Hampshire');

// prints the first single team
console.log('\n-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(team1));

// prints the second single team 
console.log('\n-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(team2));