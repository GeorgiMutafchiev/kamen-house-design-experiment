import type { Metadata } from "next";
import Link from "next/link";
import { journal } from "@/lib/content";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return <>
    <header className="journal-opening"><div><p className="index-mark">05 / Field notes</p><h1>From the house and the path.</h1></div><p>Short notes about weather, food and getting around. No destination list and no borrowed authority.</p></header>
    <ol className="journal-index">{journal.map((post, index) => <li key={post.slug}><Link href={`/journal/${post.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><time>{post.date}</time><h2>{post.title}</h2><p>{post.summary}</p><b aria-hidden="true">→</b></Link></li>)}</ol>
  </>;
}
