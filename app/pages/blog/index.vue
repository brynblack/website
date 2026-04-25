<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryCollection("blog").order("date", "DESC").all();
});

useHead({
  title: "Blog",
});
</script>

<template>
  <main>
    <Container class="posts">
      <Post
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :path="post.path"
      />
      <p v-if="!posts?.length">No posts yet. Check back soon!</p>
    </Container>
  </main>
</template>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
}
</style>
