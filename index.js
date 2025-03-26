// Select scoreboard elements
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

// Initial scores
let homeScore = 0;
let guestScore = 0;

// Function to update score
function updateScoreboard() {
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

// Event listeners for buttons
document.getElementById("home-plus1").addEventListener("click", function() {
    homeScore += 1;
    updateScoreboard();
});

document.getElementById("home-plus2").addEventListener("click", function() {
    homeScore += 2;
    updateScoreboard();
});

document.getElementById("home-plus3").addEventListener("click", function() {
    homeScore += 3;
    updateScoreboard();
});

document.getElementById("guest-plus1").addEventListener("click", function() {
    guestScore += 1;
    updateScoreboard();
});

document.getElementById("guest-plus2").addEventListener("click", function() {
    guestScore += 2;
    updateScoreboard();
});

document.getElementById("guest-plus3").addEventListener("click", function() {
    guestScore += 3;
    updateScoreboard();
});
