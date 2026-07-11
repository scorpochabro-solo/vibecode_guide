import { CircleCheck, CircleX } from 'lucide-react';

interface Side {
  title: string;
  text: string;
}

/** Пара «плохой промпт / хороший промпт» из практикума. */
export default function GoodBad({ bad, good }: { bad: Side; good: Side }) {
  return (
    <div className="my-6 grid gap-4 lg:grid-cols-2 lg:items-stretch">
      <div className="card border-[#f87171]/25 p-5">
        <p className="mono-label mb-3 flex items-center gap-2 text-[#f87171]">
          <CircleX aria-hidden className="size-4" />
          {bad.title}
        </p>
        <p className="font-mono text-[0.85rem] leading-relaxed text-muted">«{bad.text}»</p>
      </div>
      <div className="card border-(--accent)/40 p-5">
        <p className="mono-label mb-3 flex items-center gap-2 text-(--accent)">
          <CircleCheck aria-hidden className="size-4" />
          {good.title}
        </p>
        <p className="font-mono text-[0.85rem] leading-relaxed text-text/85">«{good.text}»</p>
      </div>
    </div>
  );
}
