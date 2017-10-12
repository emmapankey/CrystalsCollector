$(document).ready(function() {

    $(function myFunction() {

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

    // wins = 0;
    // $('#wins').html('Wins: ' + wins);

    // losses = 0;
    // $('#losses').html('Losses: ' + losses);

    totalScore = 0;
    $('.total').html(totalScore);


        $(function getRandomGameNumberFromRange() {
            randomGameNumberFromRange = Math.floor(Math.random() * (maxGameNumber - minGameNumber + 1) + minGameNumber);
            $('.gameNumber').html(randomGameNumberFromRange);
            console.log(randomGameNumberFromRange);
        });

        $(function getCrystalOneNumber() {
            crystalOne = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
            console.log(crystalOne);
        });

        $(function getCrystalTwoNumber() {
            crystalTwo = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
            console.log(crystalTwo);
        });

        $(function getCrystalThreeNumber() {
            crystalThree = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
            console.log(crystalThree);
        });

        $(function getCrystalFourNumber() {
            crystalFour = Math.floor(Math.random() * (maxCrystalNumber - minCrystalNumber + 1) + minCrystalNumber);
            console.log(crystalFour);
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
                myFunction();
                // $("#blueCrystal").off();
                // $("#greenCrystal").off();
                // $("#purpleCrystal").off();
                // $("#redCrsytal").off();
            }
            else if (totalScore > randomGameNumberFromRange) {
                losses++;
                $('#losses').html("Losses: " + losses);
                myFunction();
                // $("#blueCrystal").off();
                // $("#greenCrystal").off();
                // $("#purpleCrystal").off();
                // $("#redCrsytal").off();
            }
        }

    });

});

