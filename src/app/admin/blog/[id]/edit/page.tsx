import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from("blog_posts").select("*").eq("id", id).single();

  if (!post) notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-brand-dark-gray mb-6">Edit: {post.title}</h1>
      <p className="text-gray-500 text-sm">Edit form coming soon.</p>
    </div>
  );
}
