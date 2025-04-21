<script setup lang='ts'>
import { ref } from 'vue'

useHead({
  'title': 'ZEROPLUS - Curriculum'
})

const props = defineProps({})
const emits = defineEmits([])

const { data, status } = await useLazyFetch('/api/getCurriculum')

const title: object = {
  'markup_languages': 'Lenguajes de maquetado',
  'programming_languages': 'Lenguajes de programacion',
  'databases': 'Bases de datos',
  'frameworks': 'Frameworks',
  'languajes': 'Idiomas'
}
</script>

<template>
  <div class="relative w-full h-full bg-[url('/images/background-cv-blurred.jpg')] bg-no-repeat bg-cover bg-center">
    <menubar></menubar>

    <div v-if="status == 'pending' && data == null" class="relative w-full h-full loading bg-no-repeat bg-gradient-to-r from-transparent via-main to-transparent"></div>

    <div v-else class="relative flex justify-end items-start w-full h-full">
      <div v-if="data" class="relative w-full md:w-1/2 h-full p-4 md:p-8 flex flex-col gap-4 bg-white/75 font-montserrat overflow-y-scroll scrollbar-none">
        <p class="relative text-4xl text-center border-b-2 pb-4">{{ data.name }}</p>

        <div>
          <p class="relative text-center text-sm md:text-base">{{ data.contact.address.ve }}</p>
          <p class="relative text-center text-sm md:text-base">{{ data.contact.networks.linkedin }}</p>
          <!-- <p class="relative text-center text-sm md:text-base">{{ data.contact.phone.ve }}</p> -->
          <p class="relative text-center text-sm md:text-base">{{ data.contact.email[0] }}</p>
        </div>

        <p class="relative text-base md:text-xl text-justify">{{ data.excerpt }}</p>

        <p class="relative text-xl md:text-2xl border-b-2 pb-4">Experiencia Laboral</p>

        <div class="relative flex flex-col px-1 md:px-4" v-for="experience of data.laboral_experience">
          <div class="relative flex justify-between items-center">
            <div class="relative w-3/6 md:w-4/6 h-auto border-b-2 pb-2">
              <p class="text-sm md:text-base font-semibold">{{ experience.work }}</p>
              <p class="text-sm md:text-base">{{ experience.title }}</p>
            </div>

            <div class="relative w-3/6 md:w-2/6 h-auto border-b-2 border-l-2 pb-2 pl-6">
              <p class="text-sm md:text-base font-semibold">{{ experience.country }}</p>
              <p class="text-sm md:text-base">{{ experience.time }}</p>
            </div>
          </div>

          <p class="text-sm md:text-base mt-2">{{ experience.about }}</p>
        </div>

        <p class="relative text-xl md:text-2xl border-b-2 pb-4">Educación</p>

        <div class="relative flex flex-col px-1 md:px-4 mb-12 md:mb-4" v-for="education of data.education">
          <div class="relative flex justify-between md:items-center">
            <div class="relative w-3/6 md:w-4/6 h-auto border-b-2 pb-2">
              <p class="text-sm md:text-base font-semibold">{{ education.school }}</p>
              <p class="text-sm md:text-base">{{ education.carrer }}</p>
            </div>

            <div class="relative w-3/6 md:w-2/6 h-auto border-b-2 border-l-2 pb-2 pl-6">
              <p class="text-sm md:text-base font-semibold">{{ education.country }}</p>
              <p class="text-sm md:text-base">{{ education.time }}</p>
            </div>
          </div>
        </div>

        <!-- <p class="relative text-2xl border-b-2 pb-4">Habilidades</p>

        <div v-for="skill, index of data.skills" class="relative px-4">
          <p class="font-semibold">{{ title[index] }}</p>

          <ul>
            <li v-for="item of skill" class="ml-8 list-disc">{{ item }}</li>
          </ul>
        </div> -->
      </div>
    </div>

    <p class="absolute left-4 bottom-4 text-4xl sm:text-8xl text-white shadow-text font-montserrat">Curriculum</p>
  </div>
</template>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
</style>
