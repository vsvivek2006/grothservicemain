import { redirect } from "next/navigation";

interface BlogPostIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostIdPage({ params }: BlogPostIdPageProps) {
  const { id } = await params;
  redirect(`/admin/blog/${id}/edit`);
}
