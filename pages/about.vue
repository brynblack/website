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
      <img src="public/img/icons.svg">
      <div class="sub-cont">
        <p>I like to dabble a lot in various different technologies and languages.</p>
        <p>I enjoy working on many personal projects, and like to make cool things.</p>
        <p>Currently my favourite and most-used language is Rust.</p>
      </div>
    </div>
    <div class="container">
      <div class="sub-cont">
        <p>If it isn't obvious already I am a free and open source software advocate.</p>
        <p>I believe all software should be free and open source, so my commitment to this is to keep all of my projects such as this website open source.</p>
        <p>Speaking of, if you would like to see the source code for this website, head to this link.</p>
      </div>
      <img src="public/img/github.svg" class="pfp">
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 4rem;
  gap: 1rem;
}
.pfp {
  width: 12rem;  
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
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
  .container {
    flex-direction: column;
  }
}
</style>
