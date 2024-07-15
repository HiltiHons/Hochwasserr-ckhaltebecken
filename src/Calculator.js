class Calculator {
    constructor() {
        this.area = 0;
        this.selectArea = '';
        this.precipitation = 0;
        this.result = 0;
        this.amountOfRainGross = 0;
        this.leaching = 0;
        this.amountOfRainNet = 0;
        this.basinArea = 0;
        this.damWallHeight = 0;
        this.drain = 0;
        this.waterAmount = 0;
    }

    calcTotalAmountOfWater() {
        // Beispielberechnung, diese sollte an deine Logik angepasst werden
        this.result = this.area * this.precipitation - this.leaching;
    }

    setNumbers(area, selectArea, precipitation, leaching, basinArea, drain) {
        this.area = area;
        this.selectArea = selectArea;
        this.precipitation = precipitation;
        this.leaching = leaching;
        this.basinArea = basinArea;
        this.drain = drain;
    }

    getResult() {
        return this.result;
    }

    add() {
        this.result = this.area + this.precipitation;
    }
}

export default Calculator;
