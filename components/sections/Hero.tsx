import { ArrowDown } from 'lucide-react';
import VerifiedBadge from '@/components/ui/VerifiedBadge';
import type { CSSProperties } from 'react';

const rise = (delay: number): CSSProperties => ({ '--rise-delay': `${delay}s` } as CSSProperties);

/** Hero: обещание, две CTA в цвета путей, бейдж свежести. Появление — чистый CSS (LCP-safe). */
export default function Hero() {
  return (
    <section id="hero" data-accent="neutral" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* мягкие glow в цвета частей (на мобильных прячем — обрезаются кромкой экрана) */}
      <div aria-hidden className="glow hidden sm:block -top-40 -left-40 size-[34rem]" style={{ '--glow-c': 'var(--color-claude)' } as CSSProperties} />
      <div aria-hidden className="glow hidden sm:block -right-48 top-52 size-[30rem]" style={{ '--glow-c': 'var(--color-codex)' } as CSSProperties} />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:px-10">
        <p className="mono-label rise mb-6 text-muted" style={rise(0)}>
          Гайд для новичков · Windows 10/11 · На русском
        </p>

        <h1 id="hero-heading" className="h-display max-w-[16ch] text-(length:--text-hero)">
          <span className="rise block" style={rise(0.08)}>
            За один вечер —
          </span>
          <span className="rise block" style={rise(0.16)}>
            от <span className="text-claude">идеи</span>
          </span>
          <span className="rise block" style={rise(0.24)}>
            до <span className="text-codex">продукта</span>
          </span>
        </h1>

        <p className="prose-measure rise mt-7 max-w-[46ch] text-lg text-muted" style={rise(0.32)}>
          Вы установите AI-агента и построите свой первый работающий продукт. Без кода. Без опыта. Пошагово — от
          первой команды до публикации в интернете.
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-4" style={rise(0.4)}>
          <a
            href="#claude-1"
            className="rounded-full bg-claude px-7 py-3.5 font-semibold text-[#1a0f08] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Путь Claude →
          </a>
          <a
            href="#codex-1"
            className="rounded-full border border-codex/60 px-7 py-3.5 font-semibold text-codex transition-all duration-200 hover:-translate-y-0.5 hover:bg-codex/10"
          >
            Путь Codex →
          </a>
        </div>

        <div className="rise mt-12 flex flex-wrap items-center gap-4" style={rise(0.48)}>
          <VerifiedBadge />
          <span className="flex items-center gap-2 text-sm text-muted">
            <ArrowDown aria-hidden className="size-4" />
            или начните с раздела «Как это работает»
          </span>
        </div>
      </div>
    </section>
  );
}
