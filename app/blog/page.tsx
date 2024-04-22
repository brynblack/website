import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import { Card, Content, GridLayout } from "@/components/components";

require("dotenv").config();

export const metadata: Metadata = {
  title: "Brynley's Website! | Blog",
  description: "Keep in touch with what's happening.",
};

const Posts = async () => {
  const supabase = createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_ANON_KEY ?? "",
  );

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
