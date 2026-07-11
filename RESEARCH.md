# RESEARCH.md — сверка фактов с официальной документацией

> **Дата проверки: 2026-07-11.** Метод: 7 параллельных проверок официальных источников
> (WebFetch/WebSearch + браузер для JS-страниц) + независимый критик полноты, который
> перепроверил противоречия по сырым README. Итог: **39 фактов подтверждено, 9 изменилось,
> 0 не найдено.** Все команды сверены посимвольно по raw-источникам.
> Это — источник истины для контента сайта. В Фазе 2 команды берутся ТОЛЬКО отсюда.

## ⚠️ Ключевые изменения относительно исходного ТЗ

1. **Codex доступен даже на Free** — офиц. страница тарифов: «ChatGPT Work and Codex are included in your ChatGPT Free, Go, Plus, Pro, Business, Edu, or Enterprise plan». Free — ограниченно («quick coding tasks»), для реальной работы нужен Plus и выше. Формулировка «входит в подписку ChatGPT Plus» устарела (так до сих пор пишет README на GitHub — он отстаёт от тарифной страницы).
2. **Projects в Claude есть и на Free** (до 5 проектов) → глава 1.3 «Генератор промптов» доступна читателю ещё ДО оплаты.
3. **Документация Codex переехала**: `developers.openai.com/codex/*` → 308 redirect → `learn.chatgpt.com`. На сайте используем новые URL.
4. **Приложение для Codex на Windows** — это новое объединённое приложение **«ChatGPT»** в Microsoft Store (издатель OpenAI, ID `9PLM9XGG6VKS`, вышло 2026-03-04, режимы Chat / Work / Codex). Бывшее отдельное приложение Codex обновляется в него. Рядом в Store живёт «ChatGPT Classic» (старый ассистент) и толпа фейков — на сайте обязателен блок «проверьте издателя: OpenAI».
5. **`winget install Python.Python.3.12` — НЕ официальная команда** README UI UX Pro Max (там только «python.org или пакетный менеджер»). Если печатаем winget-команду — помечаем как нашу рекомендацию, не как требование README.
6. **Определение плагина Claude Code изменилось**: теперь «skills, agents, hooks, and MCP servers» (кастомные команды влиты в скиллы).
7. **Режимы одобрения Codex переименованы**: пресет по умолчанию «Auto», переключение через `/permissions`; в конфиге `approval_policy: untrusted / on-request / never`. Названия «Ask for approval» как режима больше нет (это подпись у композера в приложении).
8. **Вкладка Code в десктоп-приложении Claude требует Git for Windows** (для CLI Git опционален).
9. **Плагины ставятся и без терминала** — в десктоп-приложении Claude есть UI-менеджер плагинов (кнопка «+» → Plugins).

---

## 1. Claude Code — установка на Windows

