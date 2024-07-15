// src/Calculator.js

import { ref } from 'vue'

class Calculator {
    constructor() {
        this.area = ref(0);
        this.selectArea = ref(0);
        this.precipitation = ref(0);
        this.result = ref(0);
        this.amountOfRainGross = ref(0);
        this.leaching = ref(0);
        this.amountOfRainNet = ref(0);
        this.basinArea = ref(0);
        this.damWallHeight = ref(0);
        this.drain = ref(0);
        this.waterAmount = ref(0);
    }
    calcTotalAmountOfWater()
    {
       return  this.result.value = this.area.value;
    }

    setNumbers(area, selectArea, precipitation, leaching, basinArea,drain) {
        this.area = area;
        this.selectArea = selectArea;
        this.precipitation = precipitation;
        this.leaching = leaching;
        this.basinArea = basinArea;
        this.drain = drain;
    }

    getResult() {
        return this.result.value
    }

    add() {
        this.result.value = this.area.value + this.precipitation.value
    }
}

export default Calculator
