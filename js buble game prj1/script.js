var timer= 250;
var score = 0;
var hitval = 0; 
function getNewHit(){
    hitvals = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent = hitvals;
 
 }
function makeBubble(){
    var clutter = "";
for(var i=1; i<=176; i++){
    var no = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${no} </div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function (){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1 id="pbtm">Game Over</h1>`
        }
    }, 1000);
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitvals){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});
 
runTimer();
getNewHit()
makeBubble();
