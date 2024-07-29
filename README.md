# Hochwasser-Rückhaltebecken

## Definition
- Dieser Rechner ist ein Programm, das die Berechnung eines Hochwasser-Rückhaltebeckens ermöglicht.

## Vorteile
- Einfache Berechnung komplexer hydrologischer Daten.
- Nützlich für die Planung und den Bau von Hochwasser-Rückhaltebecken.

## Grundlegende Nutzung
- Der Rechner wird verwendet, um verschiedene Eingaben wie die Fläche des Tals, den Niederschlag und die Versickerungsrate zu verarbeiten und daraus wichtige Parameter für ein Rückhaltebecken zu berechnen.

## Erstellung
- Der Rechner wurde mit JavaScript entwickelt und kann in einer beliebigen Programmierumgebung verwendet werden. Die Eingaben und Berechnungen werden durch die Methoden der `Calculator`-Klasse verarbeitet.

## Beispiel
- Angenommen, wir haben ein Tal mit einer Fläche von 1 km² und einem Niederschlag von 10 mm. Wenn 10 % des Niederschlags versickern und die Grundfläche des Beckens 1 ha beträgt, können wir folgende Berechnungen durchführen:

```javascript
const calculator = new Calculator();
calculator.setNumbers(1000000, 'm²', 10, 10, 10000, 100);
const totalWater = calculator.calcTotalAmountOfWater();
console.log(`Gesamtwassermenge im Tal: ${totalWater} m³`);
