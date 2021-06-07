import {INotes} from './INotes';

export class Note {
    createNewNote():INotes {
        const title = (<HTMLInputElement>document.querySelector('#noteTitle')).value;
        const content = (<HTMLInputElement>document.querySelector('#noteContent')).value;
        const newNote:INotes = {
            title: title,
            content: content,
            color: switchColor(),
            pinned: isPinned(),
            createDate: new Date(),
            id: Date.now(),
        };
        return newNote;
    }
}

function switchColor() {
    let inputValue = (<HTMLInputElement>document.getElementById('colourSwitch')).value;
    switch(inputValue) {
        case 'red':
            return '#ff0000';
        case 'green':
            return '#00ff00';
        case 'yellow':
            return '#ffff00';
        case 'blue':
            return '#0000ff';
        case 'orange':
            return '#ffa500';
        case 'pink':
            return '#ed478a';
        default:
            return '#ff0000';
    }
}

function isPinned() {
    let checkbox = (<HTMLInputElement>document.getElementById('notePinned'));
    if(checkbox.checked===true) 
        return true;
    else
        return false;
}