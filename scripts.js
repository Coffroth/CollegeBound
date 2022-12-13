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

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);
  // initiate request and wait for response  
  ajax.send();
}

// function Score(currentScore, product) {
//   this.currentScore = currentScore;
//   this.product = product;
  
//   this.displayScore = function(){
//     document.querySelector("curScore").innerHTML = this.currentScore;
//     loadFileInto(this.product, "#product");
//   }
// }

// BeginGameScore = new Score("Current Score", "trackScore.html");


function Scenario(ScenarioName, routeURL, imageURL) {

  this.ScenarioName = ScenarioName;
  this.route = routeURL;
  this.imageURL = imageURL;
  

  this.displayScenario = function() {
    
    document.querySelector(".HeadText h1").innerHTML = this.ScenarioName;
    
//       document.querySelector("#HeadTextNoImg h1").innerHTML = this.ScenarioName;

      document.querySelector(".HeadText").style.backgroundImage = "url(" + this.imageURL + ")";
//     document.getElementById('startButton').onclick = startNo;
    loadFileInto(this.route, "#Question");
  }
}

{
BeginGameScenario = new Scenario("College Bound Day 1", "StartGame.html", "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg");

  //week 1 scenarios//
  OneWeekScenario = new Scenario("College Bound Day 1", "1Week.html", "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg");
 
  yes1PartyScenario = new Scenario("College Bound Day 7", "oneWeekParty.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg")
  
dorm1PartyScenario = new Scenario("College Bound Day 7", "dormOneParty.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")
  
  no1PartyScenario = new Scenario("College Bound Day 7", "oneNoParty.html", "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80.jpg")
  
  
  
  //week 2 scenarios//
  TwoWeeksScenario = new Scenario("College Bound Day 1", "2Weeks.html", "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg");

no2PartyScenario = new Scenario("College Bound Day 7", "twoNoParty.html", "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80.jpg")

yes2PartyScenario = new Scenario("College Bound Day 7", "twoWeeksParty.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg")
  
  
  
  //final grade scenarios//
  
honorsScenario = new Scenario("College Bound Day 14", "A.html", "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg")

okScenario = new Scenario("College Bound Day 14", "B.html", "https://images.unsplash.com/photo-1627199219038-e8263f729e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg")

avgScenario = new Scenario("College Bound Day 14", "C.html", "https://images.unsplash.com/photo-1612215670548-612dd2de09ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80.jpg")
  
  refAvgScenario =  new Scenario("College Bound Day 14", "refC.html", "https://images.unsplash.com/photo-1650906915195-d371a6cf8194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")
  
  ouchScenario =  new Scenario("College Bound Day 14", "D.html", "https://images.unsplash.com/photo-1517669375942-946a1f02d705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80.jpg")

sadScenario = new Scenario("College Bound Day 14", "F.html", "https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80.jpg")
  
  yeetScenario = new Scenario("College Bound Day 14", "Expelled.html", "https://images.unsplash.com/photo-1597176116047-876a32798fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg")
  
  //reset game//
  
soScenario = new Scenario("College Bound", "trackScore.html", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")
}

// function TryAgain( ResetName, ResetURL, imageReset) {

//   this.ResetName = ResetName;
//   this.ResetURL = ResetURL;
//   this.imageReset = imageReset;
  

//   this.displayTryAgain = function() {
    
//     document.querySelector("#HeadText h2").innerHTML = this.ResetName;

//       document.querySelector("#HeadTextNoImg").style.backgroundImage = "url(" + this.imageReset + ")";
// //     document.getElementById('startButton').onclick = startNo;
//     loadFileInto(this.ResetURL, "#Question");
//   }
// }

// {
// soTryAgain = new TryAgain("College Bound", "trackScore.html", "https://images.unsplash.com/photo-1527720255604-b27935ade401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.jpg")
// }


//RESET BUTTON TRYS//

// function resetScenario(resetScenarioName, resetRouteURL) {

//   this.resetScenarioName = resetScenarioName;
//   this.reetRoute = resetRouteURL;
  

//   this.displayresetScenario = function() {
    
//     document.querySelector("#HeadText h1").innerHTML = this.resetScenarioName;

// //     document.getElementById('startButton').onclick = startNo;
//     loadFileInto(this.resetRoute, "#Question");
//   }
// }

// startresetScenario = new resetScenario("College Bound", "index.html")


// function Reset(resetName, routeURL, imageURL) {

//   this.resetName = resetName;
//   this.route = routeURL;
//    this.imageURL = imageURL;

//   this.displayReset = function() {
    
//    document.querySelector("#HeadText h1").innerHTML = this.resetName;
// document.querySelector("#HeadText").style.backgroundImage = "url(" + this.imageURL + ")";
//     loadFileInto(this.route, "#Question");
//   }
// }

//   startOverReset = new Reset( "College Bound", "index.html", "https://images.unsplash.com/photo-1527720255604-b27935ade401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.jpg")

//PHOTO CRED FUNCTION TRY//

// function PhotoCred ( photoName, imgSource){
//   this.photoName = photoName
//   this.source = imgSource;
// }

//  this.displayPhotoCred = function() {
//   document.querySelector("#footer h8").innerHTML = this.photoName;
//     document.querySelector("#footer h9").innerHTML = this.source;
// }

//  BeginGamePhotoCred = new PhotoCred("unsplash", "StartGame.html")

//SCORE TRACKER TRY//

// var scoreTot = 5;

// // document.getElementById('startButton').onclick = startNo;

// function startNo() {
//   scoreTot = 5;
//   document.getElementById('product').innerHTML = scoreTot;
// }

// function waitOne() {
//   scoreTot = scoreTot +1;
//   document.getElementById('product').innerHTML = scoreTot;
// }

// function waitTwo() {
//   scoreTot = scoreTot +2;
//   document.getElementById('product').innerHTML = scoreTot;
// }


