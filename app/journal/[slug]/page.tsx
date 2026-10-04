import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { journal } from "@/lib/content";
import { ConceptImage } from "../../ui/concept-image";

export function generateStaticParams() { return journal.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((item) => item.slug === slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journal.find((item) => item.slug === slug);
  if (!post) notFound();
  return <article className="article"><header><p>Field note · {post.date}</p><h1>{post.title}</h1><p>{post.summary}</p></header><ConceptImage src={post.image} alt={post.imageAlt} caption={post.imageCaption} className="article-image" priority sizes="(max-width: 768px) 100vw, 70vw" /><div className="article-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h2>{post.subheading}</h2>{post.after.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>;
}
