<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Brynley!` : "Brynley!";
  },
  htmlAttrs: {
    lang: "en",
  },
});
useSeoMeta({
  ogTitle: "Brynley!",
  description: "The coolest software engineer in the world. For realsies. :3",
  ogDescription: "The coolest software engineer in the world. For realsies. :3",
  ogImage: "https://brynblack.me/img/pfp.jpeg",
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.325s;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(-40px);
  transition-timing-function: ease-out;
}
.page-leave-to {
  opacity: 0;
  transform: translateX(40px);
  transition-timing-function: ease-in;
}
</style>
