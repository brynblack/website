<script setup lang="ts">
useHead({
  title: "Home",
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
          <Social
            src="img/github.svg"
            href="https://github.com/brynblack"
            alt="GitHub Logo"
            height="30px"
          />
          <Social
            src="img/youtube.svg"
            href="https://www.youtube.com/@brynblack9433"
            alt="YouTube Logo"
            height="20px"
          />
          <Social
            src="img/fedi.svg"
            href="https://woem.men/@brynblack"
            alt="Fediverse Logo"
            height="30px"
            rel="me"
          />
          <Social
            src="img/twitch.svg"
            href="https://twitch.tv/brynblack"
            alt="Twitch Logo"
            height="34px"
          />
          <Social
            src="img/steam.svg"
            href="https://steamcommunity.com/id/brynblack"
            alt="Steam Logo"
            height="30px"
          />
        </Socials>
      </div>
      <NuxtImg
        src="img/pfp.jpeg"
        alt="Profile Picture"
        width="192px"
        height="192px"
        sizes="sm:96px md:192px"
        quality="80"
        format="webp"
        class="pfp"
      />
    </Container>
    <Container center>
      <NuxtImg src="img/icons.svg" alt="Grid of various icons." class="icons" />
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
  border-radius: 100%;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.icons {
  width: 50%;

  @media screen and (max-width: 640px) {
    & {
      width: 100%;
    }
  }
}
</style>
