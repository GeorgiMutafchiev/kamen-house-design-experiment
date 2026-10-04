import type { Metadata } from "next";
import { ConceptImage } from "../ui/concept-image";
import { PageIntro } from "../ui/page-intro";

export const metadata: Metadata = { title: "The house" };

export default function HousePage() {
  return <>
    <PageIntro index="04 / The house" title="Small enough to know who is in." lead="KAMEN HOUSE is an imagined eleven-room house made from a precise brief: domestic in scale, serious about food, and useful as a base in the mountains." />
    <ConceptImage src="/images/house-concept.webp" alt="Concept study of the house on a misty autumn slope" caption="Exterior approach at dusk — generated architectural study." className="house-wide" priority sizes="100vw" />
    <section className="story-grid register-grid"><p className="chapter-number">How it works</p><div className="prose"><p>The house has old stone walls, a timber upper floor and a fire kitchen at ground level. Guests share breakfast and dinner downstairs, then move at their own pace.</p><p>There is no daily programme. Boots stay at the lower door, books move between the rooms, and someone in the kitchen can usually tell you what the rain has done to the path.</p></div><aside><strong>11</strong><span>rooms</span><strong>1</strong><span>long table</span><strong>0</strong><span>treatment menus</span></aside></section>
  </>;
}
