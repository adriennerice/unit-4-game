
var win = 0;
var loss = 0;
var answer;
var gameOn = false;
var numGuess = 0;
var randomValues = [];

// Jumbotron Messages
var messageStart = "You will be given a random number at the start of the game. There are four turtles below and by clicking on a turtle you will add a specific amount of points to your total score. You win the game by matching your total score to a random number, you lose the game if your total score goes above the random number. The value of each turtle is hidden from you until you click it. Each time the game starts, the game will change the values of each turtle. To play press the Start button."
var messageLose = "You lose! To play again press the Start button.";
var messageWin = "You win! To play again press the Start button";
var messageBlank = "";

$("#message").text(messageStart);  

// Function to start the game
function start(){
    answer = 0;
    randomValues =[];
    $("#image").html("");
    numGuess = 0;
    $("#playerTotal").text(numGuess);
    gameOn = true;
    $("#message").text(messageBlank);  
    
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

// Function to process numbers and validate if win or loss game
function check (){
    $(".imageSize").on("click", function() {
        if (gameOn){
             var imageValue = ($(this).attr("imageValue"));
            imageValue = parseInt(imageValue);
            
            numGuess += imageValue;
            console.log(numGuess);
            $("#playerTotal").text(numGuess);

            if (numGuess === answer) {
                win++;
                $("#wins").text(win);
                $("#message").text(messageWin);  
                gameOn = false;   
            }

            else if (numGuess >= answer) {
                loss++;
                $("#loss").text(loss);
                $("#message").text(messageLose);    
                gameOn = false;
            };
        };
    });
};

