import { CircleCheck, Info, TriangleAlert } from 'lucide-react';
import { renderInline } from '@/lib/inline';
import type { Callout as CalloutData } from '@/content/types';

const ICONS = {
  info: Info,
  warn: TriangleAlert,
  success: CircleCheck,
} as const;

/** Врезки info/warn/success. warn — всегда янтарный; info/success — в акцент части. */
export default function Callout({ callout }: { callout: CalloutData }) {
  const Icon = ICONS[callout.type];
  const tone = callout.type === 'warn' ? 'text-[#e8b84a]' : 'text-(--accent)';
  const border = callout.type === 'warn' ? 'border-l-[#e8b84a]' : 'border-l-(--accent)';

  return (
    <aside className={`my-4 rounded-r-(--radius-sm) border border-l-2 border-line ${border} bg-surface-1 px-4 py-3.5`}>
      <div className="flex gap-3">
        <Icon aria-hidden className={`mt-1 size-4.5 shrink-0 ${tone}`} />
        <div className="min-w-0 text-[0.95rem] leading-relaxed text-text/90">
          {callout.title ? <p className={`mb-1 font-semibold ${tone}`}>{callout.title}</p> : null}
          <p>{renderInline(callout.text)}</p>
        </div>
      </div>
    </aside>
  );
}
