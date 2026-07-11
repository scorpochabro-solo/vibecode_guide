import { ChevronRight } from 'lucide-react';

const NODES = [
  'Идея',
  'Генератор промптов',
  'Готовый промпт',
  'Фаза 1: план',
  'Ваше «ок»',
  'Фаза 2: код',
  'Просмотр',
  'Итерации',
  'Публикация',
];

/** Схема конвейера «Идея → Продукт». Ключевые узлы (план и «ок») подсвечены акцентом части. */
export default function PipelineDiagram() {
  return (
    <div className="card my-6 p-5 sm:p-7" role="img" aria-label={`Конвейер: ${NODES.join(' → ')}`}>
      <ol className="flex flex-col flex-wrap items-stretch gap-1.5 md:flex-row md:items-center" aria-hidden>
        {NODES.map((node, i) => {
          const isKey = i === 3 || i === 4;
          return (
            <li key={node} className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
              <span
                className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.82rem] font-medium whitespace-nowrap ${
                  isKey
                    ? 'border-(--accent) bg-[color-mix(in_oklab,var(--accent)_12%,transparent)] text-text'
                    : 'border-line bg-surface-2 text-text/85'
                }`}
              >
                <span className="font-mono text-[0.7rem] text-(--accent)">{String(i + 1).padStart(2, '0')}</span>
                {node}
              </span>
              {i < NODES.length - 1 ? (
                <ChevronRight className="ml-4 size-4 shrink-0 rotate-90 text-muted/60 md:ml-0 md:rotate-0" />
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm text-muted">
        Два подсвеченных узла — сердце конвейера: агент сначала показывает план, и только после вашего «ок» пишет код.
      </p>
    </div>
  );
}
