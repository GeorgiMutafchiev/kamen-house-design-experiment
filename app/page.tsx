import Link from "next/link";
import { ConceptImage } from "./ui/concept-image";
import { rooms } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="home-opening register-grid">
        <p className="index-mark">Bulgaria<br />Rhodope Mountains</p>
        <h1>Eleven rooms<br />above a fire kitchen.</h1>
        <p className="opening-lead">A small mountain house for walking, eating, reading and staying a few days.</p>
        <Link className="text-action" href="/stay">Plan a stay <span aria-hidden="true">→</span></Link>
        <ConceptImage src="/images/house-concept.webp" alt="Concept study of a stone and timber mountain house beside a wet path at dusk" caption="Exterior approach in autumn rain — generated concept study, not a real property." className="home-hero" priority sizes="(max-width: 768px) 100vw, 78vw" />
        <aside className="weather-note"><span>Autumn note</span><strong>Wet paths. Cold evenings.</strong><p>Bring boots with a proper sole. The stove is lit before dusk.</p></aside>
      </section>

      <section className="chapter register-grid" aria-labelledby="home-house">
        <p className="chapter-number">01 / The house</p>
        <h2 id="home-house">One long table and eleven different rooms.</h2>
        <div className="chapter-copy"><p>Its eleven rooms are simple, warm and different from one another.</p><p>Breakfast is downstairs. Dinner follows what is good that week and what the fire can do well. The rest of the day is yours.</p></div>
        <Link className="text-action" href="/house">Read about the house →</Link>
      </section>

      <section className="room-register" aria-labelledby="home-rooms">
        <div className="section-heading register-grid"><p className="chapter-number">02 / Rooms</p><h2 id="home-rooms">The register</h2><p>Eleven rooms. No live availability. Use the inquiry preview to check dates and note what might fit.</p></div>
        <ol>
          {rooms.slice(0, 5).map((room) => (
            <li key={room.slug}><Link href={`/rooms/${room.slug}`}><span>{room.number}</span><strong>{room.name}</strong><span>{room.outlook}</span><span>{room.sleeps} guests</span><span aria-hidden="true">→</span></Link></li>
          ))}
        </ol>
        <Link className="register-more" href="/rooms">See all eleven rooms →</Link>
      </section>

      <section className="split-chapter">
        <ConceptImage src="/images/kitchen-concept.webp" alt="Concept study of hands preparing peppers beside a wood-fired stove" caption="Peppers and beans beside the stove — generated kitchen study." className="wide-image" sizes="(max-width: 768px) 100vw, 62vw" />
        <div className="split-copy"><p className="chapter-number">03 / Fire kitchen</p><h2>The stove is lit at 15:00.</h2><p>Bread, beans, river fish, peppers and orchard fruit move through the menu as the season changes.</p><p className="fact-line"><span>Dinner</span><strong>19:30, one sitting</strong></p><Link className="text-action" href="/food">At the kitchen table →</Link></div>
      </section>

      <section className="field-note register-grid">
        <p className="chapter-number">04 / Outside</p>
        <ConceptImage src="/images/path-concept.webp" alt="Concept study of a wet forest path marked on a stone" caption="Wet roots on a marked forest path — generated field study." className="portrait-image" sizes="(max-width: 768px) 100vw, 38vw" />
        <div><h2>The south path begins at the lower gate.</h2><p>It climbs through beech and spruce. After rain, roots and stone stay slick well into the afternoon.</p><Link className="text-action" href="/around">Notes from around the house →</Link></div>
      </section>
    </>
  );
}
