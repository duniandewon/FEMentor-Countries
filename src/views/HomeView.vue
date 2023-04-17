<template>
  <header class="header container">
    <Searchbox />
    <Dropdown />
  </header>
  <main class="main container">
    <Suspense>
      <template #default>
        <Countries />
      </template>
      <template #fallback>
        <div class="main">
          <CountrySkeleton />
          <CountrySkeleton />
          <CountrySkeleton />
          <CountrySkeleton />
          <CountrySkeleton />
          <CountrySkeleton />
          <CountrySkeleton />
          <CountrySkeleton />
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import Searchbox from '@/components/SearchComponent.vue'
import Dropdown from '@/components/DropdownComponent.vue'
import Countries from '@/components/CountriesComponent.vue'

import CountrySkeleton from '@/components/skeletons/CountrySkeleton.vue'
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
