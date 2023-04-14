<template>
  <nav class="nav container">
    <RouterLink to="/">Where in the world</RouterLink>
    <ThemePicker />
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ThemePicker from '@/components/ThemePickerComponent.vue'
</script>

<style>
.nav {
  background-color: (--color-element);
  box-shadow: var(--box-shadow);
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav a {
  font-size: 1.3rem;
  font-weight: var(--fw-bold);
}
</style>
