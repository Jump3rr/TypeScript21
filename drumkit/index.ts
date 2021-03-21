let boomSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let channel1: any[] = [];

appStart();

function appStart(): void {
    document.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
}
function onChannel1Play(): void {
    channel1.forEach(sound => {
        setTimeout( () => playSound(sound.key), sound.time)
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
function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({key, time});
    playSound(key)
    console.log(ev);
}

function playSound(key: string): void {
    switch(key) {
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
