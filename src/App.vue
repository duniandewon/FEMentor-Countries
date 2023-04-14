<template>
  <Navbar />
  <RouterView />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { RouterView } from 'vue-router'

import Navbar from '@/components/NavbarComponent.vue'

import { useThemeStore } from '@/stores/theme'

const store = useThemeStore()

const { isDarkMode } = storeToRefs(store)

if (isDarkMode.value) document.documentElement.className = 'dark'
else document.documentElement.classList.remove('dark')
</script>

<style scoped></style>
