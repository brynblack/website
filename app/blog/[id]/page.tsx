import { Content } from "@/components/components";
import supabase from "@/utils/supabase/server";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 30;

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { data: post } = await supabase
    .from("posts")
    .select()
    .match({ id })
    .single();
  if (!post) notFound();

  return {
    title: `Brynley's Website! | Blog | ${post.title}`,
    description: post.description,
  };
}

const Page = async ({ params: { id } }: Props) => {
  const { data: post } = await supabase
    .from("posts")
    .select()
    .match({ id })
    .single();
  if (!post) notFound();

  return (
    <Content>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">{post.title}</h1>
        <h2 className="text-lg">{post.description}</h2>
        <pre className="text-sm mt-2">{post.created_at}</pre>
        <div className="mt-8 max-w-screen-md w-full">
          {post.contents.split(/\r\n|\n|\r/gm).map((line: string) => {
            return (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            );
          })}
        </div>
        <Link className="underline mt-4" href="/blog">
          Return to Blog
        </Link>
      </div>
    </Content>
  );
};

export default Page;
