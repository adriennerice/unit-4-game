
var win = 0;
var loss = 0;
var answer;
var gameOn = false;
//var counter = 0;
var numGuess = 0;
var randomValues = [];


function start(){
    answer = 0;
    randomValues =[];
    $("#image").html("");
    numGuess = 0;
    $("#playerTotal").text(numGuess);
    gameOn = true;
    
    if (gameOn){
    answer = Math.floor(Math.random() * 120) + 19; // Generates random number between 12 and 120 
    console.log(answer);
    $("#guessNumber").text(answer);

    //randomValues = [(Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1)];
    for(var i = 0; i < 4; i++) {
        randomValues[i] = (Math.floor(Math.random() * 12) + 1);

        var image = $("<img>");

        image.addClass("imageSize");

        image.attr("src", "assets/images/turtle.jpg");

        image.attr("imageValue", randomValues[i]);

        $("#image").append(image);
    }

    console.log(randomValues);
    check();
}
};

function check (){
    $(document).ready(function(){
    $(".imageSize").on("click", function() {
        if (gameOn){
            var imageValue = ($(this).attr("imageValue"));
            imageValue = parseInt(imageValue);
        
            numGuess += imageValue;
            console.log(numGuess);
            $("#playerTotal").text(numGuess);

            if (numGuess === answer) {
                alert("You win!");
                win++;
                $("#wins").text(win);
            
                gameOn = false;
                //want to continue playing?

                // if (confirm("Want to continue playing?")) {
                //     start();
                // } else {
                //     alert("You pressed Cancel!");
                // }
                
            //   start();
                
            }

            else if (numGuess >= answer) {
                //alert("You lose!!");
                loss++;
                $("#loss").text(loss);
                $("#message").text("You lose!");    
                gameOn = false;
                //want to continue playing?

                // if (confirm("Want to continue playing?")) {
                //     start();
                // } else {
                //     alert("You pressed Cancel!");
                // }
                // start();
            };
        };
    });
});
};
//   start();
//   check();

// instead of crystals use squid or another ocean animal
// if time create multiple images and store them into another array

// random answer #19-120 [DONE]
// 4 random numbers into array #1-12
// display 4 buttons with an image and hidden random value and dynamically create them
// clicked value added to numGuess

// check is numGuess is equal to answer
// if not equal or greater display updated score and allow additional click guesses 
// if equal win++ and restart game
// give user the option of playing again instead of automatically starting a new game
// if greater than answer loss game and start over/restarts loss++
// give user the option of playing again instead of automatically starting a new game

// add win and loss sound
// when start new game set answer and numGuess to zero

// functions start game () and check number ()s