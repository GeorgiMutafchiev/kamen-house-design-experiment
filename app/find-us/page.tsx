import type { Metadata } from "next";

export const metadata: Metadata = { title: "Find us" };

export default function FindUsPage() {
  return <>
    <header className="directions-opening"><p className="index-mark">07 / Directions</p><h1>The final four kilometres are slow.</h1><p>This location has no verified map pin. The sequence below describes how arrival is intended to work without sending anyone to a false address.</p></header>
    <section className="directions"><div><span>01</span><h2>Reach the village</h2><p>In a real operation, confirmed guests would receive an accurate village meeting point and current road note.</p></div><div><span>02</span><h2>Leave the main road</h2><p>The imagined final 4 km is a narrow surfaced road. Snow tyres are required in winter; low cars should ask about conditions.</p></div><div><span>03</span><h2>Use the lower gate</h2><p>Parking is below the house. The final 60 metres is on foot; luggage help would be arranged at arrival.</p></div></section>
    <aside className="honesty-note"><h2>No map pin yet</h2><p>Verified coordinates, transfer options, accessible arrival notes and seasonal road updates are required before these directions can be used for travel.</p></aside>
  </>;
}
