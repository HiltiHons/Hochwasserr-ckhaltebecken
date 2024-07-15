<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Lottie from "@/components/Lottie.vue";
import CalculatorComponent from './components/CalculatorComponent.vue'

</script>

<template>
  <header>
    <div>
      <Lottie/>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Rechner" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <CalculatorComponent />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
