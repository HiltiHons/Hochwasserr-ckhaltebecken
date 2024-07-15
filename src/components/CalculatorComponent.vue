<!-- src/components/CalculatorComponent.vue -->

<template>
  <WelcomeItem>
    <template #icon>
      <IconDocumentation/>
    </template>
    <template #heading>Rechner</template>
    <div>
      <div>
        <input v-model.number="area" placeholder="Fläche Tal" type="number"/>
        <select v-model="selectArea">
          <option disabled value="">Maßeinheit</option>
          <option>Km²</option>
          <option>ha</option>
          <option>m²</option>
        </select><br>
        <input v-model.number="precipitation" placeholder="Niederschlag" type="number"/>
        <input v-model.number="amountOfRainGross" placeholder="Regenmenge Brutto" type="number"/>
        <input v-model.number="leaching" placeholder="Versickerung" type="number"/>
        <input v-model.number="amountOfRainNet" placeholder="Regenmenge Netto" type="number"/>
        <input v-model.number="basinArea" placeholder="Grundfläche Becken" type="number"/>
        <input v-model.number="damWallHeight" placeholder="Höhe Damm" type="number"/>
        <input v-model.number="drain" placeholder="Abfluss" type="number"/>
      </div>
      <div>
        <button @click="calculate()">Add</button>
      </div>
      <div v-if="result !== null">
        <h3>Result: {{ result }}</h3>
      </div>
    </div>
  </WelcomeItem>

</template>

<script setup>
import {ref} from 'vue'
import Calculator from '@/Calculator.js'
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";
//Fläche des Tals
const area = ref(null)
//Ausgewählte Einheit m²/ha/Km²
const selectArea = ref(null)
//Niederschlag in mm
const precipitation = ref(null)
//Resultat der Berechnung
const result = ref(null)
//Regenmenge Brutto
const amountOfRainGross = ref(null)
//Versickerung in Prozent
const leaching = ref(null);
//Regenmenge Netto
const amountOfRainNet = ref(null);
//Die Größe des Beckens
const basinArea = ref(null);
//Höhe des Damms
const damWallHeight = ref(null);
//Die Menge die pro Zeiteinheit abfließt
const drain = ref(null);

const calculator = new Calculator()


function calculate()
{
  calculator.setNumbers(area.value, precipitation.value, leaching.value, basinArea.value, drain.value, selectArea.value)

  calculator.calcTotalAmountOfWater()
  result.value = calculator.getResult()
 /* try
  {
    console.log(selectArea.value)
    switch (operation)
    {
      case 'add':
        calculator.add()
        break
      case 'subtract':
    }
    result.value = calculator.getResult()
  } catch (error)
  {
    alert(error.message)
    result.value = null
  }*/
}
</script>


<style scoped>
div {
  margin-bottom: 1rem;
}

input {
  height: 2rem;
  border: none;
  border-radius: 3px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

select {
  margin-left: 5rem;
  position: absolute;
  justify-self: left;
  height: 2rem;
  border: none;
  border-radius: 3px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

button {
  height: 2rem;
  border: none;
  border-radius: 3px;
  margin-right: 0.5rem;
}
</style>
