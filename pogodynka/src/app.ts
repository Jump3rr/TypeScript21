export class App {
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';

    constructor() {
        let btn = (<HTMLButtonElement>document.querySelector('#searchCityBtn'));
        btn.addEventListener('click', () => {
            let city = (<HTMLInputElement>document.querySelector('#cityName'));
            if(city) {
            this.getCityInfo(city.value);
            }
        });
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        const el = document.getElementById('con');
        el.innerHTML=weatherData.main.temp;
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}