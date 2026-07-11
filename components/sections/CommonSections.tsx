import Reveal from '@/components/layout/Reveal';
import Accordion from '@/components/ui/Accordion';
import ComparisonTable from '@/components/ui/ComparisonTable';
import PromptCard from '@/components/ui/PromptCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { COMPARE_ROWS } from '@/content/compare';
import { FAQ } from '@/content/faq';
import { GLOSSARY } from '@/content/glossary';
import { PROMPT_LIBRARY } from '@/content/prompts';

const WRAP = 'mx-auto max-w-[1200px] px-6 lg:px-10';
const SECTION = 'scroll-mt-28 py-(--space-section)';

/** Честное сравнение без победителя. */
export function CompareSection() {
  return (
    <section id="compare" data-accent="neutral" aria-label="Сравнение Claude и Codex" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading
            kicker="Итоги"
            title="Claude vs Codex — честно"
            lead="Победителя нет: оба агента доведут вас до опубликованного продукта. Таблица — чтобы выбрать, с чего начать."
          />
        </Reveal>
        <Reveal>
          <ComparisonTable rows={COMPARE_ROWS} />
        </Reveal>
      </div>
    </section>
  );
}

/** Библиотека готовых промптов. */
export function PromptLibrarySection() {
  return (
    <section id="prompts" data-accent="neutral" aria-label="Библиотека промптов" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading
            kicker="Инструменты"
            title="Библиотека промптов"
            lead="Шесть готовых заготовок под типовые задачи после первого продукта. Копируйте, заполняйте [КВАДРАТНЫЕ СКОБКИ] — и отдавайте агенту. Все работают и в Claude Code, и в Codex."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PROMPT_LIBRARY.map((prompt) => (
            <Reveal key={prompt.id} className="h-full">
              <PromptCard prompt={prompt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Глоссарий: алфавитный грид. */
export function GlossarySection() {
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, 'ru'));
  return (
    <section id="glossary" data-accent="neutral" aria-label="Глоссарий" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading
            kicker="Справка"
            title="Глоссарий"
            lead="Все термины гайда — простыми словами, по алфавиту."
          />
        </Reveal>
        <Reveal>
          <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {sorted.map((item) => (
              <div key={item.term} className="card p-4.5">
                <dt className="mb-1 font-mono text-[0.85rem] font-semibold text-(--accent)">{item.term}</dt>
                <dd className="text-[0.88rem] leading-relaxed text-muted">{item.def}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/** FAQ (эти же тексты — в JSON-LD FAQPage). */
export function FaqSection() {
  return (
    <section id="faq" data-accent="neutral" aria-label="Частые вопросы" className={SECTION}>
      <div className={WRAP}>
        <Reveal>
          <SectionHeading kicker="Справка" title="Частые вопросы" />
        </Reveal>
        <Reveal>
          <div className="max-w-[820px]">
            <Accordion items={FAQ.map((f) => ({ q: f.q, a: f.a }))} headingLevel="h3" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
