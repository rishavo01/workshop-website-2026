import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (ids.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the heading that is closest to the top of the screen but still above the scroll threshold
      const visibleHeadings = ids
        .map(id => {
          const el = document.getElementById(id);
          return { id, top: el ? el.getBoundingClientRect().top + window.scrollY : Infinity };
        })
        .filter(h => h.top <= scrollPosition);

      if (visibleHeadings.length > 0) {
        // Active heading is the last visible heading above the scroll position
        setActiveId(visibleHeadings[visibleHeadings.length - 1].id);
      } else {
        // Fall back to first heading if none are scrolled past yet
        setActiveId(ids[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
