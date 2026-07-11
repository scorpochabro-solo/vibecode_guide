'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Появление блока при скролле: CSS-транзишен + один общий IntersectionObserver.
 * Осознанно без framer-motion — гидрация легче, LCP не блокируется.
 * Без JS (нет html.js) контент виден сразу; reduced-motion гасится в CSS.
 */

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
  }
  return sharedObserver;
}

export default function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // уже в вьюпорте к моменту гидрации — показываем сразу, без «прыжка»
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-in');
      return;
    }
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ''}`}>
      {children}
    </div>
  );
}
