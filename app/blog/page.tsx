import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import { Content } from "@/components/components";

require('dotenv').config();

export const metadata: Metadata = {
  title: "Brynley's Website! | Blog",
  description: "Keep in touch with what's happening.",
};

async function Notes() {
  const supabase = createClient(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_ANON_KEY ?? "");

  const { data: posts } = await supabase.from("posts").select();

  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}

const Blog = () => {
  return (
    <Content>
      <Notes/>
    </Content>
  )
};

export default Blog;
