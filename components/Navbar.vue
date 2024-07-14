<template>
  <nav>
    <div class="content">
      <NuxtLink class="header" to="/">| brynblack |</NuxtLink>
      <div class="links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  backdrop-filter: blur(16px);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100dvw;

  .content {
    display: flex;
    justify-content: space-between;
    max-width: calc(var(--max-width) + 4rem);
    padding: 2rem;
    width: 100%;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: var(--accent);
      }
    }

    .router-link-exact-active {
      color: var(--accent);
      font-weight: bold;
    }

    .header {
      color: var(--fg);
      font-weight: normal;

      &:hover {
        color: var(--accent);
      }
    }

    @media (prefers-color-scheme: light) {
      .header {
        color: var(--bg);
      }
    }

    .links {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
