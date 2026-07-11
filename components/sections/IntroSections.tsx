import { Bot, Clock3, CreditCard, Gauge, Monitor, PenLine, UserRound } from 'lucide-react';
import Reveal from '@/components/layout/Reveal';
import ComparisonTable from '@/components/ui/ComparisonTable';
import SectionHeading from '@/components/ui/SectionHeading';
import { CHOOSE_ROWS } from '@/content/compare';
import { LINKS } from '@/content/meta';
import { renderInline } from '@/lib/inline';

const WRAP = 'mx-auto max-w-[1200px] px-6 lg:px-10';
const SECTION = 'scroll-mt-28 py-(--space-section)';

/** Блок 0.2 — «Как это вообще работает»: три карточки на пальцах. */
export function HowItWorks() {
  const cards = [
    {
      icon: Bot,
      title: 'AI-агент — ваш сотрудник',
      text: 'Программа, которая сама пишет код: создаёт файлы, исправляет ошибки, показывает результат. Вы ставите задачу и принимаете работу — как руководитель.',
    },
    {
      icon: PenLine,
      title: 'Промпт — техзадание словами',
      text: 'Обычный текст, которым вы объясняете, что хотите получить. Никакого программирования — только внятное описание задачи.',
    },
    {
      icon: Gauge,
      title: 'Качество промпта = качество продукта',
      text: 'Агент делает ровно то, о чём его попросили. Конкретный промпт даёт конкретный продукт, расплывчатый — «в среднем по интернету». Этому гайд и учит.',
    },
  ];
  return (
    <section id="how" data-accent="neutral" aria-labelledby="how-heading" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading kicker="00 · Введение" title="Как это вообще работает" />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.title} className="h-full">
              <article className="card card-hover h-full p-6">
                <card.icon aria-hidden className="mb-5 size-6 text-(--accent)" />
                <h3 className="h-sub mb-2.5 text-[1.08rem]">{card.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Блок 0.3 — «Что понадобится». */
export function Requirements() {
  const rows = [
    {
      icon: Monitor,
      title: 'Компьютер с Windows 10 или 11',
      text: '64-битный — то есть практически любой современный. Для Codex официально рекомендован Windows 11.',
    },
    {
      icon: UserRound,
      title: 'Аккаунт Claude и/или ChatGPT',
      text: 'Заведём вместе в главах 1.1 и 2.1 — это пять минут.',
    },
    {
      icon: CreditCard,
      title: 'План подписки',
      text: `Честно: Claude Code есть только в платных планах (Pro и выше). Codex можно попробовать даже на Free, но для работы нужен Plus и выше. Цены меняются — смотрите официальные страницы: [тарифы Claude](${LINKS.claudePricing}) и [тарифы ChatGPT](${LINKS.chatgptPricing}).`,
    },
    {
      icon: Clock3,
      title: '1–2 часа времени',
      text: 'И одна идея, которую хочется превратить в продукт.',
    },
  ];
  return (
    <section id="need" data-accent="neutral" aria-labelledby="need-heading" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading kicker="00 · Введение" title="Что понадобится" />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {rows.map((row) => (
            <Reveal key={row.title} className="h-full">
              <div className="card h-full p-6">
                <div className="flex gap-4">
                  <row.icon aria-hidden className="mt-1 size-5 shrink-0 text-(--accent)" />
                  <div>
                    <h3 className="mb-1.5 font-semibold text-text">{row.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-muted">{renderInline(row.text)}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Блок 0.4 — выбор пути: две карточки + мини-таблица. */
export function PathChooser() {
  return (
    <section id="choose" data-accent="neutral" aria-labelledby="choose-heading" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading
            kicker="00 · Введение"
            title="Выберите путь"
            lead="Обе части ведут к одному результату и построены зеркально. Выбирать навсегда не нужно: система промптов общая, и переход с одного инструмента на другой занимает минут десять."
          />
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <a
              href="#claude-1"
              data-accent="claude"
              className="card card-hover flex h-full flex-col p-7"
              aria-label="Перейти к части 1 — путь Claude"
            >
              <p className="mono-label mb-3 text-claude">Часть 1 · 7 глав</p>
              <h3 className="h-sub mb-3 text-[1.5rem]">Путь Claude</h3>
              <p className="mb-6 text-[0.95rem] leading-relaxed text-muted">
                Агент Claude Code: живёт в терминале и в приложении Claude, прокачивается плагинами, слушается файла
                CLAUDE.md. Требует план Pro и выше.
              </p>
              <span className="mt-auto font-semibold text-claude">Начать с главы 1.1 →</span>
            </a>
          </Reveal>
          <Reveal className="h-full">
            <a
              href="#codex-1"
              data-accent="codex"
              className="card card-hover flex h-full flex-col p-7"
              aria-label="Перейти к части 2 — путь Codex"
            >
              <p className="mono-label mb-3 text-codex">Часть 2 · 7 глав</p>
              <h3 className="h-sub mb-3 text-[1.5rem]">Путь Codex</h3>
              <p className="mb-6 text-[0.95rem] leading-relaxed text-muted">
                Агент Codex: живёт внутри приложения ChatGPT, работает в защитной песочнице, слушается файла AGENTS.md.
                Попробовать можно даже на Free.
              </p>
              <span className="mt-auto font-semibold text-codex">Начать с главы 2.1 →</span>
            </a>
          </Reveal>
        </div>
        <Reveal className="mt-6">
          <ComparisonTable rows={CHOOSE_ROWS} compact />
        </Reveal>
      </div>
    </section>
  );
}
