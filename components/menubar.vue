<script setup lang='ts'>
import { ref } from 'vue'

const route = useRoute()
const props = defineProps({})
const emits = defineEmits([])

const showMenu = ref(false)
const fonts = {
  '/links': 'font-eagle',
  '/skills': 'font-medieval',
  '/works': 'font-metamorphous',
  '/about': 'font-grenze',
  '/curriculum': 'font-montserrat'
}

const openMenu = async () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div @click="openMenu()" :class="['absolute w-12 h-12 flex justify-center items-center flex-col top-2 left-2 border text-white bg-main hover:bg-white hover:text-main rounded-lg cursor-pointer select-none z-20 transition-all duration-200', { 'bg-red-600 hover:bg-white hover:text-red-600' : showMenu != false }]">
    <i v-show="showMenu == false" class="text-3xl fa-solid fa-bars"></i>
    <i v-show="showMenu != false" class="text-3xl fa-solid fa-times"></i>
  </div>

  <div :class="['absolute w-full sm:w-4/16 h-full rounded bg-slate-600/85 -left-[100vw] transition-all duration-500 overflow-hidden z-10', { 'left-0' : showMenu }]">
    <ul class="relative w-full h-auto flex flex-col gap-1 text-white">
      <NuxtLink to="/" :class="['w-full pl-20 uppercase text-2xl whitespace-nowrap cursor-pointer overflow-hidden sweep shadow-text ' + fonts[route.path]]">
        Inicio
      </NuxtLink>

      <NuxtLink v-if="route.path != '/works'" to="/works" :class="['w-full pl-20 uppercase text-2xl whitespace-nowrap cursor-pointer overflow-hidden sweep shadow-text ' + fonts[route.path]]">
        Trabajos
      </NuxtLink>

      <NuxtLink v-if="route.path != '/about'" to="/about" :class="['w-full pl-20 uppercase text-2xl whitespace-nowrap cursor-pointer overflow-hidden sweep shadow-text ' + fonts[route.path]]">
        Sobre mi
      </NuxtLink>

      <NuxtLink v-if="route.path != '/curriculum'" to="/curriculum" :class="['w-full pl-20 uppercase text-2xl whitespace-nowrap cursor-pointer overflow-hidden sweep shadow-text ' + fonts[route.path]]">
        Curriculum
      </NuxtLink>

      <!-- <NuxtLink v-if="route.path != '/'" to="/links" :class="['w-full pl-20 uppercase text-2xl whitespace-nowrap cursor-pointer overflow-hidden sweep shadow-text ' + fonts[route.path]]">
        Enlaces
      </NuxtLink> -->

      <NuxtLink v-if="route.path != '/skills'" to="/skills" :class="['w-full pl-20 uppercase text-2xl whitespace-nowrap cursor-pointer overflow-hidden sweep shadow-text ' + fonts[route.path]]">
        Habilidades
      </NuxtLink>
    </ul>
  </div>
</template>

<style scoped>
</style>
