$( document ).ready(function() {
    // create array for random number to be chosen
    var random = [];
    var numWins = 0;
    var numLosses = 0;
    var userTotal = 0;
    var finalTotal = 0;
    var random = targetNumber();
    //continuing variables with random numbers
    //random number to be set between 19-120
    function targetNumber() {
        return Math.floor(Math.random()*101)+19;
    }
  
    console.log(random);
    
    $("#targetNumber").text(random);
    $("#numWins").text(numWins);
    $("#numLosses").text(numLosses);
    $("#finalTotal").text(userTotal);
    function crystalNumber() {
         return Math.floor(Math.random()*11) + 1; 
     
    }
    //to make unique crystal numbers
    //function exclude(toExclude) {
     //   var number = crystalNumber();
    //}
    //random number for crystals
    var cryRed = crystalNumber();
    var cryBlue = crystalNumber();
    var cryYel = crystalNumber();
    var cryGre = crystalNumber();
    
  //reset for var values of crystals and target number
  function reset() {
       random = targetNumber();
       console.log(random);
       cryRed = crystalNumber();
       cryBlue = crystalNumber();
       cryYel = crystalNumber();
       cryGre = crystalNumber();
       userTotal = 0;
       $("#finalTotal").text(userTotal);
       $("#targetNumber").text(random);
  }         
  
  //add to counter of wins and losses and resets want to add alert to class win loss??
  function win() {
      $("#alert").text('You won!');
      console.log('win');
      numWins++;
      $("#numWins").text(numWins);
      reset ();
  }
  
  function loss() {
      $("#alert").text('You lost!');
      console.log('loss');
      numLosses++;
      $("#numLosses").text(numLosses);
      reset ();
  }
      
  //key gems on click to display random value
  $("#rD").on("click", function() {
      userTotal = userTotal + cryRed;
      console.log("New userTotal = " + userTotal);
      $("#finalTotal").text(userTotal);
      console.log(userTotal, random);
      if (userTotal === random) {
          win();
      }
      else if ( userTotal > random) {
          loss();
      }
  });
  
  
  $("#bL").on("click", function() {
      userTotal = userTotal + cryBlue;
      console.log("New userTotal = " + userTotal);
      $("#finalTotal").text(userTotal);
      if (userTotal === random) {
          win();
      }
      else if (userTotal > random) {
          loss ();
      }
  });
  
  $("#yL").on("click", function() {
      userTotal = userTotal + cryYel;
      console.log("New userTotal = " + userTotal);
      $("#finalTotal").text(userTotal);
      if (userTotal === random) {
          win();
      }
      else if (userTotal > random) {
          loss ();
      }
  });   
  
  $("#gR").on("click", function() {
      userTotal = userTotal + cryGre;
      console.log("New userTotal = " + userTotal);
      $("#finalTotal").text(userTotal);
      if (userTotal === random) {
          win();
      }
      else if ( userTotal > random) {
          loss ();
      }
  });     
  
  });    