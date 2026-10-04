import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><p>404 / No room here</p><h1>The path ends.</h1><p>The page may have moved, or the address may be wrong.</p><div><Link href="/">Return to the house</Link><Link href="/rooms">See the room register</Link></div></section>;
}

