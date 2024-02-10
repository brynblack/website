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
      <body className={rubik.className}>
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
    <nav className="border-b border-neutral-800">
      <div className="flex justify-between items-center w-full p-8">
        <Link href="/">
          <Image src="/trans_flag.svg" alt="Transgender Flag" width={32} height={32} className="rounded"/>
        </Link>
        <div className="flex gap-10">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
