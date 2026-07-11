# TODO.md — чеклист заказчика перед публикацией

Всё, что на сайте помечено `{{TODO_*}}`, заполняется здесь. Код менять не нужно —
все значения живут в двух местах: `content/meta.ts` (константы) и `content/chapters-*.ts`
(карточка verification-плагина).

## 1. Обязательно до деплоя

| # | Что | Где менять | Текущее значение |
|---|-----|-----------|------------------|
| 1 | **Домен** для canonical/OG/sitemap | `content/meta.ts` → `SITE_URL` | `https://scorpochabro-solo.github.io/vibecode_guide` (GitHub Pages). При переезде на свой домен: поменять константу И убрать `PAGES_BASE_PATH` из `.github/workflows/deploy.yml`, добавить CNAME |
| 2 | **Название сайта** (если не «От идеи до продукта») | `content/meta.ts` → `SITE_NAME` | «От идеи до продукта» |
| 3 | **Контакты автора** в футере | `content/meta.ts` → `AUTHOR_CONTACTS` | `{{TODO_AUTHOR_CONTACTS}}` |
| 4 | **ID Яндекс.Метрики** (счётчик включится сам, когда ID станет числом) | `content/meta.ts` → `METRIKA_ID` | `{{TODO_METRIKA_ID}}` |

## 2. Verification-плагин (карточки в главах 1.5 и 2.5)

| Плейсхолдер | Где менять |
|---|---|
| `{{TODO_VERIFICATION_PLUGIN_NAME}}` | `content/chapters-claude.ts` (глава 1.5) и `content/chapters-codex.ts` (глава 2.5) |
| `{{TODO_VERIFICATION_PLUGIN_INSTALL_CMD}}` | там же |
| `{{TODO_VERIFICATION_PLUGIN_DESCRIPTION}}` | там же (2–3 предложения: что именно проверяет) |
| Совместимость с Codex | в главе 2.5 сейчас честная заглушка «уточняется» — поправить по факту |

## 3. Скриншоты (18 слотов)

Положить PNG в `public/` под этими именами — слоты на сайте показывают, что где должно быть.
Рекомендуемое разрешение ~1600×1000 (16:10).

- `screenshot-1-1a-claude-signup.png` — экран входа claude.ai
- `screenshot-1-1b-claude-plan.png` — страница выбора плана
- `screenshot-1-1c-claude-app-download.png` — claude.com/download, кнопка Windows
- `screenshot-1-1d-claude-app-ui.png` — приложение: Chat / Projects / Code
- `screenshot-1-3a-project-create.png` — создание Project
- `screenshot-1-3b-project-instructions.png` — поле Project instructions
- `screenshot-1-4a-powershell-open.png` — меню Win+X → Терминал
- `screenshot-1-4b-install-command.png` — PowerShell с командой установки
- `screenshot-1-4c-claude-version.png` — вывод claude --version
- `screenshot-1-4d-claude-first-run.png` — первый запуск claude
- `screenshot-1-4e-claude-login.png` — вход через браузер
- `screenshot-1-5a-plugin-install.png` — установка UI UX Pro Max *(слот пока не размещён на странице — добавить при желании в главу 1.5)*
- `screenshot-2-1a-chatgpt-signup.png` — регистрация ChatGPT
- `screenshot-2-1b-chatgpt-store.png` — приложение ChatGPT в Microsoft Store (издатель OpenAI)
- `screenshot-2-1c-chatgpt-app-ui.png` — режимы Chat / Work / Codex
- `screenshot-2-1d-codex-tab.png` — режим Codex, список проектов
- `screenshot-2-3a-chatgpt-project.png` — создание Project в ChatGPT
- `screenshot-2-4a-codex-add-project.png` — Add new project
- `screenshot-2-4b-codex-run.png` — Codex выполняет задачу

После добавления файлов замените в `components/ui/ScreenshotSlot.tsx` плейсхолдер на `<img>`
(или попросите агента: «замени слоты скриншотов на реальные картинки из public/»).

## 4. Поддержание свежести

- Дата «Проверено» живёт в `content/meta.ts` → `VERIFIED_AT_*`. Меняйте её ТОЛЬКО после
  реальной перепроверки команд по официальной документации (список источников — `RESEARCH.md`).
- Быстрая перепроверка: попросите агента «сверь команды на сайте с RESEARCH.md и официальной документацией».

## 5. Деплой (когда всё выше готово)

Сайт — статический экспорт (`npm run build` → папка `out/`), подходит GitHub Pages / Vercel.
Готовый промпт для агента — карточка «Публикация» в библиотеке промптов на самом сайте.
