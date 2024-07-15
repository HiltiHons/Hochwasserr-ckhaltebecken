<template>
  <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" />
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

import AstronautJSON from '/src/water-animation.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      AstronautJSON,
    }
  },
}
</script>