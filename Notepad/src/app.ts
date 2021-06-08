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
        for(let i=0; i<this.db.notesArr.length; i++) {
            this.notes.addNote(this.db.notesArr[i]);
        }

        btn.addEventListener('click', () => {
            this.addNote();
        });
    }
    addNote() {
        const note = new Note;
        const newNote = note.createNewNote();
        this.notes.addNote(newNote);
        this.db.notesArr.push(newNote);
        this.db.saveData(this.db.notesArr);
    }
}