import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/navbar";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brynley's Website!",
  description: "My personal website.",
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
      <body className={`${rubik.className} flex flex-col w-dvh h-dvh`}>
        <NavBar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
