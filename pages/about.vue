<template>
  <main>
    <div class="container">
      <div class="sub-cont">
        <h1>My name is <span class="pink">Brynley Llewellyn-Roux</span>.</h1>
        <p>I am a software engineer based in Sydney, Australia.</p>
        <p>I have 6 years of programming experience and I'm currently working at <span class="pink">Matrix AI</span>.</p>
      </div>
      <img src="https://avatars.githubusercontent.com/u/49110391" class="pfp">
    </div>
    <div class="container">
      <img class="short" src="public/img/icons.svg">
      <div class="sub-cont">
        <p>I like to dabble in various different technologies and languages. I have many personal projects, primarily low-level development for game engines and web dev.</p>
        <p>You can find all of my personal projects on <a class="link" href="https://github.com/brynblack">github</a>.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
hr {
  width: 100%;
  border: 1px dashed #2a2a2a;
  max-width: 80rem;
}
main {
  margin-top: 4rem;
  gap: 1rem;
}
.pfp {
  width: 12rem;
}
.short {
  width: 50%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 72rem;
  width: 100%;
  gap: 2rem;

  .sub-cont {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1rem;
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
</style>
