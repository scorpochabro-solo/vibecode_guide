'use client';

import Lenis from 'lenis';
import { useEffect, type ReactNode } from 'react';

/** Плавный скролл (Lenis). При prefers-reduced-motion не запускается вовсе. */
export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) return;

    const lenis = new Lenis({ autoRaf: true, anchors: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    const stop = () => lenis.destroy();
    prefersReduced.addEventListener('change', stop);
    return () => {
      prefersReduced.removeEventListener('change', stop);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
