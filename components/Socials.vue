<template>
  <div class="socials">
    <slot />
  </div>
</template>

<style>
.socials {
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    width: 1.75rem;

    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
