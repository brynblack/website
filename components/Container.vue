<script setup lang="ts">
defineProps({
  center: Boolean,
});
</script>

<template>
  <div :class="['container', { center: center }]">
    <slot />
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
  width: 100%;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
.center {
  align-items: center;
}
</style>
