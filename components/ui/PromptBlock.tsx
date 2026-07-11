'use client';

import { Check, Copy, Terminal } from 'lucide-react';
import { useCopy } from '@/hooks/useCopy';
import type { PromptAsset } from '@/content/types';

/** Большой блок готового промпта с кнопкой копирования (6.1, 6.2, шаблоны памяток). */
export default function PromptBlock({ prompt }: { prompt: PromptAsset }) {
  const { copied, copy } = useCopy();

  return (
    <figure className="my-6">
      <div className="terminal">
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
          <Terminal aria-hidden className="size-4 shrink-0 text-(--accent)" />
          <span className="min-w-0 flex-1 truncate font-mono text-[0.8rem] font-medium text-text">{prompt.title}</span>
          <button
            type="button"
            onClick={() => void copy(prompt.text)}
            aria-label={copied ? 'Скопировано' : `Скопировать промпт «${prompt.title}»`}
            className="mono-label flex cursor-pointer items-center gap-1.5 rounded-md border border-line px-3 py-2 text-muted transition-colors duration-200 hover:border-(--accent) hover:text-text"
          >
            {copied ? <Check aria-hidden className="size-3.5 text-(--accent)" /> : <Copy aria-hidden className="size-3.5" />}
            {copied ? '✓ Скопировано' : 'Скопировать'}
          </button>
        </div>
        <pre className="max-h-[26rem] overflow-auto px-5 py-4 font-mono text-[0.8rem] leading-[1.75] whitespace-pre-wrap text-[#dfe2e6]" tabIndex={0}>
          {prompt.text}
        </pre>
      </div>
      {prompt.purpose ? <figcaption className="mt-2 text-sm text-muted">{prompt.purpose}</figcaption> : null}
    </figure>
  );
}
