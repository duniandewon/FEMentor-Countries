<template>
  <div class="country">
    <Skeleton variant="rectangle" width="20rem" height="10rem" />
    <div class="country__body">
      <div class="country-skeleton">
        <Skeleton variant="text" width="60%" style="font-size: 1.5rem" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from '@/components/SkeletonComponent.vue'
</script>

<style scoped>
.country-skeleton {
  display: grid;
  gap: 0.8rem;
}
</style>
