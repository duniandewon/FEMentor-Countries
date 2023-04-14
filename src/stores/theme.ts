import { ref } from 'vue'

import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(JSON.parse(localStorage.getItem('theme')!) || false)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value

    localStorage.setItem('theme', JSON.stringify(isDarkMode.value))

    document.documentElement.classList.toggle('dark')
  }
  return { isDarkMode, toggleTheme }
})
