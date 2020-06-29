const allSquares = document.querySelectorAll(".square");
const frog = document.querySelectorAll(".frog");
const reusltText = document.querySelector("h1");
const button = document.querySelectorAll("button");
const timeBox = document.querySelector(".time");
let diffuculty = 500;
let result = 0;
let state = false;
let target = "1";
let time = 60;
function randomSquare(){
allSquares.forEach(className => {
    className.classList.remove("frog");    
});
let randomNum = Math.floor(Math.random()*9);
allSquares[randomNum].classList.add("frog");
target = allSquares[randomNum].id;
}
allSquares.forEach(elemnt =>{
    elemnt.addEventListener("click", () => {
        if(elemnt.id === target){
            result++;
            reusltText.innerText = result;
        }
    })
})
button[0].addEventListener("click",function(){
    diffuculty = 100;
})
button[1].addEventListener("click",function(){
    diffuculty = 300;
})
button[2].addEventListener("click",function(){
    diffuculty = 500;
})
button[3].addEventListener("click",function(){
    moveFrog();
    timeDown();
    let timer = setInterval(timeDown, 1000);
    function timeDown(){
        time--;
        timeBox.innerText = time; 
        if(time == 0){
            clearInterval(timer);
            alert("Your time is up!"+"Your score is "+result+" 🏆");
        }
  
}
})
function moveFrog(){
    setInterval(randomSquare,diffuculty);
}
