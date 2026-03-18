function showSection(id) {
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).parentElement.querySelector("button").style.display = "none";
}

function surprise() {
    document.getElementById("surpriseText").classList.remove("hidden");
    createConfetti();
}

function blowCandles() {
    document.getElementById("cake").src = "cake_off.png";
}

function createConfetti() {
    //<script src="https://cdn.jsdelivr.net/npm/@hiseb/confetti@2.1.0/dist/confetti.min.js"></script>
    const isMobile = window.innerWidth < 768;

    // Координаты по ID кнопки 

    const button = document.getElementById("surprise button");
    const coordinates = button.getBoundingClientRect();

    let x = coordinates.x + coordinates.width/2;
    let y = coordinates.y + coordinates.height/2;

    confetti({
        position: { x: x, y: y },	// Origin position
        count: 167,			// Number of particles
        size: 1,			// Size of the particles
        velocity: 200,		// Initial particle velocity
        fade: false			// Particles fall off the screen, or fade out
});
}

// Timer
let birthday = new Date("2026-03-19"); 
let timerEl = document.getElementById("timer");

setInterval(() => {
    let now = new Date();
    let diff = birthday - now;

    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor((diff / (1000*60*60)) % 24);
    let minutes = Math.floor((diff / (1000*60)) % 60);

    if (hours == 0){
        timerEl.innerHTML = ``;
        document.getElementById("timerh2").innerHTML = '';
    }
    else {
        timerEl.innerHTML = `${days} дней ${hours} часов ${minutes} минут`;
    }
}, 1000);

document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('myAudioElement').play();
});
