import { createClient } from '@supabase/supabase-js';

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  const { data: posts } = await supabase.from("posts").select();

  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}
