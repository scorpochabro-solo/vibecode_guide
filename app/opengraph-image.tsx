import { ImageResponse } from 'next/og';
import { SITE_NAME, VERIFIED_AT_HUMAN } from '@/content/meta';

export const dynamic = 'force-static';
export const alt = `${SITE_NAME} — гайд по Claude Code и Codex для новичков`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Шрифт с кириллицей для OG: тянем TTF Unbounded с Google Fonts на этапе сборки. */
async function loadFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Unbounded:wght@600&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl, { headers: { 'User-Agent': 'curl/8' } })).text();
    const match = css.match(/url\((https:[^)]+\.ttf)\)/);
    if (!match?.[1]) return null;
    return await (await fetch(match[1])).arrayBuffer();
  } catch {
    return null; // без шрифта картинка соберётся системным — сборку не валим
  }
}

export default async function OgImage() {
  const title = 'От идеи до продукта';
  const subtitle = 'Claude Code и Codex для новичков';
  const font = await loadFont(`${title}${subtitle}CLAUDECODEXПроверено: ${VERIFIED_AT_HUMAN}·Windows`);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          backgroundColor: '#0B0C0E',
          backgroundImage:
            'radial-gradient(560px 340px at 8% -10%, rgba(232,121,74,0.28), transparent 70%), radial-gradient(560px 340px at 96% 112%, rgba(74,232,176,0.24), transparent 70%)',
          color: '#F4F4F2',
          fontFamily: 'Unbounded, sans-serif',
        }}
      >
        <div style={{ display: 'flex', gap: 14 }}>
          <div
            style={{
              display: 'flex',
              border: '1px solid rgba(232,121,74,0.65)',
              color: '#E8794A',
              borderRadius: 999,
              padding: '10px 22px',
              fontSize: 24,
            }}
          >
            CLAUDE
          </div>
          <div
            style={{
              display: 'flex',
              border: '1px solid rgba(74,232,176,0.65)',
              color: '#4AE8B0',
              borderRadius: 999,
              padding: '10px 22px',
              fontSize: 24,
            }}
          >
            CODEX
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', fontSize: 78, fontWeight: 600, lineHeight: 1.05 }}>{title}</div>
          <div style={{ display: 'flex', fontSize: 32, color: '#9BA0A8' }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#9BA0A8' }}>
          <div style={{ display: 'flex' }}>Windows · без опыта · пошагово</div>
          <div style={{ display: 'flex' }}>Проверено: {VERIFIED_AT_HUMAN}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: 'Unbounded', data: font, weight: 600 as const, style: 'normal' as const }] : undefined,
    },
  );
}
