'use client';

import { useMemo } from 'react';
import { useActiveSection, type SpyTarget } from '@/hooks/useActiveSection';
import type { TocEntry } from '@/content/toc';

/** Sticky-оглавление (десктоп ≥ xl): подсвечивает текущую главу цветом её части. */
export default function Toc({ entries }: { entries: TocEntry[] }) {
  const targets = useMemo<SpyTarget[]>(
    () => entries.filter((e) => !e.isGroup).map((e) => ({ id: e.id, accent: e.accent })),
    [entries],
  );
  const activeId = useActiveSection(targets);

  return (
    <nav aria-label="Оглавление" className="hidden xl:block">
      <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto pr-4 pb-8">
        <p className="mono-label mb-4 text-muted/70">Оглавление</p>
        <ul className="space-y-0.5 border-l border-line">
          {entries.map((entry) => {
            if (entry.isGroup) {
              return (
                <li key={entry.id} className="pt-4 pb-1 pl-4">
                  <span className={`mono-label ${entry.accent === 'claude' ? 'text-claude' : 'text-codex'}`}>
                    {entry.label}
                  </span>
                </li>
              );
            }
            const isActive = activeId === entry.id;
            return (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`-ml-px flex items-baseline gap-2 border-l-2 py-1.5 pl-4 text-[0.82rem] leading-snug transition-colors duration-300 ${
                    isActive
                      ? 'border-(--active-accent) text-text'
                      : 'border-transparent text-muted hover:border-line hover:text-text'
                  }`}
                >
                  {entry.num ? (
                    <span className={`font-mono text-[0.68rem] ${isActive ? 'text-(--active-accent)' : 'text-muted/60'}`}>
                      {entry.num}
                    </span>
                  ) : null}
                  <span>{entry.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
