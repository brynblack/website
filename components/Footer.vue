<template>
  <footer>
    <div>
      <span>made with love 🩷</span>
      <span
        >anonymous analytics by
        <NuxtLink to="https://github.com/vercel/analytics">
          <code>@vercel/analytics</code>
        </NuxtLink></span
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  width: 100dw;
  padding: 0 2rem 2rem 2rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    max-width: var(--max-width);
  }
}
</style>
