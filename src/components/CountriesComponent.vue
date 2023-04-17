<template>
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
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'

import data from '@/data.json'

import { useCountriesStore } from '@/stores/countries'

import Country from '@/components/CountryComponent.vue'

const store = useCountriesStore()

const { countries } = storeToRefs(store)

const getCountries = async () => {
  if (JSON.parse(sessionStorage.getItem('countries-cached')!)) return (countries.value = data)

  await new Promise((resolve) => setTimeout(resolve, 5000))
  countries.value = data

  sessionStorage.setItem('countries-cached', 'true')
}

await getCountries()
</script>
