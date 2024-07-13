<script setup>
const props = defineProps({
  src: String,
  href: String,
});
</script>

<template>
  <a :href="props.href">
    <img :src="props.src" />
  </a>
</template>
