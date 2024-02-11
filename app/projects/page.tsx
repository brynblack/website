import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className="flex flex-col items-center p-8 gap-12 slideright">
      <h1 className="font-bold text-4xl pt-4">My Projects</h1>
      <div className="grid grid-cols-2 gap-8 max-w-screen-xl w-full">
        <Card name="ole" desc="A fast, scalable online learning platform." />
        <Card name="chess" desc="A Rust implementation of Chess." />
        <Card name="cubicspeed" desc="A C++ OpenGL game I made for fun." />
        <Card name="realisticcraft" desc="A Minecraft modpack that makes the game realistic." />
        <Card name="transdotfiles" desc="My personal config files for my devices." />
        <Card name="modder-bot" desc="A discord.py moderation bot." />
      </div>
      <h1>... And more! You can go to my <a href="https://github.com/brynblack" className="text-pink-400">GitHub</a> to see more projects.</h1>
    </main>
  );
}

function Card(props: { name: string, desc: string }) {
  return (
    <a href={"https://github.com/brynblack/" + props.name} className="border border-neutral-200 dark:border-neutral-800 rounded-lg h-36 p-4 flex flex-col justify-end hover:scale-105 transition-transform duration-100 shadow-xl">
      <div>
        <div className={fira_code.className + " font-bold"}>
          {props.name}
        </div>
        <div>
          {props.desc}
        </div>
      </div>
    </a>
  );
}
