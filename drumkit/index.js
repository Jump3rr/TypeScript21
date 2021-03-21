var boomSound;
var clapSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var channel1 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
}
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioElements() {
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(ev);
}
function playSound(key) {
    switch (key) {
        case 'a':
            boomSound.currentTime = 0;
            boomSound.play();
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
        case 'd':
            hihatSound.currentTime = 0;
            hihatSound.play();
        case 'f':
            kickSound.currentTime = 0;
            kickSound.play();
        case 'g':
            openhatSound.currentTime = 0;
            openhatSound.play();
        case 'h':
            rideSound.currentTime = 0;
            rideSound.play();
        case 'j':
            snareSound.currentTime = 0;
            snareSound.play();
        case 'k':
            tinkSound.currentTime = 0;
            tinkSound.play();
        case 'l':
            tomSound.currentTime = 0;
            tomSound.play();
    }
}
