<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

useHead({
  title: post.value!.title,
});
</script>

<template>
  <main>
    <Container>
      <ContentRenderer :value="post || {}" />
    </Container>
  </main>
</template>
