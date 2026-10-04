import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "@/lib/content";
import { ConceptImage } from "../../ui/concept-image";

export function generateStaticParams() { return rooms.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  return room ? { title: room.name, description: room.note } : {};
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  if (!room) notFound();
  const index = rooms.findIndex((item) => item.slug === slug);
  const previous = rooms[(index - 1 + rooms.length) % rooms.length];
  const next = rooms[(index + 1) % rooms.length];
  return (
    <>
      <header className="room-opening register-grid">
        <p className="index-mark">Room {room.number} / 11</p><h1>{room.name}</h1><p className="page-lead">{room.note}</p>
        <dl className="room-key"><div><dt>Sleeps</dt><dd>{room.sleeps}</dd></div><div><dt>Bed</dt><dd>{room.bed}</dd></div><div><dt>Faces</dt><dd>{room.outlook}</dd></div></dl>
      </header>
      <ConceptImage src={room.image} alt={room.imageAlt} caption={room.imageCaption} className="room-hero" priority sizes="100vw" />
      <section className="room-detail register-grid"><p className="chapter-number">Inside</p><div className="prose">{room.details.map((detail) => <p key={detail}>{detail}</p>)}</div><dl className="fact-stack"><div><dt>Floor</dt><dd>{room.floor}</dd></div><div><dt>Bathroom</dt><dd>{room.bathroom}</dd></div><div><dt>Sound</dt><dd>{room.sound}</dd></div></dl></section>
      <nav className="room-neighbours" aria-label="Other rooms"><Link href={`/rooms/${previous.slug}`}>← {previous.number} {previous.name}</Link><Link href="/stay">Open inquiry preview</Link><Link href={`/rooms/${next.slug}`}>{next.number} {next.name} →</Link></nav>
    </>
  );
}
