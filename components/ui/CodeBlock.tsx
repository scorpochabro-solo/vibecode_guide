'use client';

import { Check, Copy } from 'lucide-react';
import { useCopy } from '@/hooks/useCopy';
import type { CodeSnippet } from '@/content/types';

/** Терминальное «окно»: три точки, метка PowerShell, кнопка «Скопировать». */
export default function CodeBlock({ code }: { code: CodeSnippet }) {
  const { copied, copy } = useCopy();
  const text = code.lines.join('\n');

  return (
    <div className="my-4">
      <div className="terminal">
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <i className="size-2.5 rounded-full bg-[#ff5f57]" />
            <i className="size-2.5 rounded-full bg-[#febc2e]" />
            <i className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="mono-label text-muted">{code.label}</span>
          <button
            type="button"
            onClick={() => void copy(text)}
            aria-label={copied ? 'Скопировано' : `Скопировать команду: ${text}`}
            className="mono-label ml-auto flex cursor-pointer items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-muted transition-colors duration-200 hover:border-(--accent) hover:text-text"
          >
            {copied ? <Check aria-hidden className="size-3.5 text-(--accent)" /> : <Copy aria-hidden className="size-3.5" />}
            {copied ? '✓ Скопировано' : 'Скопировать'}
          </button>
        </div>
        <pre className="terminal-code" tabIndex={0}>
          {code.lines.map((line, i) => (
            <span key={i} className="block">
              <span className="cmd-prompt">{'> '}</span>
              {line}
            </span>
          ))}
        </pre>
      </div>
      {code.note ? <p className="mt-2 text-sm text-muted">{code.note}</p> : null}
    </div>
  );
}
