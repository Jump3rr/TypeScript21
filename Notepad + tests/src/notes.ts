import {INotes} from "./INotes";
import {Db} from './db';
import database from './dbConfig';
import { FirebaseDb } from "./firebaseDb";
import { firebaseConfig } from "./config";

export class Notes {

    addNote(note: INotes): HTMLElement {
        const HTMLNote  = document.createElement('div');
        HTMLNote.className="oneNote";

        const HTMLCity = document.createElement('h1');
        const HTMLContent = document.createElement('h4');
        const HTMLDetails = document.createElement('h5');
        const HTMLDeleteButton = document.createElement('button');
        const HTMLBottom = document.createElement('div');

        HTMLCity.innerHTML = note.title;
        HTMLContent.innerHTML = note.content;
        HTMLNote.style.backgroundColor=note.color;
        HTMLDetails.innerHTML = note.createDate;
        HTMLDeleteButton.id = String(note.id);
        HTMLDeleteButton.innerHTML = "Remove";
        HTMLDeleteButton.onclick = () => this.removeNote(note);
        HTMLBottom.id = "NoteBottom";
        HTMLBottom.appendChild(HTMLDeleteButton);
        HTMLBottom.appendChild(HTMLDetails);

        HTMLNote.appendChild(HTMLCity);
        HTMLNote.appendChild(HTMLContent);
        HTMLNote.appendChild(HTMLBottom);

        HTMLNote.id = String(note.id);

        return HTMLNote;
    }
    addToArea(HTMLNote: HTMLElement, note: INotes) {
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


        database.deleteNote(note.id);
    }
}