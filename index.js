let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let guestPoints = 0

let homePoints = 0

function reset() {
    guestPoints = 0
    homePoints = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}


function homeone() {
 homePoints = homePoints + 1
    homeScore.textContent =  homePoints
}

function hometwo() {
    homePoints = homePoints + 2
    homeScore.textContent = homePoints
}

function homethree() {
    homePoints = homePoints + 3
    homeScore.textContent = homePoints
}

function guestone() {
    guestPoints = guestPoints + 1 
    guestScore.textContent = guestPoints
}

function guesttwo() {
    guestPoints = guestPoints + 2
    guestScore.textContent = guestPoints
}

function guestthree() {
    guestPoints = guestPoints + 3
    guestScore.textContent = guestPoints
}