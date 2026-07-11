'use client';

import { Check, ChevronDown, Copy } from 'lucide-react';
import { useCopy } from '@/hooks/useCopy';
import type { PromptAsset } from '@/content/types';

/** Карточка библиотеки промптов: назначение, копирование в один клик, разворот текста. */
export default function PromptCard({ prompt }: { prompt: PromptAsset }) {
  const { copied, copy } = useCopy();

  return (
    <article className="card card-hover flex h-full flex-col p-5">
      <h3 className="h-sub mb-1.5 text-[1.05rem]">{prompt.title}</h3>
      {prompt.purpose ? <p className="mb-4 text-[0.9rem] leading-relaxed text-muted">{prompt.purpose}</p> : null}

      <details className="group mb-4">
        <summary className="mono-label flex cursor-pointer list-none items-center gap-1.5 text-muted transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
          <ChevronDown aria-hidden className="size-3.5 transition-transform duration-200 group-open:rotate-180" />
          Показать текст промпта
        </summary>
        <pre className="mt-3 max-h-72 overflow-auto rounded-(--radius-sm) border border-line bg-[#0d0e11] p-4 font-mono text-[0.75rem] leading-[1.7] whitespace-pre-wrap text-[#dfe2e6]">
          {prompt.text}
        </pre>
      </details>

      <button
        type="button"
        onClick={() => void copy(prompt.text)}
        aria-label={copied ? 'Скопировано' : `Скопировать промпт «${prompt.title}»`}
        className="mono-label mt-auto flex w-fit cursor-pointer items-center gap-1.5 rounded-md border border-line px-3 py-2 text-muted transition-colors duration-200 hover:border-(--accent) hover:text-text"
      >
        {copied ? <Check aria-hidden className="size-3.5 text-(--accent)" /> : <Copy aria-hidden className="size-3.5" />}
        {copied ? '✓ Скопировано' : 'Скопировать'}
      </button>
    </article>
  );
}
