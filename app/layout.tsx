import type { Metadata } from 'next';
import { JetBrains_Mono, Onest, Unbounded } from 'next/font/google';
import Metrika from '@/components/Metrika';
import Providers from '@/components/Providers';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/content/meta';
import { buildJsonLd } from '@/lib/jsonld';
import './globals.css';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['700'],
  variable: '--font-unbounded',
  display: 'swap',
});

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-onest',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false, // моноширинный нужен только ниже первого экрана — не конкурирует с LCP
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: инлайн-скрипт в body добавляет класс `js` до гидрации — это ожидаемо
    <html
      lang="ru"
      data-accent="neutral"
      suppressHydrationWarning
      className={`${unbounded.variable} ${onest.variable} ${jetbrains.variable}`}
    >
      <body>
        {/* html.js включает скрытие-до-появления (.reveal/.rise); без JS контент виден сразу */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Providers>{children}</Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd() }} />
        <Metrika />
      </body>
    </html>
  );
}
