<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  date: string;
  path: string;
}>();
</script>

<template>
  <NuxtLink :to="path">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p class="date">
      {{
        new Date(date).toLocaleDateString("en-AU", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      }}
    </p>
  </NuxtLink>
</template>

<style scoped>
a {
  color: var(--fg-color);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    transition: color var(--transition);
  }

  &:hover {
    filter: none;
    h2 {
      color: var(--accent);
    }
  }

  @media (prefers-color-scheme: light) {
    color: var(--bg-color);
  }
}

.date {
  color: var(--accent);
  font-size: 0.875rem;
}
</style>
