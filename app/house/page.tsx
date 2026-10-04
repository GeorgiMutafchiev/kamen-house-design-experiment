import type { Metadata } from "next";
import Link from "next/link";
import { ConceptImage } from "../ui/concept-image";

export const metadata: Metadata = { title: "The house" };

export default function HousePage() {
  return <>
    <header className="sp-house-opening"><p className="sp-side-label">04 / THE HOUSE</p><h1>Small enough to<br />know who is in.</h1><p>KAMEN HOUSE is an imagined eleven-room house in the Rhodope Mountains. Its working centre is the fire kitchen, with rooms and a path leading away from it.</p></header>
    <ConceptImage src="/images/house-concept.webp" alt="Generated concept study of a mountain house on an autumn slope" caption="Exterior approach at dusk — generated architectural study of a fictional property." className="sp-house-wide" priority sizes="100vw" />
    <section className="sp-house-life"><p className="sp-side-label">HOW THE DAY WORKS</p><h2>Out in the morning.<br />Back to the table.</h2><div><p>Guests share breakfast and dinner downstairs, then move at their own pace. There is no daily programme. Boots stay at the lower door and books move between the rooms.</p><p>Someone in the kitchen can usually tell you what the rain has done to the path. Dinner has one sitting at 19:30.</p><Link href="/food">THE FIRE KITCHEN →</Link></div></section>
    <section className="sp-house-material"><div><span>01 / STONE</span><p>Old stone walls make the lower rooms deep and quiet.</p></div><div><span>02 / TIMBER</span><p>The upper floor puts several bedrooms beneath the roof and beside the trees.</p></div><div><span>03 / LAND</span><p>Parking ends below the house. The final approach is on foot over an uneven path.</p></div></section>
  </>;
}
