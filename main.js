let playPause = document.getElementById("playPause");
let audio = document.getElementById("audio");
let img = document.querySelector("img");
let displayName = document.getElementById("paragraph");

let imagePath = "./images";
let musicPath = "./music";
let index = 0;

let musicName = [
    "Arcade",
    "Enemy",
    "Infinity",
    "Let Me Down Slowly",
    "Pasoori"
];

let imageName = [
    "image1.png",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

audio.src = musicPath + "/" + musicName[0] + ".mp3";

// Next song changing function
const playNextSong = () => {
    if (index != 0) {
        index--;
        audio.src = `${musicPath}/${musicName[index]}.mp3`;
        img.src = `${imagePath}/${imageName[index]}`;
    }

    displayName.innerText = musicName[index];
    img.classList.add("rotate");
    audio.play();

    if (playPause.classList.contains("bi-play-fill")) {
        playPause.classList.replace("bi-play-fill", "bi-pause-fill");
        playPause.classList.toggle("play");
    }
}

// Previous song changing function
const playPreviousSong = () => {
    if (index == 4) {
        index = 0;
        audio.src = `${musicPath}/${musicName[index]}.mp3`;
        img.src = `${imagePath}/${imageName[index]}`;
    } else {
        index++;
        audio.src = `${musicPath}/${musicName[index]}.mp3`;
        img.src = `${imagePath}/${imageName[index]}`;
    }

    displayName.innerText = musicName[index];
    img.classList.add("rotate");
    audio.play();

    if (playPause.classList.contains("bi-play-fill")) {
        playPause.classList.replace("bi-play-fill", "bi-pause-fill");
        playPause.classList.toggle("play");
    }
}

// Play - Pause function
const playPause_Song = () => {
    if (playPause.classList.contains("play")) {
        playPause.classList.toggle("play");
        playPause.classList.replace("bi-play-fill", "bi-pause-fill");
        img.classList.add("rotate");
        audio.play();
    } else {
        playPause.classList.toggle("play");
        img.classList.remove("rotate");
        playPause.classList.replace("bi-pause-fill", "bi-play-fill");
        audio.pause();
    }

    displayName.innerText = musicName[index];
}

// Keyboard key controls event function
window.addEventListener("keydown", (e) => {

    if (e.key == "ArrowRight")
        playPreviousSong();
    else if (e.key == "ArrowLeft")
        playNextSong();
    else if (e.key == " ")
        playPause_Song()
})

let button1 = document.getElementById("rewind");
button1.addEventListener("click", playNextSong);

let button2 = document.getElementById("forward");
button2.addEventListener("click", playPreviousSong);

playPause.addEventListener("click", playPause_Song);