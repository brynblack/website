import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import Image from 'next/image';

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brynley's Website!",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={rubik.className + " flex flex-col w-dvh h-dvh"}>
        <NavBar/>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <nav className="flex justify-center border-b dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
      <div className="flex justify-between max-sm:justify-center items-center max-w-7xl w-full h-20 p-8">
        <Link href="/">
          <Image src="/trans_flag.svg" alt="Transgender Flag" width={32} height={32} className="rounded"/>
        </Link>
        <div className="flex gap-10 max-sm:hidden">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
