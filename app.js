// Divs

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// Sounds

const boomSound = document.getElementById("boomSound");
const clapSound = document.getElementById("clapSound");
const hihatSound = document.getElementById("hihatSound");
const kickSound = document.getElementById("kickSound");
const openhatSound = document.getElementById("openhatSound");
const rideSound = document.getElementById("rideSound");
const snareSound = document.getElementById("snareSound");
const tinkSound = document.getElementById("tinkSound");
const tomSound = document.getElementById("tomSound");

// Click events

boom.addEventListener('click', () => {
    boomSound.play();
    boomSound.currentTime = 0;
})
clap.addEventListener('click', () => {
    clapSound.play();
    clapSound.currentTime = 0;
})
hihat.addEventListener('click', () => {
    hihatSound.play();
    hihatSound.currentTime = 0;
})
kick.addEventListener('click', () => {
    kickSound.play();
    kickSound.currentTime = 0;
})
openhat.addEventListener('click', () => {
    openhatSound.play();
    openhatSound.currentTime = 0;
})
ride.addEventListener('click', () => {
    rideSound.play();
    rideSound.currentTime = 0;
})
snare.addEventListener('click', () => {
    snareSound.play();
    snareSound.currentTime = 0;
})
tink.addEventListener('click', () => {
    tinkSound.play();
    tinkSound.currentTime = 0;
})
tom.addEventListener('click', () => {
    tomSound.play();
    tomSound.currentTime = 0;
})

document.addEventListener('keydown', (x) => {
    console.log(x);
    if(x.key == "1"){
        boomSound.play();
        // setTimeout(() => {boomSound.pause();boomSound.currentTime = 0;},500);
        boomSound.currentTime = 0;
    }
    else if(x.key == "2"){
        clapSound.play()
        clapSound.currentTime = 0;
    }
    else if(x.key == "3"){
        hihatSound.play()
        hihatSound.currentTime = 0;
    }
    else if(x.key == "4"){
        kickSound.play()
        kickSound.currentTime = 0;
    }
    else if(x.key == "5"){
        openhatSound.play()
        openhatSound.currentTime = 0;
    }
    else if(x.key == "6"){
        rideSound.play()
        rideSound.currentTime = 0;
    }
    else if(x.key == "7"){
        snareSound.play()
        snareSound.currentTime = 0;
    }
    else if(x.key == "8"){
        tinkSound.play()
        tinkSound.currentTime = 0;
    }
    else if(x.key == "9"){
        tomSound.play()
        tomSound.currentTime = 0;
    }
})