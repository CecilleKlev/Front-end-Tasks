var timerId;

var c = document.getElementById("content");

function startCycle(){
    var randomInterval = Math.floor(Math.random()* (1800 -1+1))+1;
    timerId = setInterval(changeColor, randomInterval * 1000); //convert seconds to milliseconds
}

function changeColor(){
    c.style.color= "red";
}

startCycle();