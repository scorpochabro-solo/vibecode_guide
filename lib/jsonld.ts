import { CLAUDE_CHAPTERS } from '@/content/chapters-claude';
import { CODEX_CHAPTERS } from '@/content/chapters-codex';
import { FAQ } from '@/content/faq';
import { SITE_NAME, SITE_URL } from '@/content/meta';
import type { Chapter } from '@/content/types';

/** JSON-LD: два HowTo (пути Claude и Codex) + FAQPage. */

function howToFromChapters(name: string, chapters: Chapter[]) {
  return {
    '@type': 'HowTo',
    name,
    inLanguage: 'ru',
    step: chapters.map((ch, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: ch.title,
      text: ch.lead,
      url: `${SITE_URL}/#${ch.anchor}`,
    })),
  };
}

export function buildJsonLd(): string {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      howToFromChapters(`Путь Claude: от установки до первого продукта — ${SITE_NAME}`, CLAUDE_CHAPTERS),
      howToFromChapters(`Путь Codex: от установки до первого продукта — ${SITE_NAME}`, CODEX_CHAPTERS),
      {
        '@type': 'FAQPage',
        inLanguage: 'ru',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
  // экранируем «<», чтобы содержимое нельзя было интерпретировать как HTML
  return JSON.stringify(graph).replace(/</g, '\\u003c');
}
