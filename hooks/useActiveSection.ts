'use client';

import { useEffect, useState } from 'react';

export interface SpyTarget {
  id: string;
  accent: 'claude' | 'codex' | 'neutral';
}

const ACCENT_VAR: Record<SpyTarget['accent'], string> = {
  claude: 'var(--color-claude)',
  codex: 'var(--color-codex)',
  neutral: 'var(--color-neutral-accent)',
};

/**
 * Следит за секциями: возвращает id активной и синхронизирует
 * CSS-переменную --active-accent (прогресс-бар, оглавление, selection).
 */
export function useActiveSection(targets: SpyTarget[]): string {
  const [activeId, setActiveId] = useState<string>(targets[0]?.id ?? '');

  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        // активная = первая по порядку документа из видимых
        for (const t of targets) {
          if (visible.has(t.id)) {
            setActiveId(t.id);
            document.documentElement.style.setProperty('--active-accent', ACCENT_VAR[t.accent]);
            return;
          }
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1] },
    );

    for (const t of targets) {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [targets]);

  return activeId;
}
