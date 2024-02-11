import { Card, Content, GridLayout, Title } from "../components";

const Home = () => {
  return (
    <Content>
      <Title>My Projects</Title>
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
      </GridLayout>
      <p>... And more! You can go to my <a href="https://github.com/brynblack" className="text-pink-400">GitHub</a> to see more projects.</p>
    </Content>
  );
};

export default Home;
