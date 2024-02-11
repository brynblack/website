import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const Title = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <h1 className="font-bold text-4xl pt-4">
      {children}
    </h1>
  );
};

export const Content = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex flex-col items-center max-sm:p-4 max-sm:pt-24 p-8 pt-24 gap-12 slideright ease-out transition-all duration-500">
      {children}
    </main>
  );
};

export const ContentImage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-between items-center gap-12 max-w-screen-xl w-full">
      {children}
    </div>
  );
};

export const TextColumn = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col gap-2 *:text-xl">
      {children}
    </div>
  );
};

export const GridLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-2 max-sm:flex max-sm:flex-wrap max-sm:*:w-full gap-4 max-w-screen-xl w-full">
      {children}
    </div>
  );
};

export const Card = (props: {
  name: string,
  desc: string,
}) => {
  return (
    <a href={`https://github.com/brynblack/${props.name}`} className="border border-neutral-200 dark:border-neutral-800 dark:hover:border-white rounded-lg h-36 p-4 flex flex-col justify-end transition-border duration-100 shadow hover:shadow-xl">
      <span className={`${fira_code.className} font-bold`}>
        {props.name}
      </span>
      <span>
        {props.desc}
      </span>
    </a>
  );
};

