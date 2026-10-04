import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAMEN HOUSE",
  description: "An independent mountain house and fire kitchen in Bulgaria.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

