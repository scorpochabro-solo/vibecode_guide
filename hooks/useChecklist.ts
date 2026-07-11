'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'guide-progress-v1';

type Checked = Record<string, boolean>;

function readStorage(): Checked {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') return parsed as Checked;
    return {};
  } catch {
    return {};
  }
}

/** Состояние чеклиста прогресса, живёт в localStorage (ключ guide-progress-v1). */
export function useChecklist(): {
  checked: Checked;
  toggle: (id: string) => void;
  hydrated: boolean;
} {
  const [checked, setChecked] = useState<Checked>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setChecked(readStorage());
    setHydrated(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // приватный режим / переполнение — просто не сохраняем
      }
      return next;
    });
  }, []);

  return { checked, toggle, hydrated };
}
