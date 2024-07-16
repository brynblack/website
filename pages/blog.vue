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
      <NuxtImg
        src="img/catgirl.webp"
        alt="Image of a catgirl."
        width="150px"
        class="catgirl"
      />
    </Container>
  </main>
</template>
