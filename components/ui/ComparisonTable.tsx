import type { CompareRow } from '@/content/types';

/** Адаптивная таблица сравнения: на мобильных скроллится горизонтально внутри контейнера. */
export default function ComparisonTable({ rows, compact = false }: { rows: CompareRow[]; compact?: boolean }) {
  const cell = compact ? 'px-4 py-3' : 'px-5 py-4';
  return (
    <div className="table-scroll rounded-(--radius-md) border border-line bg-surface-1">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className={`${cell} mono-label text-muted`}>
              &nbsp;
            </th>
            <th scope="col" className={`${cell} mono-label text-claude`}>
              Claude
            </th>
            <th scope="col" className={`${cell} mono-label text-codex`}>
              Codex
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className={`${cell} align-top text-[0.9rem] font-semibold whitespace-nowrap text-text`}>
                {row.label}
              </th>
              <td className={`${cell} align-top text-[0.92rem] text-text/85`}>{row.claude}</td>
              <td className={`${cell} align-top text-[0.92rem] text-text/85`}>{row.codex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
