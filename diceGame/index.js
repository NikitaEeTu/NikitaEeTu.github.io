let imgArr = [];
imgArr[1] = 'dice1.png';
imgArr[2] = 'dice2.png';
imgArr[3] = 'dice3.png';
imgArr[4] = 'dice4.png';
imgArr[5] = 'dice5.png';
imgArr[6] = 'dice6.png';

let randomNum1 = 0;
let randomNum2 = 0;

function changeImg(){
    randomNum1 = Math.floor((Math.random()*6)+1);
    let randomImg1 = imgArr[randomNum1];
    let imgChoice = document.querySelectorAll("img");
    imgChoice[0].setAttribute("src","./img/" + randomImg1);
    randomNum2 = Math.floor((Math.random()*6)+1);
    randomImg2 = imgArr[randomNum2];
    imgChoice[1].setAttribute("src","./img/" + randomImg2);
    if(randomNum1 > randomNum2){
        document.querySelector('h1').innerHTML = "🚩Player 1 won!";
    }
    else if(randomNum2 > randomNum1){
        document.querySelector('h1').innerHTML = "Player 2 won!🚩";
    }
    else {
        document.querySelector('h1').innerHTML = "🚩Draw🚩";
    }
}

function changeText() {
    if(randomNum1 > randomNum2){
        document.querySelector('h1').innerHTML = "🚩Player 1 won!";
    }
    else if(randomNum2 > randomNum1){
        document.querySelector('h1').innerHTML = "Player 2 won!🚩";
    }
    else {
        document.querySelector('h1').innerHTML = "🚩Draw🚩"
    }
}
