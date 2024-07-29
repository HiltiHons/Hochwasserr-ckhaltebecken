<template><br><br>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template style="padding-top: 60px;" #heading>Hochwasser-Rückhaltebecken</template>
    <ul>
      <li>
        Dieser Rechner ist ein Programm, das die Berechnung eines Hochwasser-Rückhaltebeckens ermöglicht.
      </li>
    </ul>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <icon-community/>
    </template>
    <template style="padding-top: 60px;" #heading>Vorteile</template>
    <ul>
      <li>
        Einfache Berechnung komplexer hydrologischer Daten.
        Nützlich für die Planung und den Bau von Hochwasser-Rückhaltebecken.<
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <icon-ecosystem/>
    </template>
    <template style="padding-top: 60px;" #heading>Grundlegende Nutzung</template>
    <ul>
      <li>
        Der Rechner wird verwendet, um verschiedene Eingaben wie die Fläche des Tals, den Niederschlag und die
        Versickerungsrate zu verarbeiten und daraus wichtige Parameter für ein Rückhaltebecken zu berechnen.
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <icon-tooling/>
    </template>
    <template style="padding-top: 60px;" #heading>Erstellung</template>
    <ul>
      <li>
        Der Rechner wurde mit JavaScript entwickelt und kann in einer beliebigen Programmierumgebung verwendet werden.
        Die
        Eingaben und Berechnungen werden durch die Methoden der `Calculator`-Klasse verarbeitet.
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <documentation-icon/>
    </template>
    <template style="padding-top: 60px;" #heading>Beispiel</template>
    <ul>
      <li>
        Angenommen, wir haben ein Tal mit einer Fläche von 1 km² und einem Niederschlag von 10 mm. Wenn 10 % des
        Niederschlags versickern und die Grundfläche des Beckens 1 ha beträgt, können wir folgende Berechnungen
        durchführen:
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <icon-tooling/>
    </template>
    <template style="padding-top: 60px;" #heading>Code</template>

    <pre><code class="javascript">
const calculator = new Calculator();
calculator.setNumbers(1000000, 'm²', 10, 10, 10000, 100);
const totalWater = calculator.calcTotalAmountOfWater();
console.log(`Gesamtwassermenge im Tal: ${totalWater} m³`);
    </code></pre>
  </WelcomeItem>
</template>

<script>
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconCommunity from "@/components/icons/IconCommunity.vue";
import IconEcosystem from "@/components/icons/IconEcosystem.vue";
import IconTooling from "@/components/icons/IconTooling.vue";

export default {
  name: 'Dokumentation',
  components: {IconTooling, IconEcosystem, IconCommunity, WelcomeItem, DocumentationIcon}
}
</script>
