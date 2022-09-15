let playPause = document.getElementById("playPause");
let audio = document.getElementById("audio");
let img = document.querySelector("img");
let displayName = document.getElementById("paragraph");
let path = "musicAndImages/";
let index = 0;

let musicName = [
    "Arcade",
    "Enemy",
    "Infinity",
    "let Me Down Slowly",
    "Pasoori"
];

let imageName = [
    "image1.png",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

audio.src = path + musicName[0] + ".mp3";

let button1 = document.getElementById("rewind");
button1.addEventListener("click", () => {
    if (index != 0) {
        index--;
        audio.src = path + musicName[index] + ".mp3";
        img.src = path + imageName[index];
    }
    displayName.innerText = musicName[index];
    img.classList.add("rotate");
    audio.play();
});

let button2 = document.getElementById("forward");
button2.addEventListener("click", () => {

    if (index == 5) {
        index = 0;
        audio.src = path + musicName[index] + ".mp3";
        img.src = path + imageName[index];
    } else {
        index++;
        audio.src = path + musicName[index] + ".mp3";
        img.src = path + imageName[index];
    }

    displayName.innerText = musicName[index];
    img.classList.add("rotate");
    audio.play();
});

playPause.addEventListener("click", () => {
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
});
