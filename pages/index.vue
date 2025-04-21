<script setup lang='ts'>
import { ref, onMounted } from 'vue'

const props = defineProps({})
const emits = defineEmits([])

useHead({
  'title': 'ZEROPLUS - Inicio'
})

const links = ref([])
const number = ref(0)

const alterText = async (index: number) => {
  const splittedWord = links.value[index].innerText.split('')
  const alteredText: HTMLSpanElement[] = []

  splittedWord.forEach((el: string) => {
    const random: number = Math.floor(Math.random() * 9)
    let elLetter: HTMLSpanElement = document.createElement('span')
    let addLetter: string | void = ''
    elLetter.innerText = el

    if (random % 1 == 0) addLetter = elLetter.setAttribute('class', 'font-grenze')
    if (random % 2 == 0) addLetter = elLetter.setAttribute('class', 'font-montserrat')
    if (random % 3 == 0) addLetter = elLetter.setAttribute('class', 'font-metamorphous')
    if (random % 5 == 0) addLetter = elLetter.setAttribute('class', 'font-eagle')
    if (random % 7 == 0) addLetter = elLetter.setAttribute('class', 'font-medieval')

    alteredText.push(elLetter)
  });

  links.value[index].innerText = ''
  links.value[index].append(...alteredText)
}

onMounted(() => {
  links.value = document.querySelectorAll('.text-link')

  links.value.forEach((el, index) => {
    setInterval(() => {
      alterText(index)
    }, 500);
  })
})

const changeNumber = (value: number) => {
  number.value = value
}
</script>

<template>
  <div class="relative w-full h-full bg-[url('/images/background-index-blurred.jpg')] bg-no-repeat bg-cover bg-center">
    <div class="relative flex justify-center items-center w-full h-full perspective-distant">
      <ul class="relative w-full sm:w-8/12 h-auto flex flex-col sm:gap-4 text-white rotate-y-12 sm:rotate-y-45">
        <NuxtLink @pointerenter="changeNumber(1)" @pointerout="changeNumber(0)" to="/works" class="w-full flex justify-center items-center md:w-7/12 h-28 uppercase text-3xl sm:text-6xl whitespace-nowrap cursor-pointer rounded-lg overflow-hidden sweep shadow-text hover:shadow-lg shadow-main">
          <div class="relative w-full h-auto z-0 text-link">Trabajos</div>
          <div class="absolute left-0 top-0 w-full h-full z-10"></div>
        </NuxtLink>

        <NuxtLink @pointerenter="changeNumber(2)" @pointerout="changeNumber(0)" to="/about" class="w-full flex justify-center items-center md:w-7/12 h-28 uppercase text-3xl sm:text-6xl whitespace-nowrap cursor-pointer rounded-lg overflow-hidden sweep shadow-text hover:shadow-lg shadow-main">
          <div class="relative w-full h-auto z-0 text-link">Sobre mi</div>
          <div class="absolute left-0 top-0 w-full h-full z-10"></div>
        </NuxtLink>

        <NuxtLink @pointerenter="changeNumber(3)" @pointerout="changeNumber(0)" to="/curriculum" class="w-full flex justify-center items-center md:w-7/12 h-28 uppercase text-3xl sm:text-6xl whitespace-nowrap cursor-pointer rounded-lg overflow-hidden sweep shadow-text hover:shadow-lg shadow-main">
          <div class="relative w-full h-auto z-0 text-link">Curriculum</div>
          <div class="absolute left-0 top-0 w-full h-full z-10"></div>
        </NuxtLink>

        <!-- <NuxtLink @pointerenter="changeNumber(0)" @pointerout="changeNumber(0)" to="/links" class="w-full flex justify-center items-center md:w-7/12 h-28 uppercase text-3xl sm:text-6xl whitespace-nowrap cursor-pointer rounded-lg overflow-hidden sweep shadow-text hover:shadow-lg shadow-main">
          <div class="relative w-full h-auto z-0 text-link">Enlaces</div>
          <div class="absolute left-0 top-0 w-full h-full z-10"></div>
        </NuxtLink> -->

        <NuxtLink @pointerenter="changeNumber(4)" @pointerout="changeNumber(0)" to="/skills" class="w-full flex justify-center items-center md:w-7/12 h-28 uppercase text-3xl sm:text-6xl whitespace-nowrap cursor-pointer rounded-lg overflow-hidden sweep shadow-text hover:shadow-lg shadow-main">
          <div class="relative w-full h-auto z-0 text-link">Habilidades</div>
          <div class="absolute left-0 top-0 w-full h-full z-10"></div>
        </NuxtLink>
      </ul>

      <p class="hidden md:block absolute top-0 right-0 text-white font-[700] overflow-hidden">
        <span class="text-8xl font-metamorphous uppercase inline-block -rotate-90 translate-x-44 -translate-y-24 shadow-text">link</span>
        <span class="text-[30rem] font-oswald inline-block text-center w-80 h-auto">{{ number }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
