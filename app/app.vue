<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Brynley!` : "Brynley!";
  },
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "preload",
      as: "font",
      type: "font/woff2",
      href: "/font/Comfortaa.woff2",
      crossorigin: "anonymous",
    },
  ],
});
useSeoMeta({
  ogType: "website",
  ogUrl: "https://brynblack.me",
  ogTitle: "Brynley!",
  description: "The coolest software engineer in the world. For realsies. :3",
  ogDescription: "The coolest software engineer in the world. For realsies. :3",
  ogImage: "https://brynblack.me/img/pfp.jpeg",
  twitterCard: "summary_large_image",
  twitterTitle: "Brynley!",
  twitterDescription:
    "The coolest software engineer in the world. For realsies. :3",
  twitterImage: "https://brynblack.me/img/pfp.jpeg",
});
</script>

<template>
  <NuxtLoadingIndicator color="var(--accent)" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.325s,
    transform 0.325s;
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
