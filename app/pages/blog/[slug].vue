<script setup lang="ts">
const slug = useRoute().params.slug as string;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

if (!post.value) {
  throw createError({ status: 404, statusText: "Post not found" });
}

useHead({ title: post.value.title });
useSeoMeta({
  ogTitle: post.value.title,
  ogUrl: `https://brynblack.me/blog/${slug}`,
  description: post.value.description,
  ogDescription: post.value.description,
});
</script>

<template>
  <main>
    <BaseContainer>
      <ContentRenderer v-if="post" class="prose" :value="post" />
    </BaseContainer>
  </main>
</template>

<style>
.prose {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;

  pre {
    overflow-x: auto;
  }
}
</style>
