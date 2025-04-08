<script setup lang='ts'>
import { ref } from 'vue'
const props = defineProps({})
const emits = defineEmits([])
</script>

<template>
  <div class="relative w-full h-full bg-[url('/images/placeholder-background.jpg')] bg-no-repeat bg-cover">
    <menubar></menubar>

    <div class="relative flex justify-center items-center w-full h-full backdrop-blur-xs">
    </div>

    <p class="absolute left-4 bottom-4 text-5xl sm:text-8xl text-white shadow-text font-eagle">Enlaces</p>
  </div>
</template>

<style scoped>
</style>