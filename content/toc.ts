import { CLAUDE_CHAPTERS } from './chapters-claude';
import { CODEX_CHAPTERS } from './chapters-codex';
import type { PartKey } from './types';

export interface TocEntry {
  id: string;
  label: string;
  accent: PartKey;
  /** Номер главы для моно-колонки (например «1.4») */
  num?: string;
  /** Заголовок группы (не ссылка на главу, а разделитель) */
  isGroup?: boolean;
}

/** Оглавление и цели скролл-слежения. Порядок = порядок секций на странице. */
export const TOC: TocEntry[] = [
  { id: 'how', label: 'Как это работает', accent: 'neutral' },
  { id: 'need', label: 'Что понадобится', accent: 'neutral' },
  { id: 'choose', label: 'Выбор пути', accent: 'neutral' },
  { id: 'part-claude', label: 'Часть 1 — Claude', accent: 'claude', isGroup: true },
  ...CLAUDE_CHAPTERS.map((ch, i) => ({
    id: ch.anchor,
    label: ch.title,
    accent: 'claude' as const,
    num: `1.${i + 1}`,
  })),
  { id: 'part-codex', label: 'Часть 2 — Codex', accent: 'codex', isGroup: true },
  ...CODEX_CHAPTERS.map((ch, i) => ({
    id: ch.anchor,
    label: ch.title,
    accent: 'codex' as const,
    num: `2.${i + 1}`,
  })),
  { id: 'compare', label: 'Claude vs Codex', accent: 'neutral' },
  { id: 'prompts', label: 'Библиотека промптов', accent: 'neutral' },
  { id: 'glossary', label: 'Глоссарий', accent: 'neutral' },
  { id: 'faq', label: 'FAQ', accent: 'neutral' },
  { id: 'checklist', label: 'Чеклист прогресса', accent: 'neutral' },
];
