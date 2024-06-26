import type { Metadata } from "next";
import { Card, Content, GridLayout } from "@/components/components";
import supabase from "@/utils/supabase/server";
import React from "react";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Brynley's Website! | Blog",
  description: "Keep in touch with what's happening.",
};

const Posts = async () => {
  const { data: posts } = await supabase.from("posts").select();

  return posts?.map((post: any) => {
    return (
      <React.Fragment key={post.id}>
        <Card
          name={post.title}
          desc={post.description}
          url={`/blog/${post.id}`}
        />
      </React.Fragment>
    );
  });
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
