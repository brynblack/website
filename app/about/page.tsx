import type { Metadata } from "next";
import Image from "next/image";
import { Content, ContentImage, TextColumn } from "@/components/components";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Brynley's Website! | About",
  description: "Cool things about me!",
};

const About = () => {
  return (
    <Content>
      <ContentImage>
        <TextColumn>
          <p className="!text-3xl font-medium">
            My name is{" "}
            <span className="text-pink-300">Brynley Llewellyn-Roux.</span>
          </p>
          <p>I am a software engineer based in Sydney, Australia.</p>
          <p>
            I have 6 years of programming experience and I&apos;m currently
            working at Matrix AI.
          </p>
          <p>
            You can check out more info about me by going to my GitHub{" "}
            <a
              href="https://github.com/brynblack"
              className="text-pink-300 underline"
            >
              here
            </a>
            .
          </p>
        </TextColumn>
        <Suspense fallback={<Loading />}>
          <Image
            src="/misc/pfp.png"
            alt="Profile Picture"
            width={192}
            height={192}
            className="rounded-full max-h-[192px] shadow-xl"
          />
        </Suspense>
      </ContentImage>
      <ContentImage>
        <Suspense fallback={<Loading />}>
          <Image
            src="/misc/icons.svg"
            alt="Grid of Programming Languages"
            width={554}
            height={161}
            className="max-sm:max-w-full max-w-[50%]"
          />
        </Suspense>
        <TextColumn>
          <p>
            I like to dabble a lot in various different technologies and
            languages.
          </p>
          <p>
            I enjoy working on many personal projects, and like to make cool
            things.
          </p>
          <p>Currently my favourite and most-used language is Rust.</p>
        </TextColumn>
      </ContentImage>
      <ContentImage>
        <TextColumn>
          <p>
            If it isn&apos;t obvious already I am a free and open source
            software advocate.
          </p>
          <p>
            I believe all software should be free and open source, so my
            commitment to this is to keep all of my projects such as this
            website open source.
          </p>
          <p>
            Speaking of, if you would like to see the source code for this
            website, head to{" "}
            <a
              href="https://github.com/brynblack/website"
              className="text-pink-300 underline"
            >
              this link
            </a>
            .
          </p>
        </TextColumn>
        <Suspense fallback={<Loading />}>
          <Image
            src="/socials/github.svg"
            alt="GitHub Logo"
            width={192}
            height={192}
            className="rounded-full h-[192px] dark:invert"
          />
        </Suspense>
      </ContentImage>
    </Content>
  );
};

export default About;
