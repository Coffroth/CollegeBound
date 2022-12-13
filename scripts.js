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
  //begin//

  sBeginGameScenario = new Scenario("College Bound Day 1", "sStartGame.html", "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg");
  paBeginGameScenario = new Scenario("College Bound Day 1", "paStartGame.html", "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg");

  //PA week 1scenarios//
  P12Scenario = new Scenario("College Bound Day 1", "P1-2.html", "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg");

  P131Scenario = new Scenario("College Bound Day 7", "P1-31.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg")

  P132Scenario = new Scenario("College Bound Day 7", "P1-32.html", "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80.jpg")

  P141Scenario = new Scenario("College Bound Day 7", "P1-41.html", "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg")

  P142Scenario = new Scenario("College Bound Day 7", "P1-42.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80.jpg")

  P143Scenario = new Scenario("College Bound Day 7", "P1-43.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")

  P144Scenario = new Scenario("College Bound Day 7", "P1-44.html", "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg")


  //PA week 2 scenarios//
  P22Scenario = new Scenario("College Bound Day 1", "P2-2.html", "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg");

  P231Scenario = new Scenario("College Bound Day 7", "P2-31.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg")

  P232Scenario = new Scenario("College Bound Day 7", "P2-32.html", "https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80.jpg")

  P241Scenario = new Scenario("College Bound Day 7", "P2-41.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")

  P242Scenario = new Scenario("College Bound Day 7", "P2-42.html", "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg")

  P243Scenario = new Scenario("College Bound Day 7", "P2-43.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")

  P244Scenario = new Scenario("College Bound Day 7", "P2-44.html", "https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")

  //S week 1scenarios//
  S12Scenario = new Scenario("College Bound Day 1", "S1-2.html", "https://images.unsplash.com/photo-1566755272146-d8ebc6bdcdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80.jpg");

  S131Scenario = new Scenario("College Bound Day 7", "S1-31.html", "https://images.unsplash.com/photo-1603484703346-361154238e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80 .jpg")

  S132Scenario = new Scenario("College Bound Day 7", "S1-32.html", "https://images.unsplash.com/photo-1571474039046-42bc4e7f4b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg")

  S141Scenario = new Scenario("College Bound Day 7", "S1-41.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")

  S142Scenario = new Scenario("College Bound Day 7", "S1-42.html", "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80.jpg")

  S143Scenario = new Scenario("College Bound Day 7", "S1-43.html", "https://images.unsplash.com/photo-1643841170740-d9f8ee7ed5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80.jpg.jpg")

  S144Scenario = new Scenario("College Bound Day 7", "S1-44.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg")


  //S week 2 scenarios//
  S22Scenario = new Scenario("College Bound Day 1", "S2-2.html", "https://images.unsplash.com/photo-1566755272146-d8ebc6bdcdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80.jpg");

  S231Scenario = new Scenario("College Bound Day 7", "S2-31.html", "https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")

  S232Scenario = new Scenario("College Bound Day 7", "S2-32.html", "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80.jpg")

  S241Scenario = new Scenario("College Bound Day 7", "S2-41.html", "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80.jpg")

  S242Scenario = new Scenario("College Bound Day 7", "S2-42.html", "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80.jpg")

  S243Scenario = new Scenario("College Bound Day 7", "S2-43.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg")

  S244Scenario = new Scenario("College Bound Day 7", "S2-44.html", "https://images.unsplash.com/photo-1653771926509-729281fda8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80.jpg")


  //final grade scenarios//

  honorsScenario = new Scenario("College Bound Day 14", "A.html", "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg")

  okScenario = new Scenario("College Bound Day 14", "B.html", "https://images.unsplash.com/photo-1627199219038-e8263f729e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg")

  avgScenario = new Scenario("College Bound Day 14", "C.html", "https://images.unsplash.com/photo-1612215670548-612dd2de09ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80.jpg")

  refAvgScenario = new Scenario("College Bound Day 14", "refC.html", "https://images.unsplash.com/photo-1650906915195-d371a6cf8194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")

  ouchScenario = new Scenario("College Bound Day 14", "D.html", "https://images.unsplash.com/photo-1517669375942-946a1f02d705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80.jpg")

  sadScenario = new Scenario("College Bound Day 14", "F.html", "https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80.jpg")

  yeetScenario = new Scenario("College Bound Day 14", "Expelled.html", "https://images.unsplash.com/photo-1597176116047-876a32798fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80.jpg")

  //reset game//

  soScenario = new Scenario("College Bound", "trackScore.html", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg")
}

function Friends(doYou, fRoute, fAmount) {

  this.doYou = doYou;
  this.fRoute = fRoute;
  this.fAmount = fAmount;

  this.displayFriends = function() {

    document.querySelector("#qFri h8").innerHTML = this.doYou;
    document.querySelector("#amFri h9").innerHTML = this.fAmount;

    //       document.querySelector("#HeadTextNoImg h1").innerHTML = this.ScenarioName;

    loadFileInto(this.froute, "#friend");
  }
}

partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
//week 1 PA
partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");
partyFriends = new Friends("Current Friends", "paStartGame.html", "Two");


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


// function Score(CurrentScore, scoreName, scoreAmount, ScoreURL) {

// this.CurrentScore = CurrentScore
//   this.scoreName = scoreName;
//   this.scoreAmount = scoreAmount;
//   this.score = ScoreURL;

//   this.displayScore = function() {
//     //h1 Super Easy Rosemary Bread//
//     document.querySelector("#phraseCurrent h3").innerHTML = this.CurrentScore;
//     document.querySelector("#scoreSystem h8").innerHTML = this.scoreName;
// //      document.querySelector("#scoreSystem h9").innerHTML = this.scoreAmount;

//     loadFileInto(this.score, "#scoreSection");
//     loadFileInto(this.scoreAmount, "#total h9")
// //     document.querySelector("#scoringSystem h3").innerHTML = this.scoreName;
// //     loadFileInto(this.score, "#scoringSystem ul");
//   }
// }

// // ZeroScore = new Score("Current fgh", "10", "index.html");
// BeginScore = new Score("Current wer", "5", "zero", "StartGame.html");


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