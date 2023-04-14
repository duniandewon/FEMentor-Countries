<template>
  <header class="header container">
    <button class="btn" @click="handleGoBack">
      <span><ArrowIcon /></span>
      <span>Back</span>
    </button>
  </header>
  <main class="country container">
    <picture class="country__flag">
      <img :src="country?.flag" :alt="country?.name" />
    </picture>
    <section class="country__body">
      <h1 class="country__name">{{ country?.name }}</h1>
      <section class="country__details">
        <p class="country__detail">
          <span>Native Name:</span>
          <span>{{ country?.nativeName }}</span>
        </p>
        <p class="country__detail">
          <span>Population:</span>
          <span>{{ country?.population }}</span>
        </p>
        <p class="country__detail">
          <span>Region:</span>
          <span>{{ country?.region }}</span>
        </p>
        <p class="country__detail">
          <span>Sub Region:</span>
          <span>{{ country?.subregion }}</span>
        </p>
        <p class="country__detail">
          <span>Capital:</span>
          <span>{{ country?.capital ? country?.capital : '-' }}</span>
        </p>
      </section>
      <section class="country__details">
        <p class="country__detail">
          <span>Top Level Domain:</span>
          <span v-for="domain in country?.topLevelDomain" :key="domain">{{ domain }}</span>
        </p>
        <p class="country__detail">
          <span>Courencies:</span>
          <span v-for="currency in country?.currencies" :key="currency.code">{{
            currency.name
          }}</span>
        </p>
        <p class="country__detail">
          <span>Languages:</span>
          <span v-for="language in country?.languages" :key="language.iso639_2">{{
            language.name
          }}</span>
        </p>
      </section>
      <footer class="country__footer" v-if="country?.borders?.length">
        <h2>Border Countries</h2>
        <ul class="country__neighbors">
          <li v-for="neighbor in country?.borders" :key="neighbor">
            <RouterLink class="btn" :to="'/country/' + neighbor">{{ neighbor }}</RouterLink>
          </li>
        </ul>
      </footer>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import ArrowIcon from '@/components/icons/ArrowIcon.vue'

import data from '@/data.json'

const route = useRoute()
const router = useRouter()

const country = ref(data.find((cntr) => cntr.alpha3Code === route.params.id))

const handleGoBack = () => router.back()

watch(
  () => route.params.id,
  (param) => {
    country.value = data.find((cntr) => cntr.alpha3Code === param)
  }
)
</script>

<style scoped>
.header {
  margin: 2rem 0;
}
.country__footer,
.country__flag {
  margin: 2.5rem 0 2rem;
  max-width: 45rem;
}

.country__body {
  max-width: 50rem;
  display: grid;
  gap: 2rem;
}

.country__neighbors {
  padding: 0;
  margin-top: 2rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.country__detail span:first-child {
  font-weight: var(--fw-bold);
}

@media (min-width: 768px) {
  .country__body {
    grid-template-columns: 1fr 1fr;
  }

  .country__name,
  .country__footer {
    grid-column: 1 / span 2;
  }
}

@media (min-width: 1024px) {
  .country {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
}
</style>
