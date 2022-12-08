
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


function OpenScenario(ScenarioName, imageURL, pageURL ) {

  this.ScenarioName = ScenarioName;
  this.imageURL = imageURL;
  this.page = pageURL;
  
  this.displayScenario = function() {
    //h1 Super Easy Rosemary Bread//
    document.querySelector("#HeadText h1").innerHTML = this.ScenarioName;
    document.querySelector("#HeadText").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.page, "#startPage p")
}


BeginGameScenario = new Scenario("Begin Game", "https://images.unsplash.com/photo-1621265040752-58815f16ca6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg", "GameStartTest.html");



window.onload = function() {

  document.querySelector("#firstScenario").onclick = function() {
   BeginGameScenario.displayScenario();
  }
  }

} 