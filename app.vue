
<script setup lang="ts">
</script>

<template>
  <NuxtLayout :name="'main-layout'" class="box-border">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.zoom-enter-active,
.zoom-leave-active {
  transition: all 500ms;
}

.zoom-enter-from {
  opacity: 0;
  scale: 0.5 0.5;
}

.zoom-leave-to {
  opacity: 0;
  scale: 1.5 1.5;
}
</style>
