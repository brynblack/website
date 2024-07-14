<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <Navbar />
  <SpeedInsights />
  <slot />
</template>
