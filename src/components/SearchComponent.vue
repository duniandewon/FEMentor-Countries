<template>
  <div class="searchbox">
    <div class="searchbox__icon">
      <SearchIcon />
    </div>
    <input
      class="searchbox__input"
      type="text"
      placeholder="Search"
      v-model="search"
      @input="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SearchIcon from '@/components/icons/SearchIcon.vue'

import { useCountriesStore } from '@/stores/countries'

import data from '@/data.json'

const store = useCountriesStore()

const search = ref()

let timeout = 0

const handleSearch = () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    store.$patch({
      countries: data.filter((country) =>
        country.name.toLowerCase().includes(search.value.toLowerCase())
      )
    })
  }, 500)
}
</script>

<style scoped>
.searchbox {
  width: 100%;
  background-color: var(--color-element);
  position: relative;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.searchbox__input {
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--color-element);
  padding: 1rem 0 1rem 4rem;
  color: var(--color-text);
}

.searchbox__input::placeholder {
  color: var(--color-text);
}

.searchbox__icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
}

@media (min-width: 753px) {
  .searchbox {
    width: 25rem;
  }
}
</style>
