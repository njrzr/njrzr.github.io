<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  'title': 'ZEROPLUS - Habilidades'
})

const props = defineProps({})
const emits = defineEmits([])

const { data, status } = await useLazyFetch('/api/getSkills')

const showDescription = ref(false)
const x = ref(0)
const y = ref(0)
const xStyle = ref(0)
const yStyle = ref(0)
const clientWidth = ref(0)
const clientHeight = ref(0)
const skill = ref('');

const hoverDescription = (skillType: string = ''): void => {
  showDescription.value = !showDescription.value
  skillType.length > 0 ? skill.value = skillType : skill.value = ''
}

const update = (event: Event) => {
  clientWidth.value = document.body.clientWidth
  clientHeight.value = document.body.clientHeight
  x.value = event.pageX
  y.value = event.pageY

  if (x.value < (Math.floor(clientWidth.value / 6) * 2)) {
    xStyle.value = ((Math.floor(clientWidth.value / 6) * 2) - x.value) + 'px'
  } else if (x.value > (Math.floor(clientWidth.value / 6) * 4)) {
    xStyle.value = '-' + (x.value - (Math.floor(clientWidth.value / 6) * 4)) + 'px'
  } else {
    xStyle.value = 0
  }

  if (y.value < (Math.floor(clientHeight.value / 6) * 2)) {
    yStyle.value = ((Math.floor(clientHeight.value / 6) * 2) - y.value) + 'px'
  } else if (y.value > (Math.floor(clientHeight.value / 6) * 4)) {
    yStyle.value = '-' + (y.value - (Math.floor(clientHeight.value / 6) * 4)) + 'px'
  } else {
    yStyle.value = 0
  }
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
</script>

<template>
  <div class="relative w-full h-full bg-[url('/images/background-skills-blurred.jpg')] bg-no-repeat bg-cover bg-center">
    <menubar></menubar>

    <div v-if="status == 'pending' && data == null" class="relative w-full h-full loading bg-no-repeat bg-gradient-to-r from-transparent via-main to-transparent"></div>

    <div v-else class="relative md:flex p-2 pb-16 md:p-0 md:pb-0 md:justify-center md:items-center w-full h-full overflow-y-scroll md:overflow-hidden">
      <div @mouseenter="hoverDescription('html')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
        <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/html5.svg" alt="HTML5 Icon">
      </div>

      <div class="translate-x-8 sm:translate-x-[20vw] sm:-translate-y-[50vh]">
        <div @mouseenter="hoverDescription('css')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
          <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/css.svg" alt="CSS Icon">
        </div>
      </div>

      <div class="-translate-x-42 sm:-translate-x-[30vw] translate-y-16 sm:-translate-y-[25vh]">
        <div @mouseenter="hoverDescription('javascript')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
          <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/javascript.svg" alt="Javscript Icon">
        </div>
      </div>

      <div class="sm:-translate-x-[50vw] -translate-y-48 sm:translate-y-[40vh]">
        <div @mouseenter="hoverDescription('php')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
          <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/php.svg" alt="PHP Icon">
        </div>
      </div>

      <div class="sm:translate-x-[45vw] translate-y-56 sm:translate-y-[20vh]">
        <div @mouseenter="hoverDescription('sql')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
          <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/mariadb.svg" alt="MariaDB Icon">
        </div>
      </div>

      <div class="-translate-x-24 sm:-translate-x-[20vh] -translate-y-72 sm:translate-y-[50vh]">
        <div @mouseenter="hoverDescription('bash')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
          <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/gnometerminal.svg" alt="Terminal Icon">
        </div>
      </div>

      <div class="translate-x-42 sm:translate-x-[70vw] -translate-y-16 sm:translate-y-[50vh]">
        <div @mouseenter="hoverDescription('others')" @mouseleave="hoverDescription()" class="absolute hidden md:flex justify-center items-center w-30 h-24 sm:scale-150 bg-main hexagon-calc cursor-pointer translate-calc">
          <img class="relative w-14 h-14 object-cover object-center" src="/assets/svg/questionicon.svg" alt="Question Icon">
        </div>
      </div>

      <div v-for="(item, index) of data" class="relative flex flex-col md:hidden w-full h-auto bg-white/50 my-1 p-2 rounded">
        <p class="text-right text-3xl font-medieval border-b-2">{{ index }}</p>
        <p v-for="type of item" class="font-medieval text-xl bg-main/50 text-white my-1 p-1 rounded">{{ type }}</p>
      </div>
    </div>

    <div v-if="data" :class="['absolute top-0 w-4/12 p-4 h-full bg-white/75 transition-all duration-500 opacity-0 z-20',{ '-left-4/12 box-shadow-left' : x > clientWidth / 2 }, { '-right-4/12 box-shadow-right' : x < clientWidth / 2 }, { 'w-4/12 left-0 opacity-100' : showDescription != false && x > clientWidth / 2 }, { 'w-4/12 right-0 opacity-100' : showDescription != false && x < clientWidth / 2 }]">
      <p class="text-right text-4xl font-semibold uppercase my-2 border-b-2 font-medieval">{{ skill }}</p>
      <p v-for="item of data[skill]" class="text-white text-2xl uppercase my-1 pl-4 font-medieval bg-main/50 p-1 rounded">{{ item }}</p>
    </div>
    
    <p class="absolute left-4 bottom-4 text-4xl sm:text-8xl text-white shadow-text font-medieval">Habilidades</p>
  </div>
</template>

<style scoped>
.translate-calc {
  translate: v-bind('xStyle') v-bind('yStyle');
}

.box-shadow-left {
  box-shadow: 0.25em 0em 0.25em #000;
}

.box-shadow-right {
  box-shadow: -0.25em 0em 0.25em #000;
}
</style>
