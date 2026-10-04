"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["/house", "House"],
  ["/rooms", "Rooms"],
  ["/food", "Fire kitchen"],
  ["/around", "Around"],
  ["/journal", "Journal"],
  ["/find-us", "Find us"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="KAMEN HOUSE home">KAMEN / HOUSE</Link>
      <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav id="primary-navigation" className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname.startsWith(href) ? "page" : undefined}>{label}</Link>
        ))}
      </nav>
      <Link className="stay-link" href="/stay" aria-label="Plan a stay" onClick={() => setOpen(false)}>STAY / ENQUIRE <span aria-hidden="true">→</span></Link>
    </header>
  );
}
