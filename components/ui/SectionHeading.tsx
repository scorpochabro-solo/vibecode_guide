import { renderInline } from '@/lib/inline';

interface Props {
  kicker: string;
  title: string;
  lead?: string;
}

/** Заголовок крупной секции: моно-киккер + display-заголовок + лид. */
export default function SectionHeading({ kicker, title, lead }: Props) {
  return (
    <div className="mb-10">
      <p className="mono-label mb-3 text-(--accent)">{kicker}</p>
      <h2 className="h-section">{title}</h2>
      {lead ? <p className="prose-measure mt-4 text-[1.05rem] text-muted">{renderInline(lead)}</p> : null}
    </div>
  );
}
