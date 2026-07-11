import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Toc from '@/components/layout/Toc';
import ChapterSection from '@/components/sections/ChapterSection';
import ChecklistSection from '@/components/sections/ChecklistSection';
import { CompareSection, FaqSection, GlossarySection, PromptLibrarySection } from '@/components/sections/CommonSections';
import Hero from '@/components/sections/Hero';
import { HowItWorks, PathChooser, Requirements } from '@/components/sections/IntroSections';
import PartIntro from '@/components/sections/PartIntro';
import { CLAUDE_CHAPTERS } from '@/content/chapters-claude';
import { CODEX_CHAPTERS } from '@/content/chapters-codex';
import { TOC } from '@/content/toc';

const CHAPTER_WRAP = 'mx-auto max-w-[1200px] px-6 lg:px-10';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <div className="mx-auto max-w-[1520px] xl:grid xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-6 xl:px-6">
        <Toc entries={TOC} />
        <main className="min-w-0">
          <Hero />
          <HowItWorks />
          <Requirements />
          <PathChooser />

          <PartIntro
            part="claude"
            num="01"
            name="Claude"
            blurb="Путь через Claude Code — агента Anthropic. Семь глав: от аккаунта и первых промптов до плагинов, конвейера «Идея → Продукт» и публикации."
            chapters={CLAUDE_CHAPTERS}
          />
          <div data-accent="claude" className={CHAPTER_WRAP}>
            {CLAUDE_CHAPTERS.map((chapter) => (
              <ChapterSection key={chapter.anchor} chapter={chapter} part="claude" />
            ))}
          </div>

          <PartIntro
            part="codex"
            num="02"
            name="Codex"
            blurb="Тот же результат через Codex — агента OpenAI внутри приложения ChatGPT. Структура зеркальная: если прошли Часть 1, здесь всё будет знакомо."
            chapters={CODEX_CHAPTERS}
          />
          <div data-accent="codex" className={CHAPTER_WRAP}>
            {CODEX_CHAPTERS.map((chapter) => (
              <ChapterSection key={chapter.anchor} chapter={chapter} part="codex" />
            ))}
          </div>

          <CompareSection />
          <PromptLibrarySection />
          <GlossarySection />
          <FaqSection />
          <ChecklistSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
