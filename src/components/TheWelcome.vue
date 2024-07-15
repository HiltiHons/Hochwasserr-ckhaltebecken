<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>Dokumentation</template>
    Die
    <a href="#">Aufgabenstellung</a>
    inkl. der
    <a href="#">Dokumentation</a>
    bietet dir alle Informationen die für das Projekt wichtig sind.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>Tools</template>

    Das Projekt wird betrieben mit
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">Vite</a>.
    Als IDE kommt
    <a href="https://www.jetbrains.com/de-de/phpstorm/" target="_blank" rel="noopener noreferrer">PHPSorm</a>
    zum Einsatz.
    Falls du mal lust auf mehr bekommst und
    <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a>

    eine Chance geben möchtest, oder einfach mal aus Langeweile
    herumspielen willst, auf dieser Seite gibt es ein wunderbares
    <a href="https://vuejs.de/artikel/vuejs-tutorial-deutsch-anfaenger/" target="_blank" rel="noopener noreferrer">Tutorial.</a>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon/>
    </template>
    <template #heading>Erscheinung</template>

    Dir ist bestimmt schon die Animation auf der Seite aufgefallen. Dabei handelt es sich um eines der mächtigsten
    Tools um heutzutage Animation zu erzeugen. Mit
    <a href="https://lottiefiles.com/de/" target="_blank" rel="noopener noreferrer">Lottie</a> entwirfst du Animationen
    die nur einen Bruchteil der Speichergröße besitzt und dabei nicht an
    Qualität verliert.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon/>
    </template>
    <template #heading>Gemeinschaft
    </template>

    Vue3 hat eine großartige Community! Nimm dir die Zeit und sehe dich auf den offiziellen
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener noreferrer">Vue Land</a> Discord Server um.
    Sollten dich die aktuellen Neuigkeiten rund um Vue interessieren, dann schau doch gleich mal bei
    <a href="https://x.com/vuejs" rel="noopener noreferrer" target="_blank">@vuejs</a> vorbei.
  </WelcomeItem>
</template>
