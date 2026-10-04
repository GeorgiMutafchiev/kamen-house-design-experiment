import type { Metadata } from "next";
import { InquiryForm } from "../ui/inquiry-form";

export const metadata: Metadata = { title: "Plan a stay" };

export default function StayPage() {
  return <>
    <header className="stay-opening register-grid"><p className="index-mark">06 / Inquiry preview</p><h1>Tell us your dates.</h1><p className="page-lead">The form checks details in your browser. It transmits nothing and reserves no room.</p><p className="margin-note">No payment is requested. Keep a copy of anything you enter.</p></header>
    <section className="stay-layout register-grid"><div className="inquiry-side"><h2>Before you write</h2><dl className="fact-stack"><div><dt>Minimum stay</dt><dd>Two nights</dd></div><div><dt>Arrival</dt><dd>15:00–20:00</dd></div><div><dt>Dinner</dt><dd>One sitting, 19:30</dd></div><div><dt>Inside Room 06</dt><dd>No internal steps</dd></div></dl><p>Tell us about food needs and mobility before arrival. The final approach is on foot, and the mountain road requires winter tyres from November through March.</p></div><InquiryForm /></section>
  </>;
}
