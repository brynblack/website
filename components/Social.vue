<script setup>
const props = defineProps({
  src: String,
  href: String,
  alt: String,
  height: String,
});
</script>

<template>
  <NuxtLink :href="props.href">
    <NuxtImg
      :src="props.src"
      :alt="props.alt"
      width="30px"
      :height="props.height"
    />
  </NuxtLink>
</template>

<style scoped>
a:hover {
  transform: translateY(-5px);
}
</style>
