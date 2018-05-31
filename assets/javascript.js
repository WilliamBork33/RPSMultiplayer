$(document).ready(function () {

    //Declaring variables.
    var computerChoicenumber;
    var computerChoiceword;
    var userChoiceword;
    var userName;
    var computerName;
    var tieScore = 0;
    var userScore = 0;
    var computerScore = 0;
    var audioElement;
    var audioPreference;

    //Get both the user and computer's name and push it to the HTML.
    var userName = prompt("Your name?");
    var computerName = prompt("Computer name?");
    
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
    });

    //OnClick event responds to user click/touch on buttons then runs game logic.
    $(".btn-paper").on("click", function () {
        computerSelection()
        userPaper();
    });

    //OnClick event responds to user click/touch on buttons then runs game logic.
    $(".btn-scissors").on("click", function () {
        computerSelection()
        userScissors();
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