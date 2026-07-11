import Accordion from '@/components/ui/Accordion';
import Callout from '@/components/ui/Callout';
import CodeBlock from '@/components/ui/CodeBlock';
import GoodBad from '@/components/ui/GoodBad';
import PipelineDiagram from '@/components/ui/PipelineDiagram';
import PluginCardView from '@/components/ui/PluginCardView';
import PromptBlock from '@/components/ui/PromptBlock';
import ScreenshotSlot from '@/components/ui/ScreenshotSlot';
import StepList from '@/components/ui/StepList';
import Troubleshoot from '@/components/ui/Troubleshoot';
import VerifiedBadge from '@/components/ui/VerifiedBadge';
import Reveal from '@/components/layout/Reveal';
import { getPrompt } from '@/content/prompts';
import { renderInline } from '@/lib/inline';
import type { Block, Chapter, PartKey } from '@/content/types';

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p':
      return <p className="prose-measure my-4 text-[0.99rem] text-text/85">{renderInline(block.text)}</p>;
    case 'h3':
      return <h4 className="h-sub mt-9 mb-3">{block.text}</h4>;
    case 'steps':
      return <StepList items={block.items} start={block.start} />;
    case 'code':
      return <CodeBlock code={block.code} />;
    case 'callout':
      return <Callout callout={block.callout} />;
    case 'prompt':
      return <PromptBlock prompt={getPrompt(block.promptId)} />;
    case 'plugin-card':
      return <PluginCardView card={block.card} />;
    case 'pipeline':
      return <PipelineDiagram />;
    case 'accordion':
      return <Accordion items={block.items} />;
    case 'good-bad':
      return <GoodBad bad={block.bad} good={block.good} />;
    case 'screenshot':
      return <ScreenshotSlot shot={block.shot} />;
    case 'troubleshoot':
      return <Troubleshoot title={block.title} items={block.items} />;
  }
}

/** Одна глава: номер, заголовок с якорем, бейдж свежести, блоки контента. */
export default function ChapterSection({ chapter, part }: { chapter: Chapter; part: PartKey }) {
  return (
    <article id={chapter.anchor} data-accent={part} className="scroll-mt-28 border-t border-line py-14 first:border-t-0">
      <Reveal>
        <header className="mb-8">
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3">
            <span aria-hidden className="font-mono text-[2.6rem] leading-none font-medium text-(--accent) opacity-90 select-none">
              {chapter.num}
            </span>
            <h3 className="h-section text-[clamp(1.4rem,1rem+1.6vw,2.1rem)]">{chapter.title}</h3>
            {chapter.verified ? <VerifiedBadge /> : null}
          </div>
          <p className="prose-measure mt-4 text-[1.02rem] text-muted">{renderInline(chapter.lead)}</p>
        </header>
        <div>
          {chapter.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>
      </Reveal>
    </article>
  );
}
