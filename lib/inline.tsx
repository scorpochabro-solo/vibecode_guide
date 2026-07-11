import type { ReactNode } from 'react';

/**
 * Мини-разметка контентных строк: `код`, **жирный**, [ссылка](url).
 * Осознанно НЕ markdown-парсер: только три конструкции, ноль зависимостей.
 */

const TOKEN_RE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN_RE)) {
    const index = match.index;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    const [full, linkText, linkHref, bold, code] = match;
    if (linkText !== undefined && linkHref !== undefined) {
      const isExternal = linkHref.startsWith('http');
      nodes.push(
        <a
          key={key++}
          href={linkHref}
          className="content-link"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {linkText}
        </a>,
      );
    } else if (bold !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-text">
          {bold}
        </strong>,
      );
    } else if (code !== undefined) {
      nodes.push(
        <code key={key++} className="inline-code">
          {code}
        </code>,
      );
    } else {
      nodes.push(full);
    }
    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}
