<template>
  <label>
    <input type="checkbox" id="theme-toggler" :checked="isDarkMode" @change="handleChange" />
    <MoonIcon v-if="isDarkMode" />
    <SunIcon v-else />
    <span>{{ isDarkMode ? 'Dark' : 'Light' }} mode</span>
  </label>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import MoonIcon from '@/components/icons/MoonIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'

import { useThemeStore } from '@/stores/theme'

const store = useThemeStore()

const { isDarkMode } = storeToRefs(store)

const handleChange = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', JSON.stringify(isDarkMode.value))

  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped>
label {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

svg {
  width: 20px;
  height: 20px;
}

input {
  width: 0;
  height: 0;
  visibility: hidden;
}
</style>
