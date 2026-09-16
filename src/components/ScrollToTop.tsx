"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * ScrollToTop component
 * Automatically resets scroll position to the top of the viewport on every route change.
 * Temporarily disables global smooth scrolling so page transitions instantly snap to top.
 * If a hash (e.g. #section) is present, scrolls smoothly to that specific target element.
 */
const ScrollToTop: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString();

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      // If navigating to an anchor within the page, scroll to that element
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }

    // Temporarily disable global smooth scroll so route changes instantly reset to top (0, 0)
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // In case of lazy-loaded components or async rendering, ensure scroll position remains at top
    const frameId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    });

    return () => {
      cancelAnimationFrame(frameId);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
