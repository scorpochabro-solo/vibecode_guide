# От идеи до продукта — гайд по Claude Code и Codex для новичков

Одностраничный сайт-гайд (RU, Windows 10/11): проводит человека без опыта программирования
от установки AI-агента до первого опубликованного продукта.

**Прод:** https://scorpochabro-solo.github.io/vibecode_guide/

## Стек

Next.js 15 (App Router, static export) · TypeScript strict · Tailwind CSS v4 · Lenis · lucide-react.
Анимации — чистый CSS + IntersectionObserver. Контент — типизированные структуры в `content/`.

## Команды

```bash
npm install
npm run dev     # localhost:3140
npm run build   # статический экспорт в out/
```

## Деплой

Пуш в `main` → GitHub Actions собирает и публикует на Pages автоматически
(`.github/workflows/deploy.yml`). Под project-pages сборка идёт с `PAGES_BASE_PATH=/vibecode_guide`.

## Перед публикацией финальной версии

Плейсхолдеры заказчика (`{{TODO_*}}`), скриншоты и смена домена — см. [TODO.md](TODO.md).
Факты и команды сверены с официальной документацией — см. [RESEARCH.md](RESEARCH.md), дата проверки в `content/meta.ts`.
