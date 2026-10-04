"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="not-found"><p>Error / The page did not open</p><h1>Something caught.</h1><p>Your inquiry or navigation was not completed.</p><button type="button" onClick={() => reset()}>Try again</button></section>;
}

