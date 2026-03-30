import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // TODO: Fetch post from Supabase
  notFound();
  return null;
}
