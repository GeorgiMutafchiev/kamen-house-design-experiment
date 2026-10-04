import type { Metadata } from "next";
import Link from "next/link";
import { ConceptImage } from "../ui/concept-image";

export const metadata: Metadata = { title: "Fire kitchen" };

export default function FoodPage() {
  return <>
    <header className="sp-food-opening">
      <div><p className="sp-side-label">02 / FIRE KITCHEN</p><h1>The fire is laid<br />before dinner.</h1><p>The stove is lit in the afternoon for one shared sitting. The menu follows the week, so the list below is a sample, not a promise.</p><dl><div><dt>Dinner</dt><dd>19:30 / one sitting</dd></div><div><dt>Breakfast</dt><dd>08:00–10:00 / residents</dd></div></dl></div>
      <ConceptImage src="/images/kitchen-concept.webp" alt="Generated concept study of food being prepared beside a fire kitchen stove" caption="Working kitchen — generated concept study of a fictional property." className="sp-food-opening-image" priority sizes="(max-width: 700px) 100vw, 52vw" />
    </header>
    <section className="menu-sheet register-grid"><p className="chapter-number">An October table</p><div className="menu-list"><p><span>Warm bread</span><span>roasted pepper, sheep’s cheese</span></p><p><span>Beans from the pot</span><span>savory, onion, smoke</span></p><p><span>River trout</span><span>potato, sorrel</span></p><p><span>Orchard apple</span><span>walnut, cultured cream</span></p></div><div className="menu-note"><p>We can usually cook for vegetarians. The single fire and small kitchen mean some allergies need discussion before a stay.</p><Link className="text-action" href="/stay">Add food needs to the preview →</Link></div></section>
  </>;
}
