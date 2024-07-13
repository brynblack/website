<script setup lang="ts">
useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "My personal website.",
  ogDescription: "My personal website.",
});
</script>

<template>
  <main>
    <div class="container">
      <div class="sub-cont">
        <h1>My name is <span class="pink">Brynley Llewellyn-Roux</span>.</h1>
        <p>I am a software engineer based in Sydney, Australia.</p>
        <p>
          I have 7 years of programming experience and I'm currently working at
          <span class="pink">Matrix AI</span>.
        </p>
        <div class="socials">
          <Social src="img/github.svg" href="https://github.com/brynblack" />
          <Social
            src="img/youtube.svg"
            href="https://www.youtube.com/@brynblack9433"
          />
          <Social src="img/fedi.svg" href="https://woem.men/@brynblack" />
          <Social src="img/twitch.svg" href="https://twitch.tv/brynblack" />
          <Social
            src="img/steam.svg"
            href="https://steamcommunity.com/id/brynblack"
          />
        </div>
      </div>
      <img src="https://avatars.githubusercontent.com/u/49110391" class="pfp" />
    </div>
    <div class="container">
      <img class="short" src="public/img/icons.svg" />
      <div class="sub-cont">
        <p>
          I like to dabble in various different technologies and languages. I
          have many personal projects, primarily low-level development for game
          engines and web dev.
        </p>
        <p>
          You can find all of my personal projects on
          <a class="link" href="https://github.com/brynblack">github</a>.
        </p>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="sub-cont">
        <h1>about me</h1>
        <ul>
          <li>19 years old, born in 2005</li>
          <li>i go by she/her pronouns</li>
          <li>studying software engineering @ UTS</li>
          <li>nixos enjoyer, uses nixos on all my devices</li>
          <li>likes spinny skirts :3</li>
        </ul>
      </div>
      <div class="sub-cont">
        <h1>langs i know</h1>
        <ul>
          <li>rust</li>
          <li>c++</li>
          <li>ts/js</li>
          <li>html/css</li>
          <li>...a lot more (check out my github to see more)</li>
          <li>eng, fr, jp</li>
        </ul>
      </div>
      <div class="sub-cont">
        <p>here's the website source code if you want it :3</p>
        <a class="link" href="https://github.com/brynblack/website"
          >source code</a
        >
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </main>
</template>

<style scoped>
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
hr {
  width: 100%;
  border: 1px dashed #2a2a2a;
  max-width: var(--max-width);
}
main {
  margin-top: 3.5rem;
  gap: 2rem;
}
.pfp {
  width: 12rem;
  border-radius: 100%;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.short {
  width: 50%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  width: 100%;
  gap: 2rem;

  .sub-cont {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1rem;
  }
}
@media (prefers-color-scheme: light) {
  hr {
    filter: invert();
  }
}
@media screen and (max-width: 600px) {
  .short {
    width: 100%;
  }
  .container {
    flex-direction: column;
  }
}
.pink {
  color: var(--accent);
}
</style>

<style>
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
  gap: 1rem;

  span {
    font-size: 2rem;
  }
}
@media screen and (max-width: 600px) {
  main {
    margin-top: 6rem;
    gap: 3rem;
  }
  .box {
    span {
      font-size: 1.25rem;
    }
  }
}
</style>
