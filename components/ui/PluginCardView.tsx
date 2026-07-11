import { ExternalLink, Puzzle } from 'lucide-react';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import { renderInline } from '@/lib/inline';
import type { PluginCard } from '@/content/types';

/** Полноценная карточка плагина (UI UX Pro Max и {{TODO_*}}-карточка по тому же образцу). */
export default function PluginCardView({ card }: { card: PluginCard }) {
  return (
    <article className={`card my-6 p-6 sm:p-8 ${card.todo ? 'border-dashed' : ''}`}>
      <header className="mb-4 flex flex-wrap items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-(--radius-sm) border border-line bg-surface-2">
          <Puzzle aria-hidden className="size-5 text-(--accent)" />
        </span>
        <div className="min-w-0">
          <h4 className="h-sub break-words">{card.name}</h4>
          <p className="mono-label mt-0.5 text-(--accent)">{card.tagline}</p>
        </div>
        {card.link ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label ml-auto flex items-center gap-1.5 rounded-md border border-line px-3 py-2 text-muted transition-colors duration-200 hover:border-(--accent) hover:text-text"
          >
            {card.link.label}
            <ExternalLink aria-hidden className="size-3.5" />
          </a>
        ) : null}
      </header>

      <p className="prose-measure text-[0.98rem] text-text/85">{renderInline(card.what)}</p>

      {card.requires?.length ? (
        <div className="mt-4">
          <p className="mono-label mb-2 text-muted">Понадобится</p>
          <ul className="space-y-1.5">
            {card.requires.map((req, i) => (
              <li key={i} className="prose-measure text-[0.95rem] text-text/85">
                {renderInline(req)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 grid gap-5">
        {card.installPaths.map((path, i) => (
          <div key={i} className="min-w-0">
            <p className="mono-label mb-1 text-muted">{path.title}</p>
            {path.intro ? <p className="text-[0.92rem] text-text/80">{renderInline(path.intro)}</p> : null}
            <CodeBlock code={path.code} />
          </div>
        ))}
      </div>

      {card.verify ? (
        <Callout callout={{ type: 'success', title: 'Проверка, что работает', text: card.verify.text }} />
      ) : null}

      {card.gotchas?.length ? (
        <div className="mt-4">
          <p className="mono-label mb-2 text-muted">Грабли</p>
          <ul className="list-disc space-y-1.5 pl-5">
            {card.gotchas.map((g, i) => (
              <li key={i} className="prose-measure text-[0.95rem] text-muted">
                {renderInline(g)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {card.todo ? (
        <Callout
          callout={{
            type: 'info',
            title: 'Карточка ждёт данных',
            text: 'Название, команда установки и описание — плейсхолдеры {{TODO_*}}: их заполняет автор гайда (см. TODO.md).',
          }}
        />
      ) : null}
    </article>
  );
}
