import {INotes} from "./INotes";

export class Notes {

    addNote(note: INotes) {
        const HTMLNote  = document.createElement('div');
        HTMLNote.className="oneNote";

        const HTMLCity = document.createElement('h1');
        const HTMLContent = document.createElement('h5');
        const HTMLDetails = document.createElement('h4');

        HTMLCity.innerHTML = note.title;
        HTMLContent.innerHTML = note.content;
        HTMLNote.style.backgroundColor=note.color;

        HTMLNote.appendChild(HTMLCity);
        HTMLNote.appendChild(HTMLContent);
        HTMLNote.appendChild(HTMLDetails);
        let cont: HTMLSelectElement;
        if(note.pinned)
            cont = document.querySelector('#pinnedNotesArea')
        else 
            cont = document.querySelector('#notesArea');

        cont.appendChild(HTMLNote);

    }
    
    renderNotes(note: INotes) {
        const HTMLNote  = document.createElement('div');
        HTMLNote.className="oneNote";

        const HTMLCity = document.createElement('h1');
        const HTMLContent = document.createElement('h5');
        const HTMLDetails = document.createElement('h4');

        HTMLCity.innerHTML = note.title;
        HTMLContent.innerHTML = note.content;
        

        HTMLNote.appendChild(HTMLCity);
        HTMLNote.appendChild(HTMLContent);
        HTMLNote.appendChild(HTMLDetails);

        const cont = document.querySelector('section');
        cont.appendChild(HTMLNote);

    }
}