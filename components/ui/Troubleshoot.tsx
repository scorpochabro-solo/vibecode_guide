import { Wrench } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { renderInline } from '@/lib/inline';
import type { CodeSnippet } from '@/content/types';

interface TroubleItem {
  problem: string;
  fix: string;
  code?: CodeSnippet;
}

/** Блок «Если что-то пошло не так»: проблема → решение (+ команда). */
export default function Troubleshoot({ title, items }: { title?: string; items: TroubleItem[] }) {
  return (
    <div className="card my-6 overflow-hidden">
      <p className="mono-label flex items-center gap-2 border-b border-line bg-surface-2 px-5 py-3 text-text">
        <Wrench aria-hidden className="size-4 text-(--accent)" />
        {title ?? 'Если что-то пошло не так'}
      </p>
      <div className="divide-y divide-line">
        {items.map((item, i) => (
          <div key={i} className="px-5 py-4">
            <p className="mb-1 font-semibold text-text">{item.problem}</p>
            <p className="prose-measure text-[0.95rem] text-muted">{renderInline(item.fix)}</p>
            {item.code ? <CodeBlock code={item.code} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
