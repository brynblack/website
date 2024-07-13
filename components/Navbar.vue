<template>
  <nav>
    <div class="content">
      <NuxtLink class="header" to="/">| brynblack |</NuxtLink>
      <div class="links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
  </nav>
  <div class="spacer" />
</template>

<style scoped>
.router-link-exact-active {
  color: var(--accent);
}
.header {
  color: var(--fg);

  &:hover {
    color: var(--accent);
  }
}
nav {
  backdrop-filter: blur(16px);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100dvw;

  .content {
    display: flex;
    justify-content: space-between;
    max-width: 75rem;
    padding: 2rem;
    width: 100%;

    .links {
      display: flex;
      gap: 2rem;
    }
  }
}
@media (prefers-color-scheme: light) {
  .header {
    color: var(--bg);
  }
}
</style>
