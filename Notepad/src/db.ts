export class Db {
    
    notesArr: string[];

    constructor() {
        this.notesArr = [];
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');   
        if (data) {
            this.notesArr.push(data);
            return JSON.parse(data);
        } else {
            return {};
        }
    }
    renderFromLS() {
        const data = JSON.parse(localStorage.getItem('weatherData'));

        if(data) {
            const abc = data.map( (el: string) => {
                this.notesArr.push(el);
            })
                
        }
    }
}