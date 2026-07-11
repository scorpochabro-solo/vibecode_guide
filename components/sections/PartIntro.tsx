import Reveal from '@/components/layout/Reveal';
import type { Chapter, PartKey } from '@/content/types';

interface Props {
  part: Exclude<PartKey, 'neutral'>;
  num: '01' | '02';
  name: string;
  blurb: string;
  chapters: Chapter[];
}

/** Разделитель-обложка части: крупный номер, имя, чипы глав. Меняет акцент интерфейса. */
export default function PartIntro({ part, num, name, blurb, chapters }: Props) {
  return (
    <section
      id={`part-${part}`}
      data-accent={part}
      aria-label={`Часть ${num} — ${name}`}
      className="relative scroll-mt-20 overflow-hidden border-y border-line bg-surface-1/40"
    >
      <div aria-hidden className="glow hidden sm:block top-[-8rem] right-[-6rem] size-[26rem]" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-20 lg:px-10">
        <Reveal>
          <p className="mono-label mb-4 text-(--accent)">Часть {num}</p>
          <h2 className="h-display text-[clamp(2.2rem,1rem+4.5vw,4.5rem)] text-text">
            {name}
            <span aria-hidden className="text-(--accent)">.</span>
          </h2>
          <p className="prose-measure mt-5 max-w-[52ch] text-[1.02rem] text-muted">{blurb}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chapters.map((ch) => (
              <li key={ch.anchor}>
                <a
                  href={`#${ch.anchor}`}
                  className="flex items-center gap-2 rounded-full border border-line bg-surface-1 px-3.5 py-2 text-[0.82rem] text-muted transition-colors duration-200 hover:border-(--accent) hover:text-text"
                >
                  <span className="font-mono text-[0.7rem] text-(--accent)">{ch.num}</span>
                  {ch.title}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
