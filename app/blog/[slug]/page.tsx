import { Content } from "@/components/components";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const supabase = createClient();

  const { data } = await supabase.from("posts").select().eq("id", params.slug);

  const post = data?.at(0);

  if (!post) return notFound();

  return (
    <Content>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">{post.title}</h1>
        <h2 className="text-lg">{post.description}</h2>
        <pre className="text-sm mt-2">{post.created_at}</pre>
        <div className="mt-8 max-w-screen-md w-full">
          {post.contents.split(/\r\n|\n|\r/gm).map((line: string) => {
            return (
              <React.Fragment>
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
