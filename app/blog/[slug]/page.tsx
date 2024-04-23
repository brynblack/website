import { Content } from "@/components/components";
import { createClient } from "@/utils/supabase/server";

const Page = async ({ params }: { params: { slug: string } }) => {
  const supabase = createClient();

  const { data } = await supabase.from("posts").select().eq("id", params.slug);

  return (
    <Content>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">{data?.at(0).title}</h1>
        <h2 className="text-lg">{data?.at(0).description}</h2>
        <p className="mt-8">{data?.at(0).contents}</p>
      </div>
    </Content>
  );
};

export default Page;
