'use client';

import { Check, ChevronsDownUp, ChevronsUpDown, Copy, Terminal } from 'lucide-react';
import { useState } from 'react';
import { useCopy } from '@/hooks/useCopy';
import type { PromptAsset } from '@/content/types';

/** Большой блок готового промпта: копирование в один клик + разворот на весь текст. */
export default function PromptBlock({ prompt }: { prompt: PromptAsset }) {
  const { copied, copy } = useCopy();
  const [expanded, setExpanded] = useState(false);

  return (
    <figure className="my-6">
      <div className="terminal">
        <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
          <Terminal aria-hidden className="size-4 shrink-0 text-(--accent)" />
          <span className="min-w-0 flex-1 truncate font-mono text-[0.8rem] font-medium text-text">{prompt.title}</span>
          <button
            type="button"
            onClick={() => void copy(prompt.text)}
            aria-label={copied ? 'Скопировано' : `Скопировать промпт «${prompt.title}» целиком`}
            className="mono-label flex cursor-pointer items-center gap-1.5 rounded-md border border-line px-3 py-2 text-muted transition-colors duration-200 hover:border-(--accent) hover:text-text"
          >
            {copied ? <Check aria-hidden className="size-3.5 text-(--accent)" /> : <Copy aria-hidden className="size-3.5" />}
            {copied ? '✓ Скопировано' : 'Скопировать'}
          </button>
        </div>

        <div className="relative">
          <pre
            className={`overflow-auto px-5 py-4 font-mono text-[0.8rem] leading-[1.75] whitespace-pre-wrap text-[#dfe2e6] ${
              expanded ? '' : 'max-h-[24rem]'
            }`}
            tabIndex={0}
          >
            {prompt.text}
          </pre>
          {!expanded ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0e11] to-transparent"
            />
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mono-label flex w-full cursor-pointer items-center justify-center gap-2 border-t border-line px-4 py-3 text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-text"
        >
          {expanded ? (
            <>
              <ChevronsDownUp aria-hidden className="size-3.5" />
              Свернуть
            </>
          ) : (
            <>
              <ChevronsUpDown aria-hidden className="size-3.5" />
              Развернуть целиком
            </>
          )}
        </button>
      </div>
      {prompt.purpose ? <figcaption className="mt-2 text-sm text-muted">{prompt.purpose}</figcaption> : null}
    </figure>
  );
}
