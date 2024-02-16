import Image from "next/image";

const Home = () => {
  return (
    <main className="flex h-full">
      <div className="flex flex-col gap-2 absolute bottom-0 m-12 max-sm:m-8 max-sm:ml-4 slideright">
        <h1 className="text-4xl max-sm:text-2xl font-medium">
          Welcome to my website!
        </h1>
        <h3 className="text-xl max-sm:text-lg">Made with love by Brynley 💜</h3>
        <div className="flex gap-4 items-center dark:invert hover:dark:*:invert *:grayscale hover:*:grayscale-0 *:transition-all duration-50">
          <a href="https://github.com/brynblack" aria-label="GitHub">
            <Image
              src="/socials/github.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.youtube.com/@brynblack9433" aria-label="YouTube">
            <Image
              src="/socials/youtube.svg"
              alt="YouTube Logo"
              width={24}
              height={24}
            />
          </a>
          <a href="https://tech.lgbt/@brynblack" aria-label="Mastodon" rel="me">
            <Image
              src="/socials/mastodon.svg"
              alt="Mastodon Logo"
              width={24}
              height={24}
            />
          </a>
          <a href="https://twitch.tv/brynblack" aria-label="Twitch">
            <Image
              src="/socials/twitch.svg"
              alt="Twitch Logo"
              width={24}
              height={24}
            />
          </a>
          <a href="https://steamcommunity.com/id/brynblack" aria-label="Steam">
            <Image
              src="/socials/steam.svg"
              alt="Steam Logo"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
