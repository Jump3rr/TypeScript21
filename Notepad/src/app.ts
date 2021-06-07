import {Db} from './db';
import {Notes} from './notes';
import {Note} from './note';
import { INotes } from './INotes';

export class App {
    db = new Db();
    notes = new Notes();


    constructor() {
        let btn = (<HTMLButtonElement>document.querySelector('#addNoteBtn'));
        this.db.getData();

        btn.addEventListener('click', () => {
            this.addNote();
        });
    }
    addNote() {
        const note = new Note;
        this.notes.addNote(note.createNewNote());
    }
}