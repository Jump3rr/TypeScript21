import {INotes} from './INotes';

export class Db {
    
    notesArr: INotes[];

    constructor() {
        this.notesArr = this.getData();
    }
    saveData(data: any) {
        localStorage.setItem('notes', JSON.stringify(data));
    }
    getData() {
        const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));

        if(notesFromLocalStorage) {
            const convertedNotes = notesFromLocalStorage.map((notes:INotes) => {
                notes.createDate = new Date(notes.createDate).toLocaleString();
                return notes;
            })
            return convertedNotes;
        }
        else return [];
    }
    deleteNote(id: number) {
        this.saveData(this.notesArr.filter(el => el.id !== id))
    }
}