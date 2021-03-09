var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getNumberOfInputs();
    };
    StatsApp.prototype.getNumberOfInputs = function () {
        var _this = this;
        this.numberOfInputsInput = document.querySelector('#numberOfInputs');
        this.numberOfInputsInput.addEventListener('input', function () { return _this.getNumber(); });
    };
    StatsApp.prototype.getNumber = function () {
        this.inputData = document.querySelector('#input-data');
        this.inputsArray = [];
        this.checkBoxArray = [];
        this.inputData.innerHTML = '';
        this.numberOfInputs = +this.numberOfInputsInput.value;
        this.createInputs(this.numberOfInputs);
    };
    StatsApp.prototype.createInputs = function (inputsNumber) {
        var _this = this;
        for (var i = 0; i < inputsNumber; i++) {
            this.inputsArray[i] = document.createElement('input');
            this.inputsArray[i].setAttribute('type', 'text');
            this.inputsArray[i].id = "data" + (i + 1);
            this.checkBoxArray[i] = document.createElement('input');
            this.checkBoxArray[i].setAttribute('type', 'checkbox');
            this.checkBoxArray[i].id = "checkBox" + (i + 1);
            this.inputData.appendChild(this.inputsArray[i]);
            this.inputData.appendChild(this.checkBoxArray[i]);
        }
        this.deleteButton = document.createElement('button');
        this.deleteButton.innerHTML = "Usuń";
        this.deleteButton.addEventListener('click', function () { return _this.removeInputs(); });
        this.inputData.appendChild(this.deleteButton);
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.removeInputs = function () {
        for (var i = 0; i < this.checkBoxArray.length; i++) {
            var box = this.checkBoxArray[i];
            if (box.checked) {
                this.inputsArray.splice(i, 1);
                this.checkBoxArray.splice(i, 1);
                this.inputData.removeChild(this.inputData.childNodes[i + 1 * i]);
                this.inputData.removeChild(this.inputData.childNodes[i + 1 * i]);
            }
        }
        this.computeData();
    };
    StatsApp.prototype.getInputs = function () {
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        for (var i = 0; i < this.inputsArray.length; i++) {
            this.inputsArray[i].addEventListener('input', function () { return _this.computeData(); });
        }
    };
    StatsApp.prototype.computeData = function () {
        var numbersArray = new Array();
        for (var i = 0; i < this.inputsArray.length; i++) {
            numbersArray[i] = +this.inputsArray[i].value;
        }
        var sum = numbersArray.reduce(function (a, b) { return a + b; }, 0);
        var avg = sum / this.inputsArray.length;
        var min = Math.min.apply(Math, numbersArray);
        var max = Math.max.apply(Math, numbersArray);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
