/**
 * Метаданные сайта и официальные ссылки.
 * Все URL сверены с RESEARCH.md (проверка 2026-07-11).
 */

/** Дата проверки фактов по официальной документации (бейджи «Проверено»). */
export const VERIFIED_AT_ISO = '2026-07-11';
export const VERIFIED_AT_HUMAN = '11 июля 2026';

/** Рабочее название сайта. TODO заказчика: заменить, если финальное имя другое ({{TODO_SITE_NAME}}). */
export const SITE_NAME = 'От идеи до продукта';

/**
 * Домен для canonical/OG/sitemap.
 * Сейчас — GitHub Pages. Появится свой домен ({{TODO_DOMAIN}}) — заменить здесь
 * и убрать PAGES_BASE_PATH из .github/workflows/deploy.yml (см. TODO.md).
 */
export const SITE_URL = 'https://scorpochabro-solo.github.io/vibecode_guide';

export const SITE_TITLE = `Claude Code и Codex для новичков — полный гайд с нуля | ${SITE_NAME}`;
export const SITE_DESCRIPTION =
  'Пошаговый гайд по AI-агентам Claude Code и OpenAI Codex для тех, кто никогда не программировал: установка на Windows, первые промпты, плагины и публикация первого продукта — за один вечер.';

/** ID Яндекс.Метрики. {{TODO_METRIKA_ID}} — задать перед деплоем; пока не задан, счётчик закомментирован. */
export const METRIKA_ID = '{{TODO_METRIKA_ID}}';

/** Контакты автора для футера. {{TODO_AUTHOR_CONTACTS}} */
export const AUTHOR_CONTACTS = '{{TODO_AUTHOR_CONTACTS}}';

/** Официальные ссылки (RESEARCH.md, «Финальные URL для ссылок с сайта»). */
export const LINKS = {
  claudePricing: 'https://www.claude.com/pricing',
  claudeDownload: 'https://www.claude.com/download',
  claudeSignup: 'https://claude.ai',
  claudeCodeSetup: 'https://code.claude.com/docs/en/setup',
  claudeCodeQuickstart: 'https://code.claude.com/docs/en/quickstart',
  claudeCodePlugins: 'https://code.claude.com/docs/en/discover-plugins',
  claudeSupport: 'https://support.claude.com',
  uiuxProMax: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
  gitForWindows: 'https://git-scm.com/downloads/win',
  chatgptSignup: 'https://chatgpt.com',
  chatgptPricing: 'https://chatgpt.com/pricing',
  codexPricing: 'https://chatgpt.com/codex/pricing',
  chatgptDownload: 'https://chatgpt.com/download',
  codexDocs: 'https://learn.chatgpt.com/docs',
  codexWindows: 'https://learn.chatgpt.com/docs/windows/windows-app',
  codexCli: 'https://github.com/openai/codex',
  agentsMd: 'https://learn.chatgpt.com/codex/guides/agents-md',
} as const;
