import type { CompareRow, ChecklistItem } from './types';

/** Сравнение Claude vs Codex — честное, без победителя. Факты: RESEARCH.md. */
export const COMPARE_ROWS: CompareRow[] = [
  {
    label: 'Установка',
    claude: 'Приложение с claude.com/download + одна команда в PowerShell для агента',
    codex: 'Приложение «ChatGPT» из Microsoft Store; терминальный CLI — по желанию',
  },
  {
    label: 'Где живёт агент',
    claude: 'Терминал (PowerShell) и вкладка Code в приложении',
    codex: 'Режим Codex в приложении ChatGPT (команды выполняет в PowerShell «под капотом»)',
  },
  {
    label: 'Какой план нужен',
    claude: 'Платный: Pro и выше (в Free агента нет)',
    codex: 'Формально любой, включая Free (ограниченно); комфортно — Plus и выше',
  },
  {
    label: 'Памятка проекта',
    claude: 'CLAUDE.md',
    codex: 'AGENTS.md',
  },
  {
    label: 'Прокачка',
    claude: 'Плагины и скиллы: /plugin, маркетплейсы',
    codex: 'Скиллы (uipro init --ai codex) и AGENTS.md; формата плагинов Claude нет',
  },
  {
    label: 'Безопасность',
    claude: 'Спрашивает разрешение на команды; режимы разрешений',
    codex: 'Песочница Windows: вне папки проекта и в сеть — только с одобрения',
  },
  {
    label: 'Кому подойдёт',
    claude: 'Тем, кто хочет максимум расширений и жизнь в терминале',
    codex: 'Тем, кто уже платит за ChatGPT и хочет всё в одном приложении',
  },
];

/** Мини-таблица блока «Выбор пути» (короче полной). */
export const CHOOSE_ROWS: CompareRow[] = [
  { label: 'Где живёт', claude: 'Терминал + приложение Claude', codex: 'Приложение ChatGPT' },
  { label: 'План', claude: 'Pro и выше', codex: 'Любой; удобно с Plus+' },
  { label: 'Характер', claude: 'Конструктор с плагинами', codex: 'Всё в одном окне' },
];

/** Чеклист прогресса. id стабильные — по ним состояние хранится в localStorage. */
export const CHECKLIST: ChecklistItem[] = [
  { id: 'intro-read', label: 'Прочитал введение и выбрал путь (или оба)', part: 'neutral' },
  { id: 'c-account', label: 'Создал аккаунт на claude.ai', part: 'claude' },
  { id: 'c-plan', label: 'Оформил план Pro или выше', part: 'claude' },
  { id: 'c-app', label: 'Установил приложение Claude для Windows', part: 'claude' },
  { id: 'c-prompts', label: 'Прошёл практикум по промптам (глава 1.2)', part: 'claude' },
  { id: 'c-generator', label: 'Собрал проект «Генератор промптов»', part: 'claude' },
  { id: 'c-install', label: 'Установил Claude Code и увидел версию', part: 'claude' },
  { id: 'c-login', label: 'Запустил claude в папке проекта и вошёл', part: 'claude' },
  { id: 'c-plugin', label: 'Поставил UI UX Pro Max', part: 'claude' },
  { id: 'c-claudemd', label: 'Создал CLAUDE.md по шаблону', part: 'claude' },
  { id: 'c-product', label: 'Собрал первый продукт по конвейеру', part: 'claude' },
  { id: 'c-deploy', label: 'Опубликовал продукт (GitHub Pages / Vercel)', part: 'claude' },
  { id: 'x-account', label: 'Создал аккаунт ChatGPT', part: 'codex' },
  { id: 'x-app', label: 'Установил приложение ChatGPT из Microsoft Store', part: 'codex' },
  { id: 'x-generator', label: 'Перенёс «Генератор промптов» в ChatGPT', part: 'codex' },
  { id: 'x-project', label: 'Добавил папку-проект в Codex', part: 'codex' },
  { id: 'x-tools', label: 'Поставил Git, Node.js и Python через winget', part: 'codex' },
  { id: 'x-agentsmd', label: 'Создал AGENTS.md по шаблону', part: 'codex' },
  { id: 'x-skill', label: 'Подключил UI UX Pro Max для Codex', part: 'codex' },
  { id: 'x-product', label: 'Собрал и опубликовал продукт через Codex', part: 'codex' },
];
