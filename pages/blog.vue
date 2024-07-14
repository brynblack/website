<script setup lang="ts">
useSeoMeta({
  title: "Blog",
  ogTitle: "Blog",
  description: "Catch up with what's happening in my life.",
  ogDescription: "Catch up with what's happening in my life.",
});
</script>

<template>
  <main>
    <Container>
      <div>
        <span>This blog is a <Pink>heavy WIP</Pink>.</span>
        <span>Here, have this catgirl instead. :3</span>
      </div>
      <img
        src="https://external-preview.redd.it/ASEE-uEwGHHstWWW2BH2vfJxw-clrRtetGyPrznOY44.png?auto=webp&s=395d2523b037e3e1a04d04d0ac13248f5c93c62e"
        class="catgirl"
      />
    </Container>
  </main>
</template>

<style scoped>
.catgirl {
  width: 10rem;
}
</style>
