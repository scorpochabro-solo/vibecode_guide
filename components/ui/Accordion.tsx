'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { renderInline } from '@/lib/inline';
import type { AccordionItem } from '@/content/types';

/** Доступный аккордеон: aria-expanded, aria-controls, раскрытие через CSS grid-rows. */
export default function Accordion({ items, headingLevel = 'h4' }: { items: AccordionItem[]; headingLevel?: 'h3' | 'h4' }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();
  const Heading = headingLevel;

  return (
    <div className="divide-y divide-line overflow-hidden rounded-(--radius-md) border border-line bg-surface-1">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={i}>
            <Heading>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-surface-2"
              >
                <span className="mono-label w-7 shrink-0 text-(--accent)">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 font-medium text-text">{item.q}</span>
                <ChevronDown
                  aria-hidden
                  className={`size-4.5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="prose-measure px-5 pb-5 pl-16 text-[0.95rem] leading-relaxed text-muted">
                  {renderInline(item.a)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
