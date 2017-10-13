$(document).ready(function() {

    var randomGameNumberFromRange;

    var minGameNumber = 19;

    var maxGameNumber = 120;

    var crystalOne;

    var crystalTwo;

    var crystalThree;

    var crystalFour;

    var minCrystalNumber = 1;

    var maxCrystalNumber = 12;

    var totalScore;

    var wins = 0;

    var losses = 0;

    
    // This function expression will run once to start the game.
    $(function startGame() {
        $.resetGame();
    });

    // Click events for the crystals
    $('#blueCrystal').click(function () {
        totalScore = totalScore + crystalOne;
        $('.total').html(totalScore);
        $.calculateWinsLosses();
    });

    $('#greenCrystal').click(function () {
        totalScore = totalScore + crystalTwo;
        $('.total').html(totalScore);
        $.calculateWinsLosses();
    });

    $('#purpleCrystal').click(function () {
        totalScore = totalScore + crystalThree;
        $('.total').html(totalScore);
        $.calculateWinsLosses();
    });

    $('#redCrystal').click(function () {
        totalScore = totalScore + crystalFour;
        $('.total').html(totalScore);
        $.calculateWinsLosses();
    });

   

  
    // Determine wins and losses
    // function calculateWinsLosses()
    // Should I just be using regular function declarations like the commented one above?
    $.calculateWinsLosses = function () {
        if (totalScore === randomGameNumberFromRange) {
            wins++;
            $('#wins').html("Wins: " + wins);
            // function alertWin() {
            //     var youWon = $("<p>");
            //       youWon.text("You won!");
            //       $(".scoreBox").append(youWon);
            // }
            // setTimeout(alertWin, 1000);
            (function (el) {
                setTimeout(function () {
                    el.children().remove("span");
                }, 2000);
            }($(".scoreBox").append("<span id='alert'>You won!</span>")));
            $.resetGame();
        }
        else if (totalScore > randomGameNumberFromRange) {
            losses++;
            $('#losses').html("Losses: " + losses);
            // var youLost = $("<p>");
            // youLost.text("You lost!");
            // $(".scoreBox").append(youLost);
            (function (el) {
                setTimeout(function () {
                    el.children().remove("span");
                }, 2000);
            }($(".scoreBox").append("<span id='alert'>You lost!</span>")));
            $.resetGame();
        }
    }

    // Refreshes the game with new random numbers
    $.resetGame = function () {
        
        totalScore = 0;
        $('.total').html(totalScore);
        $.getRandomGameNumberFromRange();
        $.getCrystalOneNumber();
        $.getCrystalTwoNumber();
        $.getCrystalThreeNumber();
        $.getCrystalFourNumber();
    }

    // Random number functions
    $.getRandomGameNumberFromRange = function () {
        randomGameNumberFromRange = Math.floor(Math.random() * (maxGameNumber - minGameNumber + 1) + minGameNumber);
        $('.gameNumber').html(randomGameNumberFromRange);
    }

    $.getCrystalOneNumber = function () {
        crystalOne = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
    }

    $.getCrystalTwoNumber = function () {
        crystalTwo = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
    }

    $.getCrystalThreeNumber = function () {
        crystalThree = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
    }

    $.getCrystalFourNumber = function () {
        crystalFour = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
    }

});

