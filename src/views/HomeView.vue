<template>
  <header class="header container">
    <Searchbox />
    <Dropdown />
  </header>
  <main class="main container">
    <Country
      v-for="country in countries"
      :key="country.alpha3Code"
      :id="country.alpha3Code"
      :name="country.name"
      :flag="country.flags.png"
      :region="country.region"
      :population="country.population"
      :capital="country.capital"
    />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import Searchbox from '@/components/SearchComponent.vue'
import Dropdown from '@/components/DropdownComponent.vue'

import { useCountriesStore } from '@/stores/countries'

import Country from '@/components/CountryComponent.vue'

const store = useCountriesStore()

const { countries } = storeToRefs(store)
</script>

<style scoped>
.header {
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

@media (min-width: 753px) {
  .main {
    justify-content: space-between;
  }
}
</style>
