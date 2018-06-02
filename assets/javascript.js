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
    var userName = "USER";
    var computerName = "COMPUTER";
    var userChoiceword = "";
    var computerChoicenumber = "";
    var computerChoiceword = "";
    var userScore = 0;
    var computerScore = 0;
    var tieScore = 0;
    var audioElement;
    var audioPreference;



    //Get both the user and computer's name and push it to the HTML.
    var userName = "User" + prompt("Your name?");
    var computerName = "Computer" + prompt("Computer name?");



    //Firebase is always watching for changes to the data.
    //When changes occurs it will print them to console and html
    database.ref().on("value", function(snapshot) {

        //Print the initial data to the console.
        console.log(snapshot.val());

        //Log the value of the various properties
        console.log("userName: " + snapshot.val().userName);
        console.log("computerName: " + snapshot.val().computerName);
        console.log("userChoiceword: " + snapshot.val().userChoiceword);
        console.log("computerChoiceword: " + snapshot.val().computerChoiceword);
        console.log("userScore: " + snapshot.val().userScore);
        console.log("computerScore: " + snapshot.val().computerScore);
        console.log("tieScore: " + snapshot.val().tieScore);

      // If any errors are experienced, log them to console.
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });



    //Prints the name that the user used for themselves and the computer.
    document.getElementById("human_name").innerHTML = userName;
    document.getElementById("computer_name").innerHTML = computerName;

    //Function for computer to select random options.
    function computerSelection() {
        computerChoicenumber = Math.floor(Math.random() * 3) + 1;
        computerChoiceword = "";

        if (computerChoicenumber == 1)
            {
                computerChoiceword = "rock";
            }
        else if (computerChoicenumber == 2)
            {
                computerChoiceword = "paper";
            }
        else if (computerChoicenumber == 3)
            {
                computerChoiceword = "scissors";
            }
    }



    //OnClick event responds to user click/touch on buttons then runs game logic.
    $(".btn-rock").on("click", function () {
        computerSelection()
        userRock();

        //Referencing the Firebase database.
        database.ref().set({
            userName: userName,
            computerName: computerName,
            userChoiceword: userChoiceword,
            computerChoiceword: computerChoiceword,
            userScore: userScore,
            computerScore: computerScore,
            tieScore: tieScore,
        });
    });



    //OnClick event responds to user click/touch on buttons then runs game logic.
    $(".btn-paper").on("click", function () {
        computerSelection()
        userPaper();

        //Referencing the Firebase database.
        database.ref().set({
            userName: userName,
            computerName: computerName,
            computerChoiceword: computerChoiceword,
            userScore: userScore,
            computerScore: computerScore,
            tieScore: tieScore,
        });
    });


    
    //OnClick event responds to user click/touch on buttons then runs game logic.
    $(".btn-scissors").on("click", function () {
        computerSelection()
        userScissors();

        //Referencing the Firebase database.
        database.ref().set({
            userName: userName,
            computerName: computerName,
            userChoiceword: userChoiceword,
            computerChoiceword: computerChoiceword,
            userScore: userScore,
            computerScore: computerScore,
            tieScore: tieScore,
        });
    });



    //Function for when user selects "ROCK".
    function userRock() {
        userChoiceword = "rock";
        if (computerChoiceword == "rock")
        {
            //Function for a user tie result.
            tie();
            resultTied();
        }
        else if (computerChoiceword == "scissors")
        {
            //Function for a user win result.
            userWins();
            resultWin();
        }
        else if (computerChoiceword == "paper")
        {
            //Function for a user lose result.
            computerWins();
            resultLose();
        }
    }

    //Function for when user selects "SCISSORS".
    function userScissors() {
        userChoiceword = "scissors";
        if (computerChoiceword == "scissors")
        {
            //Function for a user tie result.
            tie();
            resultTied();
        }
        else if (computerChoiceword == "paper")
        {
            //Function for a user win result.
            userWins();
            resultWin();
        }
        else if (computerChoiceword == "rock")
        {
            //Function for a user lose result.
            computerWins();
            resultLose();
        }
    }

    //Function for when user selects "PAPER".
    function userPaper() {
        userChoiceword = "paper";
        if (computerChoiceword == "paper")
        {
            //Function for a user tie result.
            tie();
            resultTied();
        }
        else if (computerChoiceword == "rock")
        {
            //Function for a user win result.
            userWins();
            resultWin();
        }
        else if (computerChoiceword == "scissors")
        {
            //Function for a user lose result.
            computerWins();
            resultLose();
        }
    }

    //Functions for win, lose, tie alert.
    function tie() {
        alert("You choose: " + userChoiceword + "\nComputer choose: " + computerChoiceword + "\nYou TIED!")
    }

    function userWins() {
        alert("You choose: " + userChoiceword + "\nComputer choose: " + computerChoiceword + "\nYou WIN!")
    }

    function computerWins() {
        alert("You chose: " + userChoiceword + "\nComputer choose: " + computerChoiceword + "\nYou LOSE!")
    }

    //Functions for keeping score.
    function resultTied() {
        tieScore++;
        document.getElementById("ties_score").innerHTML = tieScore;
    }

    function resultWin() {
        userScore++;
        document.getElementById("human_score").innerHTML = userScore;
    }

    function resultLose() {
        computerScore++;
        document.getElementById("computer_score").innerHTML = computerScore;
    }

});