import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-mark">KAMEN<br />HOUSE</div>
      <p className="footer-address">Rhodope Mountains<br />Bulgaria</p>
      <div className="footer-links">
        <Link href="/stay">Plan a stay</Link>
        <Link href="/find-us">Directions</Link>
        <Link href="/privacy">Privacy & cookies</Link>
      </div>
      <p className="footer-note">A fictional hospitality concept built as a design experiment. No real bookings are taken.</p>
    </footer>
  );
}

