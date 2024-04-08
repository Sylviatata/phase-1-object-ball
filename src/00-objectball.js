// Define the gameObject function to populate basketball game data
function gameObject() {
    // Return an object containing data about the basketball game
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Define function to get the number of points scored by a player
  function numPointsScored(playerName) {
    let game = gameObject(); // Retrieve game data
    // Check if player is from home team
    if (playerName in game.home.players) {
      return game.home.players[playerName].points;
    } 
    // Check if player is from away team
    else if (playerName in game.away.players) {
      return game.away.players[playerName].points;
    } 
    // Player not found
    else {
      return "Player not found";
    }
  }
  
  // Define function to get the shoe size of a player
  function shoeSize(playerName) {
    let game = gameObject(); // Retrieve game data
    // Check if player is from home team
    if (playerName in game.home.players) {
      return game.home.players[playerName].shoe;
    } 
    // Check if player is from away team
    else if (playerName in game.away.players) {
      return game.away.players[playerName].shoe;
    } 
    // Player not found
    else {
      return "Player not found";
    }
  }
  
  // Define function to get the team colors given the team name
  function teamColors(teamName) {
    let game = gameObject(); // Retrieve game data
    // Check if team is home team
    if (teamName === game.home.teamName) {
      return game.home.colors;
    } 
    // Check if team is away team
    else if (teamName === game.away.teamName) {
      return game.away.colors;
    } 
    // Team not found
    else {
      return "Team not found";
    }
  }
  
  // Define function to get an array of team names
  function teamNames() {
    let game = gameObject(); // Retrieve game data
    return [game.home.teamName, game.away.teamName];
  }
  
  // Define function to get an array of player numbers for a given team
  function playerNumbers(teamName) {
    let game = gameObject(); // Retrieve game data
    // Check if team is home team
    if (teamName === game.home.teamName) {
      return Object.values(game.home.players).map(player => player.number);
    } 
    // Check if team is away team
    else if (teamName === game.away.teamName) {
      return Object.values(game.away.players).map(player => player.number);
    } 
    // Team not found
    else {
      return "Team not found";
    }
  }
  
  // Define function to get player stats for a given player name
  function playerStats(playerName) {
    let game = gameObject(); // Retrieve game data
    // Check if player is from home team
    if (playerName in game.home.players) {
      return game.home.players[playerName];
    } 
    // Check if player is from away team
    else if (playerName in game.away.players) {
      return game.away.players[playerName];
    } 
    // Player not found
    else {
      return "Player not found";
    }
  }
  
  // Define function to get the number of rebounds associated with the player that has the largest shoe size
  function bigShoeRebounds() {
    let game = gameObject(); // Retrieve game data
    let largestShoeSizePlayer = null;
    let largestShoeSize = 0;
    // Iterate over home team players
    Object.values(game.home.players).forEach(player => {
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        largestShoeSizePlayer = player;
      }
    });
    // Iterate over away team players
    Object.values(game.away.players).forEach(player => {
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        largestShoeSize
        largestShoeSizePlayer = player;
    }
  });
  // Return the number of rebounds of the player with the largest shoe size
  return largestShoeSizePlayer.rebounds;
}

// Call and log the output of the gameObject function to verify its structure
console.log(gameObject());

// Call and log the output of other functions to test their functionality
console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson"));
console.log("Shoe size of Jason Terry:", shoeSize("Jason Terry"));
console.log("Colors of Brooklyn Nets:", teamColors("Brooklyn Nets"));
console.log("Team names:", teamNames());
console.log("Player numbers of Charlotte Hornets:", playerNumbers("Charlotte Hornets"));
console.log("Stats of DeSagna Diop:", playerStats("DeSagna Diop"));
console.log("Rebounds of player with largest shoe size:", bigShoeRebounds());
