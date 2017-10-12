var wins = 0;
var losses = 0;


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


    // wins = 0;
    // $('#wins').html('Wins: ' + wins);

    // losses = 0;
    // $('#losses').html('Losses: ' + losses);

    //totalScore = 0;
    //$('.total').html(totalScore);

    $(function startGame() {
        $.resetGame();
    });

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

    $.calculateWinsLosses = function () {
        if (totalScore === randomGameNumberFromRange) {
            wins++;
            $('#wins').html("Wins: " + wins);
            $.resetGame();
        }
        else if (totalScore > randomGameNumberFromRange) {
            losses++;
            $('#losses').html("Losses: " + losses);
            $.resetGame();
        }
    }

    $.resetGame = function () {
        totalScore = 0;
        $('.total').html(totalScore);
        $.getRandomGameNumberFromRange();
        $.getCrystalOneNumber();
        $.getCrystalTwoNumber();
        $.getCrystalThreeNumber();
        $.getCrystalFourNumber();
    }

    $.getRandomGameNumberFromRange = function () {
        randomGameNumberFromRange = Math.floor(Math.random() * (maxGameNumber - minGameNumber + 1) + minGameNumber);
        $('.gameNumber').html(randomGameNumberFromRange);
        console.log(randomGameNumberFromRange);
    }

    $.getCrystalOneNumber = function () {
        crystalOne = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
        console.log(crystalOne);
    }

    $.getCrystalTwoNumber = function () {
        crystalTwo = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
        console.log(crystalTwo);
    }

    $.getCrystalThreeNumber = function () {
        crystalThree = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
        console.log(crystalThree);
    }

    $.getCrystalFourNumber = function () {
        crystalFour = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
        console.log(crystalFour);
    }

});