| Факт | Источник | Статус | Примечание / точная формулировка |
|---|---|---|---|
| Установка в PowerShell: `irm https://claude.ai/install.ps1 \| iex` | [setup](https://code.claude.com/docs/en/setup) | ✅ подтверждён | посимвольно |
| Права администратора НЕ нужны; WSL НЕ нужен | [setup](https://code.claude.com/docs/en/setup) | ✅ подтверждён | «You do not need to run as Administrator» |
| Git for Windows опционален: с ним — Bash-инструмент, без него — PowerShell-инструмент | [setup](https://code.claude.com/docs/en/setup) | ✅ подтверждён | рекомендуют поставить; при установке отметить «Add to PATH» |
| Проверка версии: `claude --version` | [setup](https://code.claude.com/docs/en/setup) | ✅ подтверждён | |
| Диагностика: `claude doctor` | [setup](https://code.claude.com/docs/en/setup) | ✅ подтверждён | |
| Первый запуск: `claude` в папке проекта → вход через браузер | [quickstart](https://code.claude.com/docs/en/quickstart) | ✅ подтверждён | если браузер не открылся — клавиша `c` копирует ссылку |
| Скриншот из буфера: **Alt+V** (не Ctrl+V) | [interactive-mode](https://code.claude.com/docs/en/interactive-mode) | ✅ подтверждён | «Alt+V (Windows and WSL) — Paste image from clipboard»; docs предупреждают, что шорткаты могут отличаться по терминалам |
| Требуется платный план; Free не включает Claude Code | [setup](https://code.claude.com/docs/en/setup), [pricing](https://www.claude.com/pricing) | ✅ подтверждён | «requires a Pro, Max, Team, Enterprise, or Console account» |
| Системные требования: Windows 10 1809+ (или Server 2019+), 4 GB+ RAM, x64/ARM64 | [setup](https://code.claude.com/docs/en/setup) | ✅ подтверждён | 32-бит не поддерживается; интернет обязателен |
| «claude is not recognized» → добавить в PATH + перезапустить терминал | [troubleshoot-install](https://code.claude.com/docs/en/troubleshoot-install) | ✅ подтверждён | точные команды PATH-фикса ниже |

**Дословные команды/фиксы для сайта (проверены):**
- CMD-вариант установки: `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`
- WinGet-вариант: `winget install Anthropic.ClaudeCode` (⚠️ не автообновляется — обновлять `winget upgrade Anthropic.ClaudeCode`; нативный установщик обновляется сам)
- PATH-фикс (обе строки, потом новый терминал): `$currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')` → `[Environment]::SetEnvironmentVariable('PATH', "$currentPath;$env:USERPROFILE\.local\bin", 'User')`; бинарь лежит в `%USERPROFILE%\.local\bin\claude.exe`
- Как отличить PowerShell от CMD: приглашение `PS C:\` = PowerShell. Ошибка «'irm' is not recognized» = вы в CMD; «The token '&&' is not a valid statement separator» = вы в PowerShell
- Не открывать «Windows PowerShell (x86)» из меню Пуск — даст ложную ошибку «does not support 32-bit Windows»
- Обновление вручную: `claude update`; продолжить последний разговор: `claude -c`; выход: `/exit` или Ctrl+D
- TLS-ошибка на старых Windows: перед установкой выполнить `[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12`
- Node.js для нативного установщика НЕ нужен (нужен только для npm-пути `npm install -g @anthropic-ai/claude-code`, Node 22+)
- ⚠️ Если в системе задана переменная `ANTHROPIC_API_KEY` — Claude Code будет списывать деньги по API вместо подписки

## 2. Claude — тарифы, приложение, Projects

| Факт | Источник | Статус | Примечание |
|---|---|---|---|
| Планы: Free, Pro, Max 5x, Max 20x, Team, Enterprise; Claude Code — в Pro и выше | [claude.com/pricing](https://www.claude.com/pricing) | ✅ подтверждён | у Pro пометка «Includes Claude Code»; цены НЕ хардкодим |
| Десктоп-приложение для Windows: claude.com/download | [claude.com/download](https://www.claude.com/download) | ✅ подтверждён | x64 и arm64; требование «Windows 10 or higher»; запуск из меню Пуск |
| Projects с полем инструкций | [support: What are Projects](https://support.claude.com/en/articles/9517075-what-are-projects) | ⚠️ изменился | Projects доступны **всем, включая Free** (лимит 5 проектов); поле официально называется «project instructions» |
| В приложении есть вкладка Code | [support: power user tips](https://support.claude.com/en/articles/14554000-claude-code-power-user-tips), [docs/desktop](https://code.claude.com/docs/en/desktop) | ✅ подтверждён | вкладки: Chat, Cowork, Code; ⚠️ Code-вкладка требует Git for Windows (поставить и перезапустить приложение) |
| Официальная страница цен | [claude.com/pricing](https://www.claude.com/pricing) | ✅ подтверждён | для ссылок с сайта |
| Регистрация на claude.ai: Google или email | [support: log in](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account) | ✅ подтверждён | пароля НЕТ вообще: вход по Google или magic-ссылке из письма |

**Для контента:** лимиты Pro/Max общие между чатом и Claude Code; Claude Code есть и в мобильном приложении (вкладка Code); полезные ссылки: [шпаргалка](https://support.claude.com/en/articles/14553413), [советы](https://support.claude.com/en/articles/14554000).

## 3. Плагины Claude Code

| Факт | Источник | Статус | Примечание |
|---|---|---|---|
| `/plugin marketplace add <owner>/<repo>` | [discover-plugins](https://code.claude.com/docs/en/discover-plugins) | ✅ подтверждён | |
| `/plugin install <plugin>@<marketplace>` | [discover-plugins](https://code.claude.com/docs/en/discover-plugins) | ✅ подтверждён | |
| Плагин = набор «commands, agents, skills, hooks, MCP» | [plugins](https://code.claude.com/docs/en/plugins) | ⚠️ изменился | теперь: «skills, agents, hooks, and MCP servers» — команды влиты в скиллы |
| Интерактивный менеджер `/plugin` | [discover-plugins](https://code.claude.com/docs/en/discover-plugins) | ✅ подтверждён | вкладки Discover / Installed / Marketplaces / Errors |
| Скилл = папка с SKILL.md; плагин = распространяемый пакет скиллов и пр. | [skills](https://code.claude.com/docs/en/skills) | ✅ подтверждён | |
| Плагины работают в десктоп-приложении (вкладка Code) | [desktop](https://code.claude.com/docs/en/desktop) | ✅ подтверждён | «+» рядом с полем ввода → Plugins; официальный маркетплейс Anthropic доступен из коробки |

**Для контента:** после установки/включения — `/reload-plugins`; скоупы установки User / Project / Local; удаление маркетплейса удаляет его плагины; предупреждение безопасности из доков: плагины «могут исполнять произвольный код» — ставить только из доверенных источников.

## 4. UI UX Pro Max (github.com/nextlevelbuilder/ui-ux-pro-max-skill)

| Факт | Источник | Статус | Примечание |
|---|---|---|---|
| Путь A: `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` → `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` | [README](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | ✅ подтверждён | сверено по raw README |
| Путь B: `npm install -g ui-ux-pro-max-cli` → `uipro init --ai claude` | README | ✅ подтверждён | выполнять `uipro init` В ПАПКЕ проекта; вариант для всех проектов: `uipro init --ai claude --global`; без глобальной установки: `npx ui-ux-pro-max-cli init --ai claude` |
| Для Codex CLI: `uipro init --ai codex` | README | ✅ подтверждён | Codex поддержан официально |
| Требует Python 3; «рекомендуемая команда winget install Python.Python.3.12» | README | ⚠️ изменился | Python 3.x нужен (скрипты — только stdlib, ничего не ставят и не ходят в сеть), но README НЕ даёт winget-команду — только «python.org или пакетный менеджер (Homebrew, apt, winget)». Winget-команду на сайте помечать как нашу подсказку |
| Содержимое | README | ✅ подтверждён | v2.10.2 (2026-07-06): 67 стилей, 161 палитра, 57 пар шрифтов, 25 типов графиков, 22 стека, 99 UX-гайдлайнов |
| Проверка работы | README | ✅ подтверждён | `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --design-system -p "Serenity Spa"`; скилл авто-активируется на UI/UX-промптах |
| Node.js нужен для пути B | README | ✅ подтверждён | версия Node в README не указана |

**⚠️ Windows-гоча для сайта:** все команды README используют `python3`, но на Windows команда — `python` (или `py`). `python3` в PowerShell часто открывает заглушку Microsoft Store. На сайте: «замените python3 на python»; при проблеме — отключить алиас в Настройки → Приложения → Псевдонимы выполнения приложений. Пакет называется `ui-ux-pro-max-cli`, а команда — `uipro`; старый пакет `uipro-cli` ставить нельзя. Репозиторий — бесплатная Basic-версия (MIT); есть платный Premium на uupm.cc — сайт не должен обещать «всё бесплатно».

## 5. Codex — приложение на Windows

| Факт | Источник | Статус | Примечание |
|---|---|---|---|
| Официальное приложение с Codex для Windows существует | [learn.chatgpt.com/docs/windows/windows-app](https://learn.chatgpt.com/docs/windows/windows-app) | ✅ подтверждён | это «ChatGPT desktop app»; в Store называется просто **ChatGPT**, издатель OpenAI |
| URL из ТЗ developers.openai.com/codex/app/windows | — | ⚠️ изменился | 308 → `learn.chatgpt.com/docs/windows/windows-app`; обзор: `learn.chatgpt.com/docs/app` |
| Нативный агент в PowerShell; опционально WSL2 | learn.chatgpt.com | ✅ подтверждён | «runs natively on Windows using PowerShell and the Windows sandbox»; переключение на WSL в Settings + ПЕРЕЗАПУСК приложения; WSL1 больше не поддерживается |
| Рекомендуемые инструменты через winget | learn.chatgpt.com | ✅ подтверждён | дословно: `winget install --id Git.Git`, `winget install --id OpenJS.NodeJS.LTS`, `winget install --id Python.Python.3.14`, `winget install --id Microsoft.DotNet.SDK.10`, `winget install --id GitHub.cli`; после GitHub CLI — `gh auth login` |
| Кнопка добавления проекта | learn.chatgpt.com | ✅ подтверждён | «click **Add new project** or press **Ctrl + O**» |
| Codex входит в Plus и выше | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) | ⚠️ изменился | теперь ВО ВСЕ планы, включая Free (ограниченно, «quick tasks»); для реальной работы — Plus+. Планы: Free, Go, Plus, Pro, Business, Edu, Enterprise |
| Системные требования | [Store](https://apps.microsoft.com/detail/9plm9xgg6vks) | ⚠️ изменился | в доках нет; Store: Windows 10 сборка 19041+ (версия 2004), x64/arm64, ~1.8 ГБ. Codex-докам «best baseline» — Windows 11 |
| Страница цен ChatGPT | [chatgpt.com/pricing](https://chatgpt.com/pricing) | ✅ подтверждён | + отдельная [chatgpt.com/codex/pricing](https://chatgpt.com/codex/pricing) |

**Для контента:** режимы приложения: Chat / Work / Codex; «Ask for approval» — подпись у поля ввода, оставляющая песочницу включённой; полный доступ = предупреждение из доков о «unintentional destructive actions»; ошибка execution policy («npm.ps1 cannot be loaded…») — фикс `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`; запуск от админа = «Run as administrator» на приложении; конфиг Codex в `%USERPROFILE%\.codex`.

## 6. Codex CLI (github.com/openai/codex)

| Факт | Источник | Статус | Примечание |
|---|---|---|---|
| Windows-установка: `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 \| iex"` | [README](https://github.com/openai/codex) | ✅ подтверждён | посимвольно по raw README |
| Альтернативы: npm / winget / brew | README | ⚠️ изменился | официально в README только: `npm install -g @openai/codex` (именно `install`, не `i`) и `brew install --cask codex` (Mac-only). Winget-пакета в README нет |
| Вход через аккаунт ChatGPT | README, [auth](https://learn.chatgpt.com/codex/auth) | ✅ подтверждён | запуск `codex` → «Sign in with ChatGPT» → браузер; явная команда `codex login`. README пишет «Plus, Pro, Business, Edu, or Enterprise» — отстаёт от тарифной страницы (Free тоже входит, см. §5) |
| AGENTS.md — аналог CLAUDE.md | [guides/agents-md](https://learn.chatgpt.com/codex/guides/agents-md) | ✅ подтверждён | глобальный `~/.codex/AGENTS.md` + по-проектные; ближе к папке = приоритетнее; `/init` генерирует заготовку; лимит 32 KiB |
| Режимы одобрения «Ask for approval» | [agent-approvals-security](https://learn.chatgpt.com/codex/agent-approvals-security) | ⚠️ изменился | пресет по умолчанию «Auto» (workspace-write): читает/правит/запускает в папке проекта, спрашивает за её пределами и для сети; смена — `/permissions`; в конфиге `approval_policy: untrusted / on-request / never` |
| Песочница на Windows | [concepts/sandboxing](https://learn.chatgpt.com/codex/concepts/sandboxing), [codex/windows/windows-sandbox](https://learn.chatgpt.com/codex/windows/windows-sandbox) | ✅ подтверждён | нативная Windows-песочница (elevated/unelevated в config.toml); в WSL2 — Linux bubblewrap |
| Статус Windows-поддержки | [codex/windows](https://learn.chatgpt.com/codex/windows) | ⚠️ изменился | нативный режим — рекомендация по умолчанию («Use the native Windows sandbox by default»), НЕ экспериментальный; WSL — только если нужен Linux-тулинг. Windows 11 рекомендован; Win 10 1809+ — «best effort» |

**Для контента:** при первом запуске нативной песочницы Windows покажет UAC-запрос — отказ ломает установку; слэш-команды Codex: `/permissions`, `/init`, `/status`, `/model`; обновление CLI = повторный запуск той же install-команды; сеть внутри песочницы заблокирована до явного одобрения.

## 7. Приложение ChatGPT в Microsoft Store

| Факт | Источник | Статус | Примечание |
|---|---|---|---|
| Официальное приложение ChatGPT в Store, издатель OpenAI | [Store 9PLM9XGG6VKS](https://apps.microsoft.com/detail/9plm9xgg6vks) | ✅ подтверждён | название «ChatGPT», категория Developer tools, бесплатно, ~1.8 ГБ, released 2026-03-04 |
| Официальный путь скачивания | [chatgpt.com/download](https://chatgpt.com/download/) | ⚠️ изменился | openai.com/chatgpt/download → редирект на chatgpt.com/download; кнопка Windows ведёт в Store-инсталлер `get.microsoft.com/installer/download/9PLM9XGG6VKS`; отдельного .exe для Windows нет |
| Минимальная версия Windows | Store | ✅ подтверждён | Windows 10 сборка 19041.0+ (версия 2004), x64/arm64 |
| Codex живёт ВНУТРИ приложения ChatGPT | [help: moving to the new app](https://help.openai.com/en/articles/20001276-moving-to-the-new-chatgpt-desktop-app) | ✅ подтверждён | отдельного приложения «Codex» в Store нет; новое приложение = Chat + Work + Codex (package family «OpenAI.Codex_…» — это бывший Codex-app). Рядом есть «ChatGPT Classic» (старый ассистент, отдельное приложение) |
| Страница цен | [chatgpt.com/pricing](https://chatgpt.com/pricing) | ✅ подтверждён | планы: Free, Go, Plus, Pro, Business, Enterprise |

**⚠️ Для контента:** поиск «chatgpt» в Store выдаёт кучу подделок («AI Chat+», «ChatGPI»…) — обязательный callout «издатель должен быть ровно OpenAI»; для установки из Store нужен аккаунт Microsoft; Codex-задачи с десктопа видны во вкладке Remote мобильного ChatGPT; на сайте chatgpt.com Codex-режима нет (только desktop/CLI/IDE/cloud).

---

## Финальные URL для ссылок с сайта

| Назначение | URL |
|---|---|
| Установка Claude Code | https://code.claude.com/docs/en/setup |
| Быстрый старт Claude Code | https://code.claude.com/docs/en/quickstart |
| Плагины Claude Code | https://code.claude.com/docs/en/discover-plugins |
| Цены Claude | https://www.claude.com/pricing |
| Приложение Claude для Windows | https://www.claude.com/download |
| Помощь Claude | https://support.claude.com |
| UI UX Pro Max | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| Codex — обзор | https://learn.chatgpt.com/docs |
| Codex на Windows | https://learn.chatgpt.com/docs/windows/windows-app |
| Codex CLI | https://github.com/openai/codex |
| AGENTS.md | https://learn.chatgpt.com/codex/guides/agents-md |
| Цены ChatGPT | https://chatgpt.com/pricing |
| Цены Codex | https://chatgpt.com/codex/pricing |
| Скачать ChatGPT (Windows) | https://chatgpt.com/download → Store `9PLM9XGG6VKS` |

## Что осталось «уточните в официальной документации» / TODO

- `{{TODO_VERIFICATION_PLUGIN_NAME}}` / `_INSTALL_CMD` / `_DESCRIPTION` — данные заказчика, не проверялись.
- Цены — на сайт не попадают вообще (только ссылки выше). Лимиты Free-Codex сформулированы в доках расплывчато («quick tasks») — на сайте пишем так же осторожно.
- Шорткат Alt+V: доки предупреждают «may vary by platform and terminal» — на сайте добавить эту оговорку.
