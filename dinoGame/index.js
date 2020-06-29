let score = 0;
let allScores = [];
let state = true;
let res = document.querySelector(".restart");
document.querySelector(".character").addEventListener("click", function(){
    this.classList.add("characterJumping");
    setTimeout(function(){
        document.querySelector(".character").classList.remove("characterJumping")
    },500)
})
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(document.querySelector(".character")).getPropertyValue("top"));
    let stoneLeft = parseInt(window.getComputedStyle(document.querySelector(".stones")).getPropertyValue("left"));
    document.querySelector("p").innerText = score;
    if(stoneLeft < 10 && stoneLeft > 0 && characterTop>=200){
        alert("You dided");
        state = false;
        document.querySelector(".stones").style.animation = "none";
        allScores.push(score);
        document.querySelector(".resultsBoard").innerText = allScores;
    }
    else{
        if(state == true){
        document.querySelector(".score").innerText = score;
        score++;
        }
    }

},10)
res.addEventListener('click', function(){
    score = 0;
    state = true;
    document.querySelector(".stones").style.animation = "stones 2s infinite linear";
    setInterval();

})

