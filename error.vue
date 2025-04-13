<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="relative font-montserrat w-full h-screen text-white bg-[url('images/main-background.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center">
    <div class="relative bg-black/50 p-2 flex gap-16 items-center backdrop-blur-xl border-2 rounded-lg">
        <p class="relative ml-8 px-8 text-9xl font-bold text-red-700 rounded-lg text-shadow">{{ error.statusCode }}</p>
        <span class="w-0.5 h-full bg-white rounded-full"></span>
        <p class="relative mr-16 text-2xl font-bold">
            {{ error.statusCode == 404 ? 'Pagina no encontrada' : error.statusCode == 500 ? 'Error de Servidor' : '' }}
        </p>
    </div>

    <NuxtLink to="/" class="relative bg-black/50 text-xl border-2 font-medium mt-8 px-4 py-2 rounded-lg hover:bg-main/50 backdrop-blur-xl transition-colors duration-200">
      Volver a inicio
    </NuxtLink>

     <p class="absolute bottom-4 text-xl font-medium">Ori and the Will of the Wisps | Moon Studios - Xbox Game Studios &copy;2020</p>
  </div>
</template>

<style scoped>
.text-shadow {
    text-shadow: 0em 0em 0.05em #ffffff;
}
</style>
