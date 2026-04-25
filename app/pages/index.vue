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
          I have
          <Pink>7 years</Pink>
          of programming experience and many years industry experience.
        </p>
        <Socials>
          <Social
            src="img/github.svg"
            href="https://github.com/brynblack"
            alt="GitHub Logo"
            :height="30"
          />
          <Social
            src="img/modrinth.svg"
            href="https://modrinth.com/user/brynblack"
            alt="Modrinth Logo"
            :height="30"
          />
          <Social
            src="img/youtube.svg"
            href="https://www.youtube.com/@brynblackk"
            alt="YouTube Logo"
            :height="20"
          />
          <Social
            src="img/linkedin.svg"
            href="https://linkedin.com/in/brynley-llewellyn-roux-b16184231"
            alt="LinkedIn Logo"
            :height="30"
          />
        </Socials>
      </div>
      <NuxtImg
        src="img/pfp.jpeg"
        alt="Profile Picture"
        width="192"
        height="192"
        sizes="sm:96px md:192px"
        quality="80"
        format="webp"
        class="pfp"
      />
    </Container>
    <Container center>
      <NuxtImg
        src="img/icons.svg"
        alt="Grid of various icons."
        width="554"
        height="161"
        class="icons"
      />
      <div>
        <p>
          I like to dabble in various different technologies and languages. I
          have many personal projects, primarily low-level development for game
          engines and web dev.
        </p>
        <p>
          You can find all of my personal projects on
          <NuxtLink href="https://github.com/brynblack">github</NuxtLink>.
        </p>
      </div>
    </Container>
    <hr />
    <Container>
      <div>
        <h2>about me</h2>
        <ul>
          <li>20 years old</li>
          <li>i go by she/her pronouns</li>
          <li>studying software engineering</li>
          <li>nixos enjoyer, uses nixos on all my devices</li>
          <li>likes spinny skirts :3</li>
        </ul>
      </div>
      <div>
        <h2>langs i know</h2>
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
        <p>
          <NuxtLink href="https://github.com/brynblack/website"
            >source code</NuxtLink
          >
        </p>
      </div>
    </Container>
    <hr />
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
