<template>
  <span class="skeleton" :class="variant" :style="{ width: width, height: height }"></span>
</template>

<script setup lang="ts">
interface Props {
  variant: 'text' | 'circle' | 'rectangle' | 'rounded'
  width?: string | number
  height?: string | number
}

defineProps<Props>()
</script>

<style scoped>
.skeleton {
  display: block;
  background: #ddd;
  width: 100%;
  height: 1.2em;
  font-size: 1rem;
  animation: loading 1s infinite alternate;
}

.skeleton.text {
  height: 0.8em;
  border-radius: 4px/6.7px;
}

.skeleton.rectangle {
  height: 1em;
}

.skeleton.rounded {
  border-radius: var(--border-radius);
}

.skeleton.circle {
  border-radius: 50%;
}

@keyframes loading {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
