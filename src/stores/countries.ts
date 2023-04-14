import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import data from '@/data.json'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref(data)

  const getCountryById = computed((id: string) =>
    data.filter((country) => country.alpha3Code === id)
  )

  const getCountryByName = computed((name: string) =>
    data.filter((country) => country.name === name)
  )

  return { countries, getCountryById, getCountryByName }
})
