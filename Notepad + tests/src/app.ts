import {Db} from './db';
//import {FirebaseDb} from './firebaseDb';
import {Notes} from './notes';
import {Note} from './note';
import { INotes } from './INotes';
import database from './dbConfig';

export class App {
    notes = new Notes();

    constructor() {
        let btn = (<HTMLButtonElement>document.querySelector('#addNoteBtn'));


        
        setTimeout(() => {
        for(let i=0; i<database.notesArr.length; i++) {
            let addedNote = this.notes.addNote(database.notesArr[i]);
            this.notes.addToArea(addedNote, database.notesArr[i]);
        }

        btn.addEventListener('click', () => {
            this.addNote();
        });
        }, 500);
    }
    addNote() {
        const note = new Note;
        const newNote = note.createNewNote();
        let addedNote = this.notes.addNote(newNote);
        this.notes.addToArea(addedNote, newNote);
        database.notesArr.push(newNote);
        database.saveData(database.notesArr);
    }
}