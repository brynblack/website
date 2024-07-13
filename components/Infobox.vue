<template>
  <div class="infobox">
    <img src="https://avatars.githubusercontent.com/u/49110391" class="pfp">
    <h1>Hi there, I'm <span class="pink">Brynley</span>.</h1>
    <h2>I am a software engineer based in Sydney, Australia.</h2>
    <div class="socials">
      <Social src="img/github.svg" href="https://github.com/brynblack" />
      <Social src="img/youtube.svg" href="https://www.youtube.com/@brynblack9433" />
      <Social src="img/fedi.svg" href="https://woem.men/@brynblack" />
      <Social src="img/twitch.svg" href="https://twitch.tv/brynblack" />
      <Social src="img/steam.svg" href="https://steamcommunity.com/id/brynblack" />
    </div>
  </div>
</template>

<style>
.infobox {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 0;

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

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    line-height: 2rem;
    font-weight: bold;
  }
}
</style>
