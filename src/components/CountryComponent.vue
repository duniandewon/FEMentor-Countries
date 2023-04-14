<template>
  <div class="country">
    <RouterLink :to="'/country/' + id" class="country__flag">
      <img :src="flag" :alt="name" />
    </RouterLink>
    <div class="country__body">
      <RouterLink :to="to" class="country__name">{{ name }}</RouterLink>
      <p class="country__detail">
        <span>Population:</span>
        <span>{{ population }}</span>
      </p>
      <p class="country__detail">
        <span>Region:</span>
        <span>{{ region }}</span>
      </p>
      <p class="country__detail">
        <span>Capital:</span>
        <span>{{ capital }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Prop {
  id: string
  flag: string
  name: string
  population: number
  region: string
  capital?: string
}

const props = defineProps<Prop>()

const to = '/country/' + props.id
</script>

<style scoped>
.country {
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background-color: var(--color-element);
  max-width: 20rem;
  overflow: hidden;
}

.country__body {
  padding: 2rem;
}

.country__name {
  font-weight: var(--fw-extra-bold);
  font-size: 1.2rem;
}

.country__detail span:first-child {
  font-weight: var(--fw-bold);
}
</style>
