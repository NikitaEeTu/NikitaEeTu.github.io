let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let keyPs = false;
let userClickedPattern = [];
let level = 0;
function nextSequence(){
   randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("."+randomChosenColor).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
    animateBtn(randomChosenColor);
    level += 1;
    $("h1").text("Level " + level);
} 

$("button").click(function (event) { 
    let userChosenColour  = "";
    userChosenColour = event.target.className;
    makeSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animateBtn(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
$(document).keypress(function (event) { 
    if ((!keyPs) && (event.key == 'f')) {
        nextSequence();
        keyPs = true;
    }
});

function animateBtn(key){
    $("." + key).addClass("press");
    setTimeout(function(){
    $("." + key).removeClass("press")}, 200);

}
function makeSound(key){
    switch (key) {
        case "red":
            let classic = new Audio("sound/classic_hurt.mp3");
            classic.play();
            break;
        case "blue":
            let erro = new Audio("sound/erro.mp3");
            erro.play()
            break;
        case "green":
            let metal = new Audio("sound/metalgearsolid.mp3");
            metal.play();
            break;
        case "yellow":
            let skull = new Audio("sound/skullsound2.mp3");
            skull.play();
            break;
        case "wrong":
            let wrong = new Audio("sound/Wrong-answer.mp3");
            wrong.play();
    }
}
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);
        userClickedPattern = [];

      }

    } else {
        makeSound("wrong");
        $("body").css("background-color","#c0392b");
        setTimeout(function(){
        $("body").css("background-color","#34495e")}, 200);
        startAgain();
    }

}
function startAgain() {
    keyPs = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $("h1").text("Press F key to start a game");
}
