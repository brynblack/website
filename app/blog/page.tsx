import type { Metadata } from "next";
import { Content, Title } from "../components";

export const metadata: Metadata = {
  title: "Brynley's Website! | Blog",
  description: "Keep in touch with what's happening.",
};

const Blog = () => {
  return (
    <Content>
      <Title>My Blog</Title>
    </Content>
  );
};

export default Blog;
