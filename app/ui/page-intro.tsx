type Props = { index: string; title: string; lead: string; note?: string; compact?: boolean };

export function PageIntro({ index, title, lead, note, compact = false }: Props) {
  return (
    <header className={`page-intro register-grid${compact ? " compact" : ""}`}>
      <p className="index-mark">{index}</p>
      <h1>{title}</h1>
      <p className="page-lead">{lead}</p>
      {note ? <p className="margin-note">{note}</p> : null}
    </header>
  );
}
