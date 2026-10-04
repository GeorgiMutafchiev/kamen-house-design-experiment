import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy & cookies" };

export default function PrivacyPage() {
  return <article className="legal-page"><header><p>08 / Policy</p><h1>Privacy & cookies</h1><p>Plain information for this development concept.</p></header><section><h2>No cookies or analytics</h2><p>This site sets no cookies and stores no preferences in your browser. No analytics, advertising pixels or external booking systems are connected.</p><h2>Inquiry form</h2><p>The inquiry form validates fields and demonstrates loading, error and success states. It does not transmit, email or retain the details you enter.</p><h2>Concept imagery</h2><p>Images are generated visual studies for this fictional project. Captions identify them as concept imagery; they do not claim to show a real property.</p></section></article>;
}
