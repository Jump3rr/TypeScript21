import {INotes} from "./INotes";
import {Db} from './db';

export class Notes {

    addNote(note: INotes) {
        const HTMLNote  = document.createElement('div');
        HTMLNote.className="oneNote";

        const HTMLCity = document.createElement('h1');
        const HTMLContent = document.createElement('h4');
        const HTMLDetails = document.createElement('h5');
        const HTMLDeleteButton = document.createElement('button');
        const HTMLBottom = document.createElement('div');
        // const HTMLPinnedCheckbox = document.createElement('input');
        // HTMLPinnedCheckbox.type = "checkbox";
        // HTMLPinnedCheckbox.id = "notePinned";

        HTMLCity.innerHTML = note.title;
        HTMLContent.innerHTML = note.content;
        HTMLNote.style.backgroundColor=note.color;
        HTMLDetails.innerHTML = note.createDate.toLocaleString();
        HTMLDeleteButton.id = String(note.id);
        HTMLDeleteButton.innerHTML = "Remove";
        HTMLDeleteButton.onclick = () => this.removeNote(note);
        HTMLBottom.id = "NoteBottom";
        HTMLBottom.appendChild(HTMLDeleteButton);
        HTMLBottom.appendChild(HTMLDetails);

        HTMLNote.appendChild(HTMLCity);
        HTMLNote.appendChild(HTMLContent);
        // HTMLNote.appendChild(HTMLDeleteButton);
        // HTMLNote.appendChild(HTMLDetails);
        HTMLNote.appendChild(HTMLBottom);
        // HTMLNote.appendChild(HTMLPinnedCheckbox);
        HTMLNote.id = String(note.id);
        let cont: HTMLSelectElement;
        if(note.pinned)
            cont = document.querySelector('#pinnedNotesArea')
        else 
            cont = document.querySelector('#notesArea');

        cont.appendChild(HTMLNote);

    }

    removeNote(note: INotes) {
        let cont: HTMLSelectElement;
        if(note.pinned)
            cont = document.querySelector('#pinnedNotesArea')
        else 
            cont = document.querySelector('#notesArea');
        
        const noteToDelete = document.getElementById(String(note.id));
        cont.removeChild(noteToDelete);
        const db = new Db();
        const newNotesArray = db.notesArr.filter(el => el.id != note.id);
        db.saveData(newNotesArray);
    }
}