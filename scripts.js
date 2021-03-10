// Write your JavaScript code here.
window.addEventListener("load", function(){
    init();
})
// Remember to pay attention to page loading!
function init() {
    let flightStatus = document.getElementById("flightStatus");
    let takeoff = document.getElementById("takeoff");
    let background = document.getElementById("shuttleBackground")
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeight = 0;
    takeoff.addEventListener("click", function(event){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            flightStatus.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            shuttleHeight += 10000;
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }    
        
    })
    let land = document.getElementById("landing");
    land.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight = 0;
        spaceShuttleHeight.innerHTML = shuttleHeight;
    })
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(event){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response){
            flightStatus.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            shuttleHeight = 0;
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    })
    let rocket = document.getElementById("rocket");
    let up = document.getElementById("up")
    up.addEventListener("click", function(event){
        rocket.style.top = "100px";
        flightStatus.innerHTML = "trying to move"
    })

}
