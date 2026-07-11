import { ShieldCheck } from 'lucide-react';
import { VERIFIED_AT_HUMAN } from '@/content/meta';

/** Бейдж свежести инструкции: «Проверено: {дата}». */
export default function VerifiedBadge() {
  return (
    <span className="mono-label inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-1 px-3 py-1.5 text-muted">
      <ShieldCheck aria-hidden className="size-3.5 text-(--accent)" />
      Проверено: {VERIFIED_AT_HUMAN}
    </span>
  );
}
