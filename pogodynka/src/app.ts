import {Db} from './db';
import {Notes} from './notes';

export class App {
    opwApiKey = 'f5882d2baf0219f483a0ad679b3c47af';
    db = new Db();
    notes = new Notes();

    constructor() {
        let btn = (<HTMLButtonElement>document.querySelector('#searchCityBtn'));
        this.db.renderFromLS();

        if(this.db.notesArr.length>0) {
            this.db.notesArr.map(city => {
                this.renderWeather(city);
            })
        }

        btn.addEventListener('click', () => {
            let city = (<HTMLInputElement>document.querySelector('#cityName'));
            if(city) {
            this.getCityInfo(city.value);
            }
        });
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        this.db.notesArr.push(city);
        this.db.saveData(this.db.notesArr);
        this.notes.renderNotes(weatherData);
        return weatherData;
    }

    async renderWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        this.notes.renderNotes(weatherData);
        return weatherData;
    }
}