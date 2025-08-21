<script setup>
const props = defineProps({
  title: String,
  description: String,
  date: String,
  path: String,
});
</script>

<template>
  <NuxtLink :to="props.path">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <p>{{ props.date }}</p>
  </NuxtLink>
</template>

<style scoped>
</style>
