<script setup lang='ts'>
import { ref, onMounted } from 'vue'

useHead({
  'title': 'ZEROPLUS - Trabajos'
})

const props = defineProps({})
const emits = defineEmits([])

const { data, status } = await useLazyFetch('/api/getWork')

const checkImage = (value: string) => {
  return value.match('images') == null ? 'data:image/webp;base64,' + value : value
}
</script>

<template>
  <div class="relative w-full h-full flex flex-col justify-center items-center bg-[url('/images/background-works-blurred.jpg')] bg-no-repeat bg-cover bg-center">
    <menubar></menubar>
    <div class="absolute w-full h-full top-0 left-0"></div>

    <div v-if="status == 'pending' && data == null" class="relative w-full h-full loading bg-no-repeat bg-gradient-to-r from-transparent via-main to-transparent"></div>

    <div v-else class="relative w-full h-auto p-2 md:p-0 overflow-y-scroll scrollbar-none">
      <div v-for="item, index of data" class="relative w-full !md:w-10/12 sm:w-8/12 h-auto md:h-72 bg-white mx-auto my-2 flex flex-col md:flex-row justify-between items-center gap-6 rounded-xl border-2 border-slate-500 overflow-hidden md:even:-left-32 md:odd:left-32">
        <div class="relative w-full md:w-4/12 h-full overflow-hidden">
          <img class="w-full md:h-full object-left-top object-cover scale-125" :src="checkImage(item.image)" alt="Proyect Image">
        </div>

        <div class="relative w-full md:w-8/12 h-full flex flex-col justify-start p-2 gap-1">
          <p class="relative text-xl md:text-2xl font-bold font-metamorphous w-full h-auto">{{ item.title }}</p>

          <a v-show="item.url != '#'" :href="item.url" target="_blank" class="relative font-metamorphous w-auto h-auto p-2 hover:text-white rounded sweep-simple">Visitar</a>

          <p class="relative text-sm md:text-base my-1 font-metamorphous w-auto h-auto">{{ item.description }}</p>

          <div class="relative w-full h-auto flex gap-2">
            <p v-for="tech of item.tech" class="font-metamorphous text-sm md:text-base inline bg-blue-600 text-white rounded-full px-4 py-0.5">{{ tech }}</p>
          </div>

          <div class="relative w-full h-auto">
            <p v-for="tag of item.tags" class="font-metamorphous inline bg-blue-600 text-white rounded-full px-4 py-0.5">{{ tag }}</p>
          </div>
        </div>
      </div>
    </div>

    <p class="absolute left-4 bottom-4 text-4xl sm:text-8xl text-white shadow-text font-metamorphous">Trabajos</p>
  </div>
</template>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
</style>
