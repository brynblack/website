<script setup>
const props = defineProps({
  src: String,
  href: String,
  alt: String,
});
</script>

<template>
  <a :href="props.href">
    <NuxtImg :src="props.src" :alt="props.alt" />
  </a>
</template>
