import { AUTHOR_CONTACTS, LINKS, VERIFIED_AT_HUMAN } from '@/content/meta';

const FOOTER_LINKS = [
  { label: 'Документация Claude Code', href: LINKS.claudeCodeSetup },
  { label: 'Документация Codex', href: LINKS.codexDocs },
  { label: 'Помощь Claude', href: LINKS.claudeSupport },
];

export default function Footer() {
  return (
    <footer data-accent="neutral" className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-14 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <p className="mono-label text-text">Собрано с помощью Claude Code</p>
          <p className="mt-2 text-sm text-muted">Факты и команды проверены по официальной документации: {VERIFIED_AT_HUMAN}.</p>
          <p className="mt-1 font-mono text-xs text-muted">{AUTHOR_CONTACTS}</p>
        </div>
        <nav aria-label="Официальная документация">
          <ul className="flex flex-col gap-2 lg:items-end">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
