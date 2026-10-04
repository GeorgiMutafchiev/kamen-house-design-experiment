import type { MetadataRoute } from "next";
import { journal, rooms } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kamen-house.example";
  const paths = ["", "/house", "/rooms", "/food", "/around", "/journal", "/find-us", "/stay", "/privacy"];
  return [...paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-10-04") })), ...rooms.map((room) => ({ url: `${base}/rooms/${room.slug}`, lastModified: new Date("2026-10-04") })), ...journal.map((post) => ({ url: `${base}/journal/${post.slug}`, lastModified: new Date("2026-10-04") }))];
}
