<script setup>
const props = defineProps({
  id: String
})
</script>

<template>
  <a class="arrow" :href="props.id">
    <img src="public/img/arrow.svg">
  </a>
</template>

<style scoped>
.arrow {
  display: grid;
  place-items: center;
  background-color: var(--accent);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation-duration: 2s;
  animation-name: bounce;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;

  img {
    width: 2rem;
    height: 2rem;
    transition-duration: 200ms;
  }

  &:hover img {
    filter: invert();
  }
}
</style>
