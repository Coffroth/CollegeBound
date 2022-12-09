// Javascript for tp6

//function to load file from the URL "frontfile" into the object indetified by "whereto"

function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();



  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);
  // initiate request and wait for response  
  ajax.send();

}


function Scenario(ScenarioName, pageURL) {

  this.ScenarioName = ScenarioName;
  this.page = pageURL;
  this.score = 0;

  this.displayScenario = function() {
    //h1 Super Easy Rosemary Bread//
    document.querySelector("#HeadText h1").innerHTML = this.ScenarioName;
    loadFileInto(this.page, "#Question")
  }
}

BeginGameScenario = new Scenario("College Bound 1", "StartGame.html");

OneWeekScenario = new Scenario("College Bound 1 Week", "1Week.html");

TwoWeeksScenario = new Scenario("College Bound 2 Week", "2Weeks.html");


window.onload = function() {

  document.querySelector("#startButton").onclick = function() {
    BeginGameScenario.displayScenario();
  }
  document.querySelector("#Button1week").onclick = function() {
    OneWeekScenario.displayScenario();
  }
  document.querySelector("#Button2Week").onclick = function() {
    TwoWeeksScenario.displayScenario();
  }
}