<template>
  <main>
    <Infobox />
    <Arrow id="#about" />
    <div class="box">
      <span id="about">I have 6 years of programming experience and I'm<br> currently working at <span class="pink">Matrix AI.</span></span>
      <NuxtLink to="/about">| More info |</NuxtLink>
    </div>
    <div />
    <div class="box">
      <span>Made with love 🩷</span>
    </div>
  </main>
</template>

<style>
@keyframes bounce {
  0%   { transform: translateY(0px)   }
  25%  { transform: translateY(-10px) }
  50%  { transform: translateY(0px)   }
  75%  { transform: translateY(-10px) }
  100% { transform: translateY(0px)   }
}
.pink {
  color: var(--accent);
}
.pfp {
  width: 24rem;
  border-radius: 100%;
  margin-bottom: 2rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 12rem;
  gap: 9rem;
}
.box {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-size: 2rem;
  }
}
@media screen and (max-width: 600px) {
  main {
    margin-top: 6rem;
    gap: 3rem;
  }
}
</style>
