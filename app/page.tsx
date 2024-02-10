export default function Page() {
  return (
    <main>
      <div className="flex flex-col gap-2 absolute bottom-0 m-12">
        <h1 className="text-4xl font-semibold">Welcome to my website!</h1>
        <h3 className="text-xl">Made with love by Brynley 💜</h3>
        <div className="flex gap-4 items-center *:w-6 *:grayscale">
          <a href="https://github.com/brynblack" aria-label="GitHub">
            <img src="/github.svg" alt="GitHub Logo"/>
          </a>
          <a href="https://www.youtube.com/@brynblack9433" aria-label="YouTube">
            <img src="/youtube.svg" alt="YouTube Logo"/>
          </a>
          <a href="https://tech.lgbt/@brynblack" aria-label="Mastodon">
            <img src="/mastodon.svg" alt="Mastodon Logo"/>
          </a>
          <a href="https://twitch.tv/brynblack" aria-label="Twitch">
            <img src="/twitch.svg" alt="Twitch Logo"/>
          </a>
          <a href="https://steamcommunity.com/id/brynblack" aria-label="Steam">
            <img src="/steam.svg" alt="Steam Logo"/>
          </a>
        </div>
      </div>
    </main>
  );
}
