import type { Metadata } from "next";
import { ConceptImage } from "../ui/concept-image";

export const metadata: Metadata = { title: "Around" };

export default function AroundPage() {
  return <>
    <header className="around-opening register-grid"><p className="index-mark">03 / Around</p><h1>Three walks begin at the house.</h1><dl><div><dt>Shortest</dt><dd>3 km</dd></div><div><dt>Longest</dt><dd>9 km</dd></div><div><dt>Ask about</dt><dd>Rain, snow, forestry</dd></div></dl><p>Conditions change quickly, so ask at breakfast before choosing a route.</p></header>
    <section className="around-grid register-grid"><ConceptImage src="/images/path-concept.webp" alt="Concept study of a wet Rhodope forest path" caption="Marked path after rain — generated field study, not live trail evidence." className="around-image" priority sizes="(max-width: 768px) 100vw, 50vw" /><ol className="route-list"><li><span>01</span><div><h2>South path</h2><p>5 km return · 2 hours · roots and wet stone</p></div></li><li><span>02</span><div><h2>Old pasture</h2><p>9 km loop · 4 hours · open ridge, little shade</p></div></li><li><span>03</span><div><h2>River road</h2><p>3 km return · 1 hour · gentle gravel track</p></div></li></ol></section>
    <section className="season-table"><h2>What changes</h2><div><span>Nov–Mar</span><p>Snow tyres are essential. Some paths are unmarked after fresh snow.</p></div><div><span>Apr–Jun</span><p>Water is high and shade stays cold. Carry a layer even on clear mornings.</p></div><div><span>Jul–Oct</span><p>Start early for the ridge. Afternoon storms can move in fast.</p></div></section>
  </>;
}
