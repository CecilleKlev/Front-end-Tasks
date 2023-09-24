//Variable to store ID of the interval timer creat with setInterval
var timerId;
//Select HTML element with the id "content" and store it on variable "c", to manipulate the style of the element
var c = document.getElementById("content");

function startCycle(){ //function that initiates the color-changing cycle 
    var randomInterval = Math.floor(Math.random()* (1800 -1+1))+1; 
    timerId = setInterval(changeColor, randomInterval * 1000); //convert seconds to milliseconds
}

//function that changes the text color stored in "c"
function changeColor(){
    c.style.color= "red";
}

//code starts by starting timer and then change color
startCycle();