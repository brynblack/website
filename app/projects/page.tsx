import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className="flex justify-center p-8">
      <div className="grid grid-cols-2 gap-8 max-w-screen-xl w-full">
        <Card name="ole" desc="A fast, scalable online learning platform." />
        <Card name="chess" desc="A Rust implementation of the famous game Chess." />
        <Card name="cubicspeed" desc="A C++ OpenGL game I made for fun." />
        <Card name="realisticcraft" desc="Taking Minecraft realism to the next level." />
      </div>
    </main>
  );
}

function Card(props: { name: string, desc: string }) {
  return (
    <a href={"https://github.com/brynblack/" + props.name} className="border border-neutral-200 dark:border-neutral-800 rounded-lg h-36 p-4 flex flex-col justify-end">
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
