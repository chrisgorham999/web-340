/*
============================================
; Title:  team.js
; Author: Professor Krasso
; Modified By: Chris Gorham
; Date: 16 January 2023
; Description: Team class
; Sources Used: 
; Web340 Week 3 Assignment Word Doc 
;===========================================
*/

// creates the Team class and properties
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// this allows it to be exported in other files
module.exports = Team;
