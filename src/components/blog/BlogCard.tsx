import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex gap-2 flex-wrap mb-3">
        {post.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="text-xl font-bold text-brand-dark-gray mb-2 line-clamp-2">
        <Link href={`/blog/${post.slug}`} className="hover:text-brand-dark-gray-light transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
        <span>{post.author}</span>
        <span>{formatDate(post.created_at)}</span>
      </div>
    </Card>
  );
}
