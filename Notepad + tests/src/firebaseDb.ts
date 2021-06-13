import firebase from 'firebase';
import {firebaseConfig} from './config';
import { Db } from './db';
import {INotes} from './INotes';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fbdb = firebaseApp.firestore();

export class FirebaseDb {
    notesArr: INotes[];

    constructor() {
        this.notesArr = this.getData();
    }

    async saveData(note: any) {
        //const res = await fbdb.collection('notes').add(note[note.length-1]);
        const ress = await fbdb.collection('notes').doc(String(note[note.length-1].id)).set({
            title: note[note.length-1].title,
            content: note[note.length-1].content,
            color: note[note.length-1].color,
            pinned: note[note.length-1].pinned,
            createDate: note[note.length-1].createDate,
            id: String(note[note.length-1].id)
        })
    }

    async deleteNote(id:number) {
        const res = await fbdb.collection('notes').doc(String(id)).delete();
    }
    
    // async updateDataFromFb(id: string, note: any) {
    //     const res = await fbdb.collection('notes').doc(id).update(note);
    // }

    async getDataFromFb(id: string) {
        const res = await fbdb.collection('notes').doc(id).get().then( res => console.log(res.data()));
    }
    getData() {
        const newNotesArr: INotes[] = [];
        fbdb.collection('notes').get().then((res) => {
            res.forEach((note) => {
                const newNote: INotes = note.data() as INotes;
                newNote.createDate = note.data().createDate;
                newNotesArr.push(newNote);
            })
        })
        return newNotesArr;
    }
}