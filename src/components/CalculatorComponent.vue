<!-- src/components/CalculatorComponent.vue -->

<template>
  <WelcomeItem>
    <template #icon>
      <IconDocumentation/>
    </template>
    <template #heading>Rechner</template>
    <div>
      <div class="grid">
        <label for="area">Fläche Tal</label><br>
        <input v-model.number="area" placeholder="Fläche Tal" id="area" type="number"/>
        <select v-model="selectArea">
          <option disabled value="">Maßeinheit</option>
          <option value="km2">Km²</option>
          <option value="ha">ha</option>
          <option value="m2">m²</option>
        </select><br>
        <label for="precipitation">Niederschlag (mm)</label><br>
        <input v-model.number="precipitation" id="precipitation" type="number"/><br>
        <label for="leaching">Versickerung in Prozent</label><br>
        <input v-model.number="leaching" id="leaching" placeholder="Versickerung" type="number"/><br>
        <label for="basinArea">Grundfläche Rückhaltebecken (m²)</label><br>
        <input v-model.number="basinArea" id="basinArea" placeholder="Grundfläche Becken" type="number"/><br>
        <label for="damWallHeight">Höhe Damm (m)</label><br>
        <input v-model.number="damWallHeight" id="damWallHeight" placeholder="Höhe Damm" type="number"/><br>
        <label for="drain">Abfluss (l/s)</label><br>
        <input v-model.number="drain" id="drain" placeholder="Abfluss" type="number"/><br>
      </div>
      <div>
        <button @click="calculate()">Berechnen</button>
      </div>
      <div v-if="result !== null">
        <h3>Resultate:</h3>
        <p>Gesamt-Wassermenge im Tal: {{ totalWaterVolume }} m³</p>
        <p>Wassermenge abzüglich Versickerung: {{ netWaterVolume }} m³</p>
        <p>Gesamt-Wassermenge im Rückhaltebecken: {{ netWaterVolume }} m³</p>
        <p>Höhe des Damms: {{ damWallHeightCalculated }} m</p>
        <p>Entleer-Dauer: {{ emptyingDuration }} Stunden</p>
      </div>
    </div>
  </WelcomeItem>
</template>

<script setup>
import {ref} from 'vue'
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";

// Fläche des Tals
let area = ref(0)
// Ausgewählte Einheit m²/ha/Km²
let selectArea = ref("")
// Niederschlag in mm
let precipitation = ref(0)
// Versickerung in Prozent
let leaching = ref(0)
// Die Größe des Beckens
let basinArea = ref(0)
// Höhe des Damms
let damWallHeight = ref(0)
// Die Menge die pro Zeiteinheit abfließt
let drain = ref(0)

// Resultate
let result = ref(null)
let totalWaterVolume = ref(0)
let netWaterVolume = ref(0)
let damWallHeightCalculated = ref(0)
let emptyingDuration = ref(0)

function convertAreaToM2()
{
  if (selectArea.value === "km2")
  {
    return area.value * 1000000
  } else if (selectArea.value === "ha")
  {
    return area.value * 10000
  } else
  {
    return area.value
  }
}

function calculate()
{
  const areaM2 = convertAreaToM2()

  // Gesamt-Wassermenge im Tal
  totalWaterVolume.value = (areaM2 * precipitation.value) / 1000  // von mm zu m³

  // Gesamt-Wassermenge im Rückhaltebecken nach Versickerung
  netWaterVolume.value = totalWaterVolume.value * (1 - leaching.value / 100)

  // Höhe des Damms
  damWallHeightCalculated.value = netWaterVolume.value / basinArea.value

  // Entleer-Dauer bei gegebenem Abfluss
  emptyingDuration.value = (netWaterVolume.value * 1000) / (drain.value * 3600) // Ergebnis in Stunden

  result.value = true
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
