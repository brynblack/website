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
    <Container center>
      <div>
        <h1>My name is <Pink>Brynley Llewellyn-Roux</Pink>.</h1>
        <p>I am a software engineer based in Sydney, Australia.</p>
        <p>
          I have 7 years of programming experience and I'm currently working at
          <Pink>Matrix AI</Pink>.
        </p>
        <Socials>
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
        </Socials>
      </div>
      <img src="https://avatars.githubusercontent.com/u/49110391" class="pfp" />
    </Container>
    <Container center>
      <img class="short" src="public/img/icons.svg" />
      <div>
        <p>
          I like to dabble in various different technologies and languages. I
          have many personal projects, primarily low-level development for game
          engines and web dev.
        </p>
        <p>
          You can find all of my personal projects on
          <a href="https://github.com/brynblack">github</a>.
        </p>
      </div>
    </Container>
    <hr />
    <Container>
      <div>
        <h1>about me</h1>
        <ul>
          <li>19 years old, born in 2005</li>
          <li>i go by she/her pronouns</li>
          <li>studying software engineering @ UTS</li>
          <li>nixos enjoyer, uses nixos on all my devices</li>
          <li>likes spinny skirts :3</li>
        </ul>
      </div>
      <div>
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
      <div>
        <p>here's the website source code if you want it :3</p>
        <a href="https://github.com/brynblack/website">source code</a>
      </div>
    </Container>
  </main>
</template>

<style scoped>
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
@media screen and (max-width: 600px) {
  .short {
    width: 100%;
  }
}
</style>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 3.5rem;
  gap: 2rem;
}
hr {
  width: 100%;
  border: 1px dashed var(--accent-dark);
  max-width: var(--max-width);
}
@media (prefers-color-scheme: light) {
  hr {
    filter: invert();
  }
}
</style>
