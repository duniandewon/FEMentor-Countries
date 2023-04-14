<template>
  <div class="dropdown">
    <div class="dropdown__label" @click="toggleDropdown">
      <p>{{ selectedRegion ? selectedRegion : 'Filter by Region' }}</p>
      <CheveronIcon />
    </div>
    <ul class="dropdown__content" v-show="isActive">
      <li v-for="region in regions" :key="region" class="region">
        <label>
          <input
            type="radio"
            name="region"
            :value="region"
            v-model="selectedRegion"
            @change="handleChange"
          />
          <span>{{ region }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CheveronIcon from '@/components/icons/CheveronIcon.vue'

import { useCountriesStore } from '@/stores/countries'

import data from '@/data.json'

const isActive = ref(false)

const selectedRegion = ref('')

const store = useCountriesStore()

const regions = ref(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'])

const toggleDropdown = () => (isActive.value = !isActive.value)

const handleChange = () => {
  store.$patch({ countries: data.filter((country) => country.region === selectedRegion.value) })
  toggleDropdown()
}
</script>

<style scoped>
.dropdown,
.dropdown__content {
  background-color: var(--color-element);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
}

.dropdown {
  position: relative;
  width: 15rem;
}

.dropdown__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
}

.dropdown__content {
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  list-style: none;
  padding: 0 1rem;
  margin: 0;
}

.dropdown__content input {
  width: 0;
  height: 0;
  visibility: hidden;
}

.region {
  padding: 0.5rem 0;
}

.region label {
  display: block;
  cursor: pointer;
}
</style>
