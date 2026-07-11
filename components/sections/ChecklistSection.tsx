'use client';

import Reveal from '@/components/layout/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CHECKLIST } from '@/content/compare';
import { useChecklist } from '@/hooks/useChecklist';
import type { PartKey } from '@/content/types';

const GROUPS: { part: PartKey; title: string }[] = [
  { part: 'neutral', title: 'Введение' },
  { part: 'claude', title: 'Часть 1 — Claude' },
  { part: 'codex', title: 'Часть 2 — Codex' },
];

/** Интерактивный чеклист прогресса: localStorage (guide-progress-v1) + прогресс-бар. */
export default function ChecklistSection() {
  const { checked, toggle } = useChecklist();
  const done = CHECKLIST.filter((item) => checked[item.id]).length;
  const percent = Math.round((done / CHECKLIST.length) * 100);

  return (
    <section id="checklist" data-accent="neutral" aria-label="Чеклист прогресса" className="scroll-mt-28 py-(--space-section)">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            kicker="Ваш прогресс"
            title="Чеклист: от нуля до продукта"
            lead="Отмечайте пройденное — состояние сохраняется в этом браузере и переживает перезагрузку страницы."
          />
        </Reveal>

        <Reveal>
          <div className="card mb-8 p-5">
            <div className="mb-2.5 flex items-baseline justify-between gap-4">
              <p className="font-semibold text-text">
                Вы прошли {percent}%
                <span className="ml-2 font-mono text-sm font-normal text-muted">
                  {done}/{CHECKLIST.length}
                </span>
              </p>
              {percent === 100 ? <p className="mono-label text-codex">Продукт запущен — поздравляем!</p> : null}
            </div>
            <div
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Прогресс по гайду"
              className="h-2 overflow-hidden rounded-full bg-surface-2"
            >
              <div
                className="h-full rounded-full bg-(--active-accent) transition-[width] duration-500 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const items = CHECKLIST.filter((item) => item.part === group.part);
            return (
              <Reveal key={group.part} className="h-full">
                <div data-accent={group.part} className="card h-full p-5">
                  <p className="mono-label mb-4 text-(--accent)">{group.title}</p>
                  <ul className="space-y-1">
                    {items.map((item) => {
                      const isChecked = Boolean(checked[item.id]);
                      return (
                        <li key={item.id}>
                          <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2 transition-colors duration-150 hover:bg-surface-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggle(item.id)}
                              className="mt-1 size-4 shrink-0 cursor-pointer accent-(--accent)"
                            />
                            <span
                              className={`text-[0.92rem] leading-snug transition-colors duration-150 ${
                                isChecked ? 'text-muted line-through decoration-line' : 'text-text/90'
                              }`}
                            >
                              {item.label}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
