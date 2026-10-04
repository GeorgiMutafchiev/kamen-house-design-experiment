import Link from "next/link";
import { ConceptImage } from "./ui/concept-image";
import { rooms } from "@/lib/content";

export default function HomePage() {
  return <>
    <section className="sp-home-opening">
      <div className="sp-coordinate"><span>RHODOPE MOUNTAINS / BULGARIA</span><span>11 ROOMS / 01 FIRE KITCHEN</span></div>
      <h1>Eleven rooms.<br />The fire downstairs.</h1>
      <div className="sp-opening-bottom"><p>A small mountain house for walking out, coming back, and eating together.</p><Link href="/house">ENTER THE HOUSE ↓</Link></div>
      <ConceptImage src="/images/house-concept.webp" alt="Generated concept study of a stone mountain house at dusk" caption="Exterior approach — generated architectural study of a fictional property." className="sp-home-hero" priority sizes="100vw" />
    </section>

    <section className="sp-home-plan" aria-labelledby="sp-plan-heading">
      <p className="sp-side-label">01 / HOUSE SECTION</p>
      <div><h2 id="sp-plan-heading">Built around<br />the fire.</h2>
        <div className="sp-levels" aria-label="Illustrative house organization">
          <div><b>UPPER</b><span>Rooms 01, 03–05, 07–09, 11</span></div>
          <div><b>LOWER</b><span>Rooms 02 and 10</span></div>
          <div className="sp-level-fire"><b>GROUND / HEART</b><span>Fire kitchen, Room 06 · one shared table</span></div>
        </div>
        <p className="sp-plan-note">An illustrative reading of this fictional house, not a measured floor plan.</p>
      </div>
    </section>

    <section className="sp-home-rooms" aria-labelledby="sp-rooms-heading">
      <div className="sp-room-head"><p className="sp-side-label">02 / PRIVATE SPACE</p><h2 id="sp-rooms-heading">Rooms are<br />places, not types.</h2><p>Choose for the view, stair, sound and light you want to wake to.</p></div>
      <div className="sp-room-gallery">
        {rooms.slice(0, 2).map((room) => <Link href={`/rooms/${room.slug}`} key={room.slug}><ConceptImage src={room.image} alt={room.imageAlt} caption={room.imageCaption} className="sp-gallery-image" sizes="(max-width: 700px) 100vw, 38vw" /><strong>{room.number} / {room.name.toUpperCase()}</strong><span>{room.note}</span></Link>)}
        <Link className="sp-all-rooms" href="/rooms"><strong>11</strong><span>ROOMS IN ALL</span><b>VIEW THE REGISTER →</b></Link>
      </div>
    </section>

    <section className="sp-home-table" aria-labelledby="sp-table-heading">
      <ConceptImage src="/images/hearth-concept.webp" alt="Generated concept study of a pot beside the fire" caption="Pot beside beech embers — generated kitchen study." className="sp-table-image" sizes="(max-width: 700px) 100vw, 55vw" />
      <div className="sp-table-copy"><p className="sp-side-label">03 / SHARED SPACE</p><h2 id="sp-table-heading">The kitchen<br />sets the hour.</h2><p>One fire and one sitting at 19:30. Food takes time here, and the room makes that visible.</p><Link href="/food">AT THE TABLE →</Link></div>
    </section>

    <section className="sp-home-terrain" aria-labelledby="sp-terrain-heading"><p className="sp-side-label">04 / OUTSIDE</p><h2 id="sp-terrain-heading">From the lower gate, the path is already underfoot.</h2><ConceptImage src="/images/path-concept.webp" alt="Generated concept study of a wet forest path" caption="South path after rain — generated field study." className="sp-terrain-image" sizes="(max-width: 700px) 100vw, 25vw" /><div><p>Three walks start at the house. Weather decides which is sensible.</p><Link href="/around">ROUTES & CONDITIONS →</Link></div></section>
  </>;
}
