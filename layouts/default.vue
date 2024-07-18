<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <Navbar />
  <SpeedInsights />
  <slot />
  <Footer />
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 3.5rem;
  gap: 2rem;
}
hr {
  width: 100%;
  border: 1px dashed var(--accent-dark);
  max-width: var(--max-width);

  @media (prefers-color-scheme: light) {
    & {
      filter: invert(100%) grayscale(100%);
    }
  }
}
.container > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
