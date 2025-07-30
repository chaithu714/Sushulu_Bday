// Function to start countdown and handle the audio
function startCountdown() {
    const countdownDate = new Date("July 30, 2025 23:15:00").getTime();
    const timerElement = document.getElementById("timer");
    const loveNote = document.getElementById("love-note");

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "It's Your Day Gal! 🎉";
            loveNote.classList.remove("blurred");
            playMusic();
            startConfettiAndSymbols(); // Call the function to start confetti and symbols
        }
    }, 1000);
}

// Function to handle audio playback
function playMusic() {
    const audio = document.getElementById("birthday-audio");
    audio.play().catch((error) => {
        console.error("Error playing audio: ", error);
        alert("Sorry, there was an issue with the audio playback. Please check your browser settings.");
    });
}

// Function to generate confetti and birthday symbols
function startConfettiAndSymbols() {
    // Create the container for the animation on the right
    const rightSideContainer = document.createElement("div");
    rightSideContainer.classList.add("right-side-animation");
    document.body.appendChild(rightSideContainer);

    // Generate confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("birthday-confetti");
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        rightSideContainer.appendChild(confetti);
    }

    // Add floating birthday symbols (e.g., balloons, gifts)
    const symbols = ["🎈", "🎁", "🎂", "🎉"];
    for (let i = 0; i < 5; i++) {
        const symbol = document.createElement("div");
        symbol.classList.add("birthday-symbols");
        symbol.textContent = symbols[i % symbols.length];
        symbol.style.top = `${Math.random() * 80 + 10}%`;
        symbol.style.animationDuration = `${Math.random() * 3 + 3}s`;
        rightSideContainer.appendChild(symbol);
    }
}

window.onload = function() {
    startCountdown();
};
