<script setup lang='ts'>
import { ref } from 'vue'

const props = defineProps({})
const emits = defineEmits([])

const year = new Date().getFullYear()
</script>

<template>
  <div class="relative w-screen h-screen p-2 bg-indigo-700">
    <div class="relative bg-white/50 flex justify-center items-center w-full h-full rounded-lg overflow-hidden">
      <slot></slot>
      <!-- <iframe class="absolute w-full sm:w-4/12 right-3 bottom-3 rounded" src="https://open.spotify.com/embed/track/4dO06RpuhKdD1kvyJHOmgR?utm_source=generator" height="152" frameBorder="0" autoplay="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->

      <p class="absolute p-4 text-white text-xl sm:text-4xl font-medium font-montserrat bottom-0 right-0 shadow-text">&copy; 2020 - {{ year }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>