import CodeBlock from './CodeBlock';
import Callout from './Callout';
import ScreenshotSlot from './ScreenshotSlot';
import { renderInline } from '@/lib/inline';
import type { StepItem } from '@/content/types';

/** Нумерованные шаги инструкции. start — продолжение нумерации после вставок. */
export default function StepList({ items, start = 1 }: { items: StepItem[]; start?: number }) {
  return (
    <ol className="my-6 space-y-6">
      {items.map((step, i) => (
        <li key={i} className="relative pl-14">
          <span
            aria-hidden
            className="absolute top-0 left-0 flex size-9 items-center justify-center rounded-full border border-line bg-surface-1 font-mono text-sm font-medium text-(--accent)"
          >
            {start + i}
          </span>
          <h4 className="h-sub mb-1.5 text-[1.05rem]">{step.title}</h4>
          {step.text ? <p className="prose-measure text-[0.98rem] text-text/85">{renderInline(step.text)}</p> : null}
          {step.code ? <CodeBlock code={step.code} /> : null}
          {step.callout ? <Callout callout={step.callout} /> : null}
          {step.screenshot ? <ScreenshotSlot shot={step.screenshot} /> : null}
        </li>
      ))}
    </ol>
  );
}
