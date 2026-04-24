<script setup lang="ts">
const props = defineProps<{
  src: string;
  href: string;
  alt: string;
  height: string;
}>();
</script>

<template>
  <NuxtLink :href="props.href">
    <NuxtImg
      :src="props.src"
      :alt="props.alt"
      width="30px"
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
