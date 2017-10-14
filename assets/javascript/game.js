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
        //totalScore = totalScore + crystalOne;
        //$('.total').html(totalScore);
        $.calculateWinsLosses(crystalOne);
    });

    $('#greenCrystal').click(function () {
        //totalScore = totalScore + crystalTwo;
        //$('.total').html(totalScore);
        $.calculateWinsLosses(crystalTwo);
    });

    $('#purpleCrystal').click(function () {
        //totalScore = totalScore + crystalThree;
        //$('.total').html(totalScore);
        $.calculateWinsLosses(crystalThree);
    });

    $('#redCrystal').click(function () {
        //totalScore = totalScore + crystalFour;
        //$('.total').html(totalScore);
        $.calculateWinsLosses(crystalFour);
    });

  
    // Determine wins and losses
    $.calculateWinsLosses = function (crystalValue) {

        totalScore = totalScore + crystalValue;
        $('.total').html(totalScore);

        if (totalScore === randomGameNumberFromRange) {

            wins++;

            $('#wins').html("Wins: " + wins);

            // This next block runs these commands in this order...
            // 1. A span is appended to scorebox.
            // 2. scorebox is passed to the anonymous function as function argument el.
            // 3. The anonymous function removes the span child from el, aka scorebox, after 2 seconds has elapsed.
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

