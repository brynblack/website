<script setup lang="ts">
useHead({
  title: "Blog",
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
    <hr />
  </main>
</template>
