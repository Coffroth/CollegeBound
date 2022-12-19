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

scoreTracker = 0;



function updateScoreDisplay() {
  
  // document.querySelector to find the score display object and put the current score into it
  document.querySelector("#scoreBox h8").innerHTML = scoreTracker;
  
}


function Scenario(ScenarioName, routeURL, imageURL, scoreAdjustment) {

  this.ScenarioName = ScenarioName;
  this.route = routeURL;
  this.imageURL = imageURL;


  this.displayScenario = function() {

    document.querySelector(".HeadText h1").innerHTML = this.ScenarioName;

    //       document.querySelector("#HeadTextNoImg h1").innerHTML = this.ScenarioName;

    document.querySelector(".HeadText").style.backgroundImage = "url(" + this.imageURL + ")";
    //     document.getElementById('startButton').onclick = startNo;
    loadFileInto(this.route, "#Question");
    
    scoreTracker = scoreTracker + scoreAdjustment;
    updateScoreDisplay();
    
    // this is where you should adjust score
  }
}

{
  //begin//

  sBeginGameScenario = new Scenario("College Bound Day 1", "sStartGame.html", "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 0);
  paBeginGameScenario = new Scenario("College Bound Day 1", "paStartGame.html", "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 2);

  //PA week 1scenarios//
  P12Scenario = new Scenario("College Bound Day 1", "P1-2.html", "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg", 0);

  P131Scenario = new Scenario("College Bound Day 7", "P1-31.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg", 15);

  P132Scenario = new Scenario("College Bound Day 7", "P1-32.html", "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80.jpg", 3);

  P141Scenario = new Scenario("College Bound Day 7", "P1-41.html", "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 15);

  P142Scenario = new Scenario("College Bound Day 7", "P1-42.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80.jpg", 7);

  P143Scenario = new Scenario("College Bound Day 7", "P1-43.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", 13);

  P144Scenario = new Scenario("College Bound Day 7", "P1-44.html", "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 8);


  //PA week 2 scenarios//
  P22Scenario = new Scenario("College Bound Day 1", "P2-2.html", "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg", 0);

  P231Scenario = new Scenario("College Bound Day 7", "P2-31.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg", 20);

  P232Scenario = new Scenario("College Bound Day 7", "P2-32.html", "https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80.jpg", 10);

  P241Scenario = new Scenario("College Bound Day 7", "P2-41.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", 9);

  P242Scenario = new Scenario("College Bound Day 7", "P2-42.html", "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 7);

  P243Scenario = new Scenario("College Bound Day 7", "P2-43.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", 10);

  P244Scenario = new Scenario("College Bound Day 7", "P2-44.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", 20);

  //S week 1scenarios//
  S12Scenario = new Scenario("College Bound Day 1", "S1-2.html", "https://images.unsplash.com/photo-1566755272146-d8ebc6bdcdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80.jpg", 5);

  S131Scenario = new Scenario("College Bound Day 7", "S1-31.html", "https://images.unsplash.com/photo-1603484703346-361154238e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80 .jpg", 2);

  S132Scenario = new Scenario("College Bound Day 7", "S1-32.html", "https://images.unsplash.com/photo-1571474039046-42bc4e7f4b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 1);

  S141Scenario = new Scenario("College Bound Day 7", "S1-41.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 3);

  S142Scenario = new Scenario("College Bound Day 7", "S1-42.html", "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80.jpg", 2);

  S143Scenario = new Scenario("College Bound Day 7", "S1-43.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg.jpg", 0);

  S144Scenario = new Scenario("College Bound Day 7", "S1-44.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg", 0);


  //S week 2 scenarios//
  S22Scenario = new Scenario("College Bound Day 1", "S2-2.html", "https://images.unsplash.com/photo-1566755272146-d8ebc6bdcdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80.jpg", 8);

  S231Scenario = new Scenario("College Bound Day 7", "S2-31.html", "https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", 3);

  S232Scenario = new Scenario("College Bound Day 7", "S2-32.html", "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80.jpg", 1);

  S241Scenario = new Scenario("College Bound Day 7", "S2-41.html", "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80.jpg", 1);

  S242Scenario = new Scenario("College Bound Day 7", "S2-42.html", "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80.jpg", 0);

  S243Scenario = new Scenario("College Bound Day 7", "S2-43.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg", 2);

  S244Scenario = new Scenario("College Bound Day 7", "S2-44.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg", 1);


  //final grade scenarios//


  honorsScenario = new Scenario("Honors Student", "A.html", "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg", 0);

  okScenario = new Scenario("Good Student", "B.html", "https://images.unsplash.com/photo-1627199219038-e8263f729e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg", 0);

  avgScenario = new Scenario("Average Student", "C.html", "https://images.unsplash.com/photo-1612215670548-612dd2de09ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80.jpg", 0);

  refAvgScenario = new Scenario("Under Suspicion", "refC.html", "https://images.unsplash.com/photo-1650906915195-d371a6cf8194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", 0);

  ouchScenario = new Scenario("Almost Student", "D.html", "https://images.unsplash.com/photo-1517669375942-946a1f02d705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80.jpg", 0);

  sadScenario = new Scenario("Sad Student", "F.html", "https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80.jpg", 0);

  yeetScenario = new Scenario("Not a Student", "Expelled.html", "https://images.unsplash.com/photo-1597176116047-876a32798fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg", 0);

  //reset game//

  soScenario = new Scenario("College Bound", "trackScore.html", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg", -5);
}


    
// function Friends(doYou, fRoute, fAmount) {

//   this.doYou = doYou;
//   this.fRoute = fRoute;
//   this.fAmount = fAmount;

//   this.displayFriends = function() {

//     document.querySelector("#qFri h8").innerHTML = this.doYou;
//     document.querySelector("#amFri h9").innerHTML = this.fAmount;

//     //       document.querySelector("#HeadTextNoImg h1").innerHTML = this.ScenarioName;

//     loadFileInto(this.froute, "#friend");
//   }
// }

// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
// //week 1 PA
// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
// partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");



//  var grade = 25 ; {
   
//  }

// function zero () {
//   grade = 25;
//   document.getElementById('scoreSystem h9').innerHTML = "current score" + grade;
// }

// function twoThree () {
//   grade = 25 + 5;
//   document.getElementById('scoreSystem h9').innerHTML = "current score" + grade;
// }


/*
window.onload = function() {

  document.querySelector("#scoreBox").onclick = function zero() {
    grade.zero("#startPAButto").innerHTML= "current SCORE" + grade;
  }
}

*/


// //stack overflow var window.onload
// window.onload = function() {

//   var el = document.getElementById("ctl00_Main_OTClaim1_valControls");
//   var html = "";

//   if (el) {
//     html = document.getElementById("ctl00_Main_OTClaim1_valControls").innerHTML;
//     var xopen = window.open("about:blank");
//     xopen.document.write(html);
//   }
// }

// window.onload = function zero() {
//   document.getElementById("startPAButton").innerHTML = "current SCORE " + grade;
// }

// window.onload = function twoThree() {
//   document.getElementById("paStartOne").innerHTML = "current SCORE " + grade;
// }

// window.onload = function() {  
// //     grade = 25 + 3; // initialized
// //   loadFileInto("#scoreBox");
// //   document.getElementById('startButton').onclick = grade;
  
// // }
  
// document.getElementById('startButton').onclick = zero;

// document.getElementById('button 1').onclick = plusOne;


// function zero () {
//   grade = 25;
//   document.getElementById('scoreSystem h9').innerHTML = "current score" + grade;
// }

// function zero () {
//   grade = 25;
//   document.getElementById('scoreSystem h9').innerHTML = "current score" + grade;
// }

 
 
// }
// window.onload = function zero() {
//     loadFileInto;
// }
 
// document.getElementById('startButton').onclick = zero;

// document.getElementById('p12Party').onclick = fratParty;


// function zero () {
//   grade = 25;
//   document.getElementById('scoreSystem h9').innerHTML = grade;
// }
// function p12Party () {
//   total = 25 + 2;
//   document.getElementById('scoreSystem h9').innerHTML = grade;
// }


// document.getElementById('startButton').onclick = zero;
// document.getElementById('FratParty').onclick = fratParty;


// function zero () {
//   total = 2;
//   document.getElementById('scoreSystem h9').innerHTML = total;
// }
// function fratParty () {
//   total = 2 + 2;
//   document.getElementById('scoreSystem h9').innerHTML = total;
// }

// function Score(CurrentScore, scoreName, ScoreURL) {

// this.CurrentScore = CurrentScore
//   this.scoreName = scoreName;
//   this.score = ScoreURL;

//   this.displayScore = function() {
//     //h1 Super Easy Rosemary Bread//
//     document.querySelector("#phraseCurrent h3").innerHTML = this.CurrentScore;
//     document.querySelector("#scoreSystem h8").innerHTML = this.scoreName;

//     loadFileInto(this.score, "#scoreSection");
// //     document.querySelector("#scoringSystem h3").innerHTML = this.scoreName;
// //     loadFileInto(this.score, "#scoringSystem ul");
//   }
// }

// // ZeroScore = new Score("Current fgh", "10", "index.html");
// BeginScore = new Score("Current wer", "5", "StartGame.html");

// var scoreAmount = 2

// document.getElementById('startButton').onclick = zero;
// document.getElementById('FratParty').onclick = fratParty;


// function zero () {
//   total = 2;
//   document.getElementById('scoreSystem h9').innerHTML = total;
// }
// function fratParty () {
//   total = 2 + 2;
//   document.getElementById('scoreSystem h9').innerHTML = total;
// }



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