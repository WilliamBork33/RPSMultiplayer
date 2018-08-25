$(document).ready(function () {

    //Initialize Firebase
    var config = {
        apiKey: "",
        authDomain: "rpsmultiplayer-50afb.firebaseapp.com",
        databaseURL: "https://rpsmultiplayer-50afb.firebaseio.com",
        projectId: "rpsmultiplayer-50afb",
        storageBucket: "rpsmultiplayer-50afb.appspot.com",
        messagingSenderId: "693127608542"
    };
    
    firebase.initializeApp(config);
    
    // Create a variable to reference the database.
    var database = firebase.database();



    //Declaring variables.
    var playerName1 = "PLAYER1";
    var playerName2 = "PLAYER2";
    var playerChoiceword1 = "";
    var playerChoiceword2 = "";
    var playerScore1 = 0;
    var playerScore2 = 0;
    var tieScore = 0;
    var audioElement;
    var audioPreference;



    //Get both the player1's and player2's name and push it to the HTML.
    var playerName1 = "Player 1: " + prompt("Player 1 name?");
    var playerName2 = "Player 2: " + prompt("Player 2 name?");
    


    //Firebase is always watching for changes to the data.
    //When changes occurs it will print them to console and html
    database.ref().on("value", function(snapshot) {

        //Print the initial data to the console.
        console.log(snapshot.val());

        //Log the value of the various properties
        console.log("playerName1: " + snapshot.val().playerName1);
        console.log("playerName2: " + snapshot.val().playerName2);
        console.log("playerChoiceword1: " + snapshot.val().playerChoiceword1);
        console.log("playerChoiceword2: " + snapshot.val().playerChoiceword2);
        console.log("playerScore1: " + snapshot.val().playerScore1);
        console.log("playererScore2: " + snapshot.val().playerScore2);
        console.log("tieScore: " + snapshot.val().tieScore);

      // If any errors are experienced, log them to console.
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });



    //Prints the names that the players used for themselves.
    document.getElementById("human_name").innerHTML = playerName1;
    document.getElementById("computer_name").innerHTML = playerName2;




    var turn1finished = false;
    var turn2finished = false;

    if (playerChoiceword1 == "")
    {
        playerTurn1();
        console.log("1")
    }
    if (playerChoiceword1 == "rock")
    {
        playerTurn2();
        console.log("2")
    }
    else
    {
        console.log("3");
    }


    function playerTurn1() {
        //OnClick event responds to player1's click/touch on buttons and saves the choice in memory.
        $(".btn-rock").on("click", function () {
            playerChoiceword1 = "rock";
            player1Rock();
            
            


            //Referencing the Firebase database.
            database.ref().set({
                playerName1: playerName1,
                playerName2: playerName2,
                playerChoiceword1: playerChoiceword1,
                playerChoiceword2: playerChoiceword2,
                playerScore1: playerScore2,
                playerScore2: playerScore2,
                tieScore: tieScore,
            });
        });


        //OnClick event responds to player1's click/touch on buttons and saves the choice in memory.
        $(".btn-paper").on("click", function () {
            playerChoiceword1 = "paper";
            player1Paper();

            //Referencing the Firebase database.
            database.ref().set({
                playerName1: playerName1,
                playerName2: playerName2,
                playerChoiceword1: playerChoiceword1,
                playerChoiceword2: playerChoiceword2,
                playerScore1: playerScore2,
                playerScore2: playerScore2,
                tieScore: tieScore,
            });
        });


        
        //OnClick event responds to player1's click/touch on buttons and saves the choice in memory.
        $(".btn-scissors").on("click", function () {
            playerChoiceword1 = "scissors";
            player1Scissors();

            //Referencing the Firebase database.
            database.ref().set({
                playerName1: playerName1,
                playerName2: playerName2,
                playerChoiceword1: playerChoiceword1,
                playerChoiceword2: playerChoiceword2,
                playerScore1: playerScore2,
                playerScore2: playerScore2,
                tieScore: tieScore,
            });
        });
    }




    function playerTurn2() {

        //OnClick event responds to player2's click/touch on buttons and saves the choice in memory.
        $(".btn-rock").on("click", function () {
            playerChoiceword2 = "rock";
            player2Rock();
          
            //Referencing the Firebase database.
            database.ref().set({
                playerName1: playerName1,
                playerName2: playerName2,
                playerChoiceword1: playerChoiceword1,
                playerChoiceword2: playerChoiceword2,
                playerScore1: playerScore2,
                playerScore2: playerScore2,
                tieScore: tieScore,
            });
        });


        //OnClick event responds to player2's click/touch on buttons and saves the choice in memory.
        $(".btn-paper").on("click", function () {
            playerChoiceword2 = "paper";
            player2Paper();

            //Referencing the Firebase database.
            database.ref().set({
                playerName1: playerName1,
                playerName2: playerName2,
                playerChoiceword1: playerChoiceword1,
                playerChoiceword2: playerChoiceword2,
                playerScore1: playerScore2,
                playerScore2: playerScore2,
                tieScore: tieScore,
            });
        });


    
        //OnClick event responds to player2's click/touch on buttons and saves the choice in memory.
        $(".btn-scissors").on("click", function () {
            playerChoiceword2 = "scissors";
            player2Scissors();

            //Referencing the Firebase database.
            database.ref().set({
                playerName1: playerName1,
                playerName2: playerName2,
                playerChoiceword1: playerChoiceword1,
                playerChoiceword2: playerChoiceword2,
                playerScore1: playerScore2,
                playerScore2: playerScore2,
                tieScore: tieScore,
            });
        });
   
    }

    //Function for when player1 selects "ROCK".
    function player1Rock() {

        playerChoiceword1 = "rock";

        if (playerChoiceword1 == "rock" & playerChoiceword2 == "scissors")
        {
            //Function for a player1 win result.
            player1Wins();
            resultWin();
        }
        else if (playerChoiceword1 == "rock" & playerChoiceword2 == "paper")
        {
            //Function for a player2 win result.
            player2Wins();
            resultLose();
        }
        else if (playerChoiceword1 == "rock" & playerChoiceword2 == "rock")
        {
            //Function for a player1 tie result.
            tie();
            resultTied();
        }
    }

    //Function for when player1 selects "PAPER".
    function player1Paper() {

        playerChoiceword1 = "paper";

        if (playerChoiceword1 == "paper" & playerChoiceword2 == "rock")
        {
            //Function for a player1 win result.
            player1Wins();
            resultWin();
        }
        else if (playerChoiceword1 == "paper" & playerChoiceword2 == "scissors")
        {
            //Function for a player2 win result.
            player2Wins();
            resultLose();
        }
        else if (playerChoiceword1 == "paper" & playerChoiceword2 == "paper")
        {
            //Function for a player1 tie result.
            tie();
            resultTied();
        }
    }

    //Function for when player1 selects "SCISSORS".
    function player1Scissors() {

        playerChoiceword1 = "scissors";

        if (playerChoiceword1 == "scissors" & playerChoiceword2 == "paper")
        {
            //Function for a player1 win result.
            player1Wins();
            resultWin();
        }
        else if (playerChoiceword1 == "scissors" & playerChoiceword2 == "rock")
        {
            //Function for a player2 win result.
            player2Wins();
            resultLose();
        }
        else if (playerChoiceword1 == "scissors" & playerChoiceword2 == "scissors")
        {
            //Function for a player1 tie result.
            tie();
            resultTied();
        }
    }
  






    //Function for when player2 selects "ROCK".
    function player2Rock() {

        playerChoiceword2 = "rock";

        if (playerChoiceword2 == "rock" & playerChoiceword1 == "scissors")
        {
            //Function for a player2 win result.
            player2Wins();
            resultWin();
        }
        else if (playerChoiceword2 == "rock" & playerChoiceword1 == "paper")
        {
            //Function for a player2 lose result.
            player1Wins();
            resultLose();
        }
        else if (playerChoiceword2 == "rock" & playerChoiceword1 == "rock")
        {
            //Function for a player2 tie result.
            tie();
            resultTied();
        }
    }

    //Function for when player2 selects "PAPER".
    function player2Paper() {

        playerChoiceword2 = "paper";

        if (playerChoiceword2 == "paper" & playerChoiceword1 == "rock")
        {
            //Function for a player2 win result.
            player2Wins();
            resultWin();
        }
        else if (playerChoiceword2 == "paper" & playerChoiceword1 == "scissors")
        {
            //Function for a player2 lose result.
            player1Wins();
            resultLose();
        }
        else if (playerChoiceword2 == "paper" & playerChoiceword1 == "paper")
        {
            //Function for a player2 tie result.
            tie();
            resultTied();
        }
    }

//Function for when player2 selects "SCISSORS".
function player2Scissors() {

    playerChoiceword2 = "scissors";

    if (playerChoiceword2 == "scissors" & playerChoiceword1 == "paper")
    {
        //Function for a player2 win result.
        player2Wins();
        resultWin();
    }
    else if (playerChoiceword2 == "scissors" & playerChoiceword1 == "rock")
    {
        //Function for a player2 lose result.
        player1Wins();
        resultLose();
    }
    else if (playerChoiceword2 == "scissors" & playerChoiceword1 == "scissors")
    {
        //Function for a player2 tie result.
        tie();
        resultTied();
    }
}





    //Functions for win, lose, tie alert.
    function tie() {
        alert("Player 1 choose: " + playerChoiceword1 + "\nPlayer 2 choose: " + playerChoiceword2 + "\nYou TIED!")
    }

    function player1Wins() {
        alert("Player 1 choose: " + playerChoiceword1 + "\nPlayer 2 choose: " + playerChoiceword2 + "\nPlayer 1 WIN!")
    }

    function player2Wins() {
        alert("Player 2 chose: " + playerChoiceword1 + "\nPlayer 2 choose: " + playerChoiceword2 + "\nPlayer 2 WINS!")
    }



    //Functions for keeping score.
    function resultTied() {
        tieScore++;
        document.getElementById("ties_score").innerHTML = tieScore;
    }

    function resultWin() {
        playerScore1++;
        document.getElementById("human_score").innerHTML = playerScore1;
    }

    function resultLose() {
        playerScore2++;
        document.getElementById("computer_score").innerHTML = playerScore2;
    }

});