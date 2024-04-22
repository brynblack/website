import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

const Home = () => {
  return (
    <main className="flex flex-col items-center max-sm:p-4 max-sm:pt-24 p-8 pt-56 gap-12 slideright ease-out transition-all duration-500">
      <Suspense fallback={<Loading />}>
        <Image
          src="/misc/pfp.png"
          alt="GitHub Logo"
          width={384}
          height={384}
          className="rounded-full max-h-[384px] shadow-xl"
        />
      </Suspense>
      <div className="flex flex-col items-center gap-2 max-sm:m-8 max-sm:ml-4 slideright">
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
