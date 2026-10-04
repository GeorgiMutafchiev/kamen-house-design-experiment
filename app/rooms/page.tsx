import type { Metadata } from "next";
import Link from "next/link";
import { rooms } from "@/lib/content";
import { ConceptImage } from "../ui/concept-image";
import { PageIntro } from "../ui/page-intro";

export const metadata: Metadata = { title: "Rooms", description: "The eleven-room register at KAMEN HOUSE." };

export default function RoomsPage() {
  return (
    <>
      <PageIntro compact index="01 / 11 rooms" title="Rooms 01–11" lead="East Window gets first light. North Room stays cooler. Garden Room avoids the stairs. Quiet Room is made for one reader." note="No live availability is shown." />
      <section className="rooms-lead register-grid">
        <ConceptImage src="/images/room-concept.webp" alt="Concept study of a modest room with a mountain-facing window" caption="Room facing the spruce slope — generated interior study." className="rooms-image" priority sizes="(max-width: 768px) 100vw, 54vw" />
        <dl className="stay-facts"><div><dt>Check-in</dt><dd>15:00–20:00</dd></div><div><dt>Breakfast</dt><dd>08:00–10:00</dd></div><div><dt>Minimum stay</dt><dd>Two nights</dd></div><div><dt>Inside Room 06</dt><dd>No internal steps</dd></div></dl>
      </section>
      <section className="room-register full-register" aria-label="All rooms">
        <ol>
          {rooms.map((room) => (
            <li key={room.slug}><Link href={`/rooms/${room.slug}`}><span>{room.number}</span><strong>{room.name}</strong><span>{room.outlook}</span><span>{room.bed}</span><span aria-hidden="true">→</span></Link><p>{room.note}</p></li>
          ))}
        </ol>
      </section>
      <aside className="practical-band register-grid"><p className="chapter-number">Finding a fit</p><h2>Check the dates and keep a copy.</h2><p>The inquiry preview validates your details locally. It does not transmit them or claim that a room is available.</p><Link className="text-action light" href="/stay">Open the inquiry preview →</Link></aside>
    </>
  );
}
