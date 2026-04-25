<script setup lang="ts">
const props = defineProps<{
  src: string;
  href: string;
  alt: string;
  height: number;
}>();
</script>

<template>
  <NuxtLink :href="props.href" target="_blank" rel="noopener noreferrer">
    <NuxtImg
      :src="props.src"
      :alt="props.alt"
      width="30"
      :height="props.height"
    />
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
