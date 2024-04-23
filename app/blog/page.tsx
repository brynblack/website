import type { Metadata } from "next";
import { Card, Content, GridLayout } from "@/components/components";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Brynley's Website! | Blog",
  description: "Keep in touch with what's happening.",
};

const Posts = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("posts").select();

  const posts = data?.map((post) => {
    return (
      <pre>
        <Card
          name={post.title}
          desc={post.description}
          url={`/blog/${post.id}`}
        />
      </pre>
    );
  });

  return posts;
};

const Blog = () => {
  return (
    <Content>
      <GridLayout>
        <Posts />
      </GridLayout>
    </Content>
  );
};

export default Blog;
