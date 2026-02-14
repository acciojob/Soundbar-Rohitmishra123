//your JS code here. If required.
const sounds = ["clap", "kick", "hihat", "boom"];

const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

// Create buttons dynamically
sounds.forEach(sound => {
    const button = document.createElement("button");
    button.innerText = sound.toUpperCase();
    button.classList.add("btn");

    button.addEventListener("click", () => {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const audio = new Audio(`sounds/${sound}.mp3`);
        currentAudio = audio;
        audio.play();
    });

    buttonsContainer.appendChild(button);
});

// Stop Button
const stopButton = document.createElement("button");
stopButton.innerText = "STOP";
stopButton.classList.add("stop");

stopButton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

buttonsContainer.appendChild(stopButton);
