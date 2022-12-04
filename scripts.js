//variables//
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var NA_me = document.getElementById('NA_me');
var yerName;

//character name enter//
NA_me.onkeypress = function(event) {
  console.log(NA_me.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yerName = NA_me.value;
    NA_me.parentNode.removeChild(input)
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
  for (var i = 0; i <buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]=">" + buttonList[i][0] + "</button>";
  };
};

//MOVES GAME ALONG
var advaceTo = function(s) {
  changeText(s.text)
  changeButtons(s.buttons)
};

