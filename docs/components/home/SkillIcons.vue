<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

const SKILLICONS_URL = 'https://skillicons.dev/icons/'
const DEFAULT_PERLINE = '15'

const params = reactive({
  i: 'ts,vue,vite,nuxtjs,html,css,bootstrap,tailwind,nodejs,go,postgres,mysql,vscode,netlify,cloudflare',
  theme: 'light',
  perline: DEFAULT_PERLINE
})
const src = computed(() => `${SKILLICONS_URL}?${new URLSearchParams(params).toString()}`)

const icons = ref<HTMLElement>()
const observer = new ResizeObserver(() => {
  const width = Number(icons.value?.clientWidth)
  if (width <= 375) {
    params.perline = '6'
  } else if (width < 640) {
    params.perline = '8'
  } else if (width < 960) {
    params.perline = '10'
  } else {
    params.perline = DEFAULT_PERLINE
  }
})

onMounted(() => {
  icons.value && observer.observe(icons.value)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>
  <div ref="icons" class="skill-icons">
    <img :src="src" :alt="params.i">
  </div>
</template>
