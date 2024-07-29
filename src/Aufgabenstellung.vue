<template><br><br>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template style="padding-top: 60px;" #heading>Erstelle ein Programm zur Berechnung eines Hochwasser-Rückhalte-Beckens</template>
    <ul>
      <li>
        Ein Tal mit einem Bach sorgt immer wieder für Überschwemmungen im angrenzenden Siedlungsgebiet
      </li>
    </ul>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconEcosystem/>
    </template>
    <template #heading>Aufgabenstellung:</template>
    <ul>
      <li>Erstelle ein Programm, das bei folgenden Eingaben</li>
      <li>Größe/Fläche des Tals in m²/ha/Km² (alle Angaben möglich)</li>
      <li>Niederschlag in mm</li>
      <li>Versickerungsquote in %</li>
      <li>Grundfläche des Rückhaltebeckens</li>
      <li>Abflussmenge in l/sec</li>
    </ul>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconTooling/>
    </template>
    <template #heading>folgende Berechnungen durchführt:</template>
    <ul>
      <li>die Gesamt-Wassermenge in m³, die im Tal zusammenkommt</li>
      <li>die Gesamt-Wassermenge in m³, die im RHB ankommt</li>
      <li>die Höhe eines Dammes für ein Rückhaltebecken (RHB) mit gegebener Grundfläche</li>
      <li>die Entleer-Dauer für das RHB bei einem Abfluss von x l/sec</li>
    </ul>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDocumentation/>
    </template>
    <template #heading>Umsetzung:</template>
    <ul>
      <li>Ein Programm in einer beliebigen Programmiersprache.</li>
    </ul>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconTooling/>
    </template>
    <template #heading>Dokumentation:</template>
    <ul>
      <li>der verwendeten Formeln und Umrechnungen</li>
      <li>Bedienungsanleitung/Beschreibung des Programms mit Screenshots als PDF</li>
    </ul>
  </WelcomeItem>
</template>

<script>
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconEcosystem from "@/components/icons/IconEcosystem.vue";
import IconSupport from "@/components/icons/IconSupport.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";

export default {
  name: 'Aufgabenstellung',
  components: {IconDocumentation, IconTooling, IconSupport, IconEcosystem, WelcomeItem, DocumentationIcon}
}
</script>
