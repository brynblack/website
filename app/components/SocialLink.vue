<script setup lang="ts">
defineProps<{
  src: string;
  href: string;
  alt: string;
  height: number;
}>();
</script>

<template>
  <NuxtLink :href="href" target="_blank" rel="noopener noreferrer">
    <NuxtImg :src="src" :alt="alt" width="30" :height="height" />
  </NuxtLink>
</template>

<style scoped>
a {
  transition: transform var(--transition);

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
