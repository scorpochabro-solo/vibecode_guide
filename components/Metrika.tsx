import Script from 'next/script';
import { METRIKA_ID } from '@/content/meta';

/**
 * Счётчик Яндекс.Метрики.
 * Пока METRIKA_ID — плейсхолдер {{TODO_METRIKA_ID}}, счётчик «закомментирован»:
 * компонент ничего не рендерит. Чтобы включить — задайте реальный ID в content/meta.ts.
 */
export default function Metrika() {
  const isConfigured = /^\d+$/.test(METRIKA_ID);
  if (!isConfigured) return null;

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],
   k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(${METRIKA_ID}, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true});`}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://mc.yandex.ru/watch/${METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
    </>
  );
}
