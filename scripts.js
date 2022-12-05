//variables//
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var yerName;
var scenario;
var advanceTo;

//character name enter//
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yerName = input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


//change text//
var changeText = function(words) {
  text.innerHTML = words.replace("Player Name", yerName);
};

// correct # of buttons
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

//MOVES GAME ALONG
var advanceTo = function(s) {
  changeText(s.text)
  changeButtons(s.buttons)
};

//scenario
var scenario = {
  one: {
   
    text: "Welcome to your first day of school! Please sign in and and start your acedemic journey!",
  },
  two: { 
    text: "Player Name Its your first day of school! You were just assigned a research paper, when will you start it?",
    buttons: [["Ive got time, I'll start it in a week", "advanceTo(scenario.three)"],["no time to waste!start now", "advanceTo(scenario.four)"]]
  },
    three: {
    text: "Player Name It's Your First College Party:D Do you want to go? !Caution 50% chance of getting Covid!",
    buttons: [["Yes", "advanceTo(scenario.six)"],["No", "advanceTo(scenario.seven)"]]
  },
  
    four: {
    text: "Player Name It's Your Fist College Party:D Do you want to go? !Caution 50% chance of getting Covid!",
    buttons: [["Yes", "advanceTo(scenario.eight)"],["No", "advanceTo(scenario.nine)"]]
  },
    five: {
    text: "Player Name OH NO! You Got Covid! You lost a week of school. You ran out of time and didnt feel well till the night it was due. How will you proceed? ",
   buttons: [["Do it yourself", "advanceTo(scenario.nine)"],["Plagerize. I mean who even really checks?", "advanceTo(scenario.ten)"]]
   },
  six: {
    text: "Player Name Congrats! You're Covid free! You recieved a C after working on it for a week. You have a passing grade!",
   
  },
  seven: {
    text: "Player Name Congrats! You're Covid free!You recieved a B after working on it for a week. You are doing pretty well.",

  },
  eight: {
    text: "Player Name Congrats! You're Covid free!You recieved a A after working on it for a week. You are doing GREAT! There are even whispers of honor roll!",
   
  },
   nine: {
    text: "Player Name Your teacher took 50% off your grade for it being late. You received a D, which still gets a degree! ",
   },
   ten: {
    text: "Player Name On behalf of the University, we regret to inform you that your attendace is under review for Plagerism... You have been call to the university conduct board, you recieved an F and are up for membership review. ",
  
   },
  
};

//this is the code that starts the game
advanceTo(scenario.one);
  
  
  
  
  
  
  
  