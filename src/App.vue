<script setup>
import Lottie from "@/components/Lottie.vue";
</script>

<template>

  <header>
    <div style="display: flex; position: absolute; top: 12px;">
      <a style="padding: 15px" href="/">Home</a>
      <a style="padding: 15px" href="/dokumentation">Dokumentation</a>
      <a style="padding: 15px" href="/aufgabenstellung">Aufgabenstellung</a>
    </div>
    <br>
    <div>
      <Lottie/>
    </div>
  </header>

  <main>
    <router-view/>
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
