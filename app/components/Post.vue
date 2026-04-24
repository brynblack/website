<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  date: string;
  path: string;
}>();
</script>

<template>
  <NuxtLink :to="props.path">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <p>{{ props.date }}</p>
  </NuxtLink>
</template>
