import {INotes} from './INotes';

export class Db {
    
    notesArr: INotes[];

    constructor() {
        this.notesArr = [];
    }
    saveData(data: any) {
        localStorage.setItem('notes', JSON.stringify(data));
    }
    getData() {
        const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));

        if(notesFromLocalStorage) {
            const convertedNotes = notesFromLocalStorage.map((notes:INotes) => {
                notes.createDate = new Date(notes.createDate);
                return notes;
            })
            return convertedNotes;
        }
        else return [];
    }
    // renderFromLS() {
    //     const data = JSON.parse(localStorage.getItem('notes'));

    //     if(data) {
    //         const abc = data.map( (el: string) => {
    //             this.notesArr.push(el);
    //         })
                
    //     }
    // }
}