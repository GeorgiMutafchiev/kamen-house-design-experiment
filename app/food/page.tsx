import type { Metadata } from "next";
import Link from "next/link";
import { ConceptImage } from "../ui/concept-image";
import { PageIntro } from "../ui/page-intro";

export const metadata: Metadata = { title: "Fire kitchen" };

export default function FoodPage() {
  return <>
    <PageIntro compact index="02 / Fire kitchen" title="Dinner is at 19:30." lead="The stove is lit in the afternoon for one shared sitting. The menu follows the week, so the list below is a sample—not a promise." note="Resident breakfast 08:00–10:00. Tell us about food needs before arrival." />
    <ConceptImage src="/images/hearth-concept.webp" alt="Concept study of a blackened pot beside beech embers" caption="Bean pot beside the embers — generated kitchen-detail study." className="food-hero food-detail" priority sizes="100vw" />
    <section className="menu-sheet register-grid"><p className="chapter-number">An October table</p><div className="menu-list"><p><span>Warm bread</span><span>roasted pepper, sheep’s cheese</span></p><p><span>Beans from the pot</span><span>savory, onion, smoke</span></p><p><span>River trout</span><span>potato, sorrel</span></p><p><span>Orchard apple</span><span>walnut, cultured cream</span></p></div><div className="menu-note"><p>We can usually cook for vegetarians. The single fire and small kitchen mean some allergies need discussion before a stay.</p><Link className="text-action" href="/stay">Add food needs to the preview →</Link></div></section>
  </>;
}
