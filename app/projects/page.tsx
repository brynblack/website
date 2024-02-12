import type { Metadata } from "next";
import { Card, Content, GridLayout } from "@/components/components";

export const metadata: Metadata = {
  title: "Brynley's Website! | Projects",
  description: "Cool things I've made!",
};

const Projects = () => {
  return (
    <Content>
      <GridLayout>
        <Card
          name="ole"
          desc="A fast, scalable online learning platform."
        />
        <Card
          name="chess"
          desc="A Rust implementation of Chess."
        />
        <Card
          name="cubicspeed"
          desc="A C++ OpenGL game I made for fun."
        />
        <Card
          name="realisticcraft"
          desc="A Minecraft modpack that makes the game realistic."
        />
        <Card
          name="transdotfiles"
          desc="My personal config files for my devices."
        />
        <Card
          name="modder-bot"
          desc="A discord.py moderation bot."
        />
        <Card
          name="funwithnumbers"
          desc="A reverse engineering school assignment in C++."
        />
        <Card
          name="timestop"
          desc="A Minecraft datapack that can freeze time."
        />
      </GridLayout>
      <p className="text-center">...and more! You can go to my <a href="https://github.com/brynblack" className="text-pink-400">GitHub</a> to see more of my work.</p>
    </Content>
  );
};

export default Projects;
