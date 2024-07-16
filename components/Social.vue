<script setup>
const props = defineProps({
  src: String,
  href: String,
  alt: String,
});
</script>

<template>
  <a :href="props.href">
    <NuxtImg :src="props.src" :alt="props.alt" width="30px" />
  </a>
</template>

<style scoped>
a:hover {
  transform: translateY(-5px);
}
</style>
