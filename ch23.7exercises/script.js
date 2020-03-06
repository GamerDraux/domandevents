let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");
}

window.onload = init();
    // Put your code for the exercises here.
function takeOff () {
    document.querySelector('p').innerHTML=("Houston, we have lift off!");
}

function buttonChange(){
    document.getElementById('abortMission').style.backgroundColor= "red";
}

function buttonChange2(){
    document.getElementById('abortMission').style.backgroundColor="white";
}



 button.addEventListener('click', takeOff);

missionAbort.addEventListener('mouseover', buttonChange);
missionAbort.addEventListener('mouseout',buttonChange2);
missionAbort.addEventListener('click', function(){
    confirm('Are you sure you want to abort the mission?');
});