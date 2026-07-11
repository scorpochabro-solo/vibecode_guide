/**
 * Типизированная модель контента гайда.
 * Тексты поддерживают мини-разметку: `код`, **жирный**, [ссылка](url) — см. lib/inline.tsx.
 */

export type CalloutType = 'info' | 'warn' | 'success';

export interface Callout {
  type: CalloutType;
  title?: string;
  text: string;
}

export interface CodeSnippet {
  /** Метка окна терминала: 'PowerShell', 'Claude Code', 'ChatGPT' и т.п. */
  label: string;
  lines: string[];
  note?: string;
}

export interface Screenshot {
  /** Имя файла-слота вида screenshot-1-4b-install-command.png */
  file: string;
  caption: string;
}

export interface StepItem {
  title: string;
  text?: string;
  code?: CodeSnippet;
  callout?: Callout;
  screenshot?: Screenshot;
}

export interface PluginInstallPath {
  title: string;
  intro?: string;
  code: CodeSnippet;
}

export interface PluginCard {
  name: string;
  tagline: string;
  what: string;
  requires?: string[];
  installPaths: PluginInstallPath[];
  verify?: { text: string; code?: CodeSnippet };
  gotchas?: string[];
  link?: { label: string; href: string };
  /** Карточка-плейсхолдер заказчика ({{TODO_*}}) */
  todo?: boolean;
}

export interface AccordionItem {
  q: string;
  a: string;
}

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'steps'; start?: number; items: StepItem[] }
  | { kind: 'code'; code: CodeSnippet }
  | { kind: 'callout'; callout: Callout }
  | { kind: 'prompt'; promptId: string }
  | { kind: 'plugin-card'; card: PluginCard }
  | { kind: 'pipeline' }
  | { kind: 'accordion'; items: AccordionItem[] }
  | { kind: 'good-bad'; bad: { title: string; text: string }; good: { title: string; text: string } }
  | { kind: 'screenshot'; shot: Screenshot }
  | { kind: 'troubleshoot'; title?: string; items: { problem: string; fix: string; code?: CodeSnippet }[] };

export type PartKey = 'claude' | 'codex' | 'neutral';

export interface Chapter {
  /** Якорь секции, напр. claude-4 */
  anchor: string;
  /** Моно-номер главы: '01'…'07' */
  num: string;
  title: string;
  lead: string;
  /** Показывать бейдж «Проверено: …» (главы-инструкции) */
  verified?: boolean;
  blocks: Block[];
}

export interface PromptAsset {
  id: string;
  title: string;
  purpose?: string;
  /** Текст промпта — копируется дословно */
  text: string;
}

export interface GlossaryTerm {
  term: string;
  def: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CompareRow {
  label: string;
  claude: string;
  codex: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  part: PartKey;
}
