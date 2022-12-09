
// Javascript for tp6

//function to load file from the URL "frontfile" into the object indetified by "whereto"

function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response  
  ajax.send();

}


function Scenario(ScenarioName, pageURL ) {

  this.ScenarioName = ScenarioName;
  this.page = pageURL;
  this.score = 0;
  
  this.displayScenario = function() {
    //h1 Super Easy Rosemary Bread//
    document.querySelector("#HeadText h1").innerHTML = this.ScenarioName;
    loadFileInto(this.page, "#Question p")
  }
}

BeginGameScenario = new Scenario("TA DA!!!!!!!", "GameStartTest.html");



window.onload = function() {

  document.querySelector("#testButton").onclick = function() {
   BeginGameScenario.displayScenario();
  }
}
