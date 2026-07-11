import { ImageIcon } from 'lucide-react';
import type { Screenshot } from '@/content/types';

/**
 * Стилизованный слот под скриншот (16:10): рамка «окна», подпись и имя файла,
 * чтобы заказчик понял, какой скриншот куда положить ({{TODO_SCREENSHOT_*}}).
 */
export default function ScreenshotSlot({ shot }: { shot: Screenshot }) {
  return (
    <figure className="my-5">
      <div className="overflow-hidden rounded-(--radius-sm) border border-line bg-surface-1">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5" aria-hidden>
          <i className="size-2.5 rounded-full bg-white/15" />
          <i className="size-2.5 rounded-full bg-white/15" />
          <i className="size-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(-45deg,transparent,transparent_14px,rgba(255,255,255,0.02)_14px,rgba(255,255,255,0.02)_28px)] px-6 text-center">
          <ImageIcon aria-hidden className="size-7 text-muted/60" />
          <p className="max-w-[38ch] text-sm text-muted">{shot.caption}</p>
          <p className="mono-label rounded-md border border-dashed border-line px-2.5 py-1.5 text-muted/70 break-all normal-case tracking-normal">
            {shot.file}
          </p>
        </div>
      </div>
      <figcaption className="sr-only">{shot.caption}</figcaption>
    </figure>
  );
}
