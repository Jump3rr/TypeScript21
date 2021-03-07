class StatsApp {
    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;
    numberOfInputs: number;
    numberOfInputsInput: HTMLInputElement;
    inputsArray: HTMLInputElement[];
    inputData: HTMLDivElement;
    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor() {
        this.startApp();
    }

    startApp() {
        this.getNumberOfInputs();
    }
    
    getNumberOfInputs() {
        this.numberOfInputsInput = document.querySelector('#numberOfInputs');
        this.numberOfInputsInput.addEventListener('input', () => this.getNumber());
    }

    getNumber() {
        this.inputData = document.querySelector('#input-data');
        this.inputsArray = [];
        this.inputData.innerHTML = '';
        this.numberOfInputs = +this.numberOfInputsInput.value;
        this.createInputs(this.numberOfInputs);
    }

    createInputs(inputsNumber: number) {
        for(let i = 0; i<inputsNumber; i++) {
            this.inputsArray[i] = document.createElement('input');
            this.inputsArray[i].setAttribute('type', 'text');
            this.inputsArray[i].id = `data${i+1}`;
            this.inputData.appendChild(this.inputsArray[i]);
        }
        this.getInputs();
        this.watchInputValues();
    }
    getInputs() {
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    watchInputValues() {
        for(let i=0; i<this.inputsArray.length;i++) {
            this.inputsArray[i].addEventListener('input', ()=>this.computeData());
        }
    }
    computeData() {
        let numbersArray = new Array();

        for(let i=0; i<this.inputsArray.length; i++) {
            numbersArray[i] = +this.inputsArray[i].value;
        }

        const sum = numbersArray.reduce(function(a, b){return a+b},0);
        const avg = sum / this.inputsArray.length;
        const min = Math.min(...numbersArray); 
        const max = Math.max(...numbersArray);

        this.showStats(sum, avg, min, max);
    }
    showStats(sum: number, avg: number, min: number, max: number) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const statsApp = new StatsApp();