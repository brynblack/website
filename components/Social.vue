<script setup>
const props = defineProps({
  src: String,
  href: String,
});
</script>

<template>
  <a :href="props.href">
    <NuxtImg :src="props.src" />
  </a>
</template>
