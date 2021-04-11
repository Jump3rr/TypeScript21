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
var channel2 = [];
var channel3 = [];
var channel4 = [];
var recordStartTime1;
var recordStartTime2;
var recordStartTime3;
var recordStartTime4;
var btnPlay1;
var btnPlay2;
var btnPlay3;
var btnPlay4;
var btnRec1;
var btnRec2;
var btnRec3;
var btnRec4;
var channel1recording = false;
var channel2recording = false;
var channel3recording = false;
var channel4recording = false;
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyDown);
    getAudioElements();
    getButtons();
    addEvents();
}
function getButtons() {
    btnPlay1 = document.querySelector('#Play1');
    btnPlay2 = document.querySelector('#Play2');
    btnPlay3 = document.querySelector('#Play3');
    btnPlay4 = document.querySelector('#Play4');
    btnRec1 = document.querySelector('#Record1');
    btnRec2 = document.querySelector('#Record2');
    btnRec3 = document.querySelector('#Record3');
    btnRec4 = document.querySelector('#Record4');
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
function addEvents() {
    btnPlay1.addEventListener('click', onChannel1Play);
    btnPlay2.addEventListener('click', onChannel2Play);
    btnPlay3.addEventListener('click', onChannel3Play);
    btnPlay4.addEventListener('click', onChannel4Play);
    btnRec1.addEventListener('click', rec1TrueFalseChange);
    btnRec2.addEventListener('click', rec2TrueFalseChange);
    btnRec3.addEventListener('click', rec3TrueFalseChange);
    btnRec4.addEventListener('click', rec4TrueFalseChange);
}
function ifRecClicked(key, time) {
    if (channel1recording == true) {
        channel1.push({ key: key, time: time });
    }
    else if (channel2recording == true) {
        channel2.push({ key: key, time: time });
    }
    else if (channel3recording == true) {
        channel3.push({ key: key, time: time });
    }
    else if (channel4recording == true) {
        channel4.push({ key: key, time: time });
    }
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = Date.now();
    ifRecClicked(key, time);
    playSound(key);
    console.log(ev);
    console.log(Date.now());
}
function rec1TrueFalseChange() {
    channel1recording = !channel1recording;
    if (channel1recording == true) {
        btnRec1.innerHTML = "Stop";
        channel1 = [];
        recordStartTime1 = Date.now();
    }
    else
        btnRec1.innerHTML = "Rec";
}
function rec2TrueFalseChange() {
    channel2recording = !channel2recording;
    if (channel2recording == true) {
        btnRec2.innerHTML = "Stop";
        channel2 = [];
        recordStartTime2 = Date.now();
    }
    else
        btnRec2.innerHTML = "Rec";
}
function rec3TrueFalseChange() {
    channel3recording = !channel3recording;
    if (channel3recording == true) {
        btnRec3.innerHTML = "Stop";
        channel3 = [];
        recordStartTime3 = Date.now();
    }
    else
        btnRec3.innerHTML = "Rec";
}
function rec4TrueFalseChange() {
    channel4recording = !channel4recording;
    if (channel4recording == true) {
        btnRec4.innerHTML = "Stop";
        channel4 = [];
        recordStartTime4 = Date.now();
    }
    else
        btnRec4.innerHTML = "Rec";
}
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time - recordStartTime1);
    });
}
function onChannel2Play() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time - recordStartTime2);
    });
}
function onChannel3Play() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time - recordStartTime3);
    });
}
function onChannel4Play() {
    channel4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time - recordStartTime4);
    });
}
function playSound(key) {
    switch (key) {
        case 'a':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'd':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'f':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'g':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'h':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'j':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'k':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'l':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        default:
            break;
    }
}
