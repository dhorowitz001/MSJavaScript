const readline = require('readline-sync');

/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

let playerName = '';
// Get player name using readline-sync
playerName = readline.question('Enter the player name: ');

// Create variables for player stats
let playerHealth = 100;
let playerGold = 20;
let currentLocation = 'village';
let gameRunning = true;
let inventory = [];

console.log('Player name: ' + playerName);
console.log('Player health: ' + playerHealth);
console.log('Player gold: ' + playerGold);
console.log('Current location: ' + currentLocation);
console.log('Is game running? ' + gameRunning);
