import type { Metadata } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource/ibm-plex-sans-condensed/400.css";
import "@fontsource/ibm-plex-sans-condensed/600.css";
import "./globals.css";
import "./spatial.css";
import { SiteHeader } from "./ui/site-header";
import { SiteFooter } from "./ui/site-footer";

export const metadata: Metadata = {
  title: { default: "KAMEN HOUSE", template: "%s — KAMEN HOUSE" },
  description: "An independent mountain house and fire kitchen in Bulgaria.",
  metadataBase: new URL("https://kamen-house.example"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="site-spatial">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
