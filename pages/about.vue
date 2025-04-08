<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  'title': 'Sobre Mi'
})

const props = defineProps({})
const emits = defineEmits([])

const { data, status } = await useLazyFetch('/api/getAbout')
</script>

<template>
  <div class="relative w-full h-full bg-[url('/images/background-about-blurred.jpg')] bg-no-repeat bg-cover bg-center">
    <menubar></menubar>

    <div v-if="status == 'pending' && data == null" class="relative w-full h-full loading bg-no-repeat bg-gradient-to-r from-transparent via-main to-transparent"></div>

    <div v-else class="relative flex justify-end items-start w-full h-full">
      <p v-html="data" class="relative w-1/2 h-full p-8 bg-white/75 font-semibold text-4xl font-grenze"></p>
    </div>

    <p class="absolute left-4 bottom-4 text-5xl sm:text-8xl text-white shadow-text font-grenze">Sobre mi</p>
  </div>
</template>

<style scoped>m
.translate-calc {
  translate: v-bind('xStyle') v-bind('yStyle');
}

.box-shadow {
  box-shadow: 1rem 1rem 0.25rem #000;
}
</style>
