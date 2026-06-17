import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { HeadingItem } from '../types';

export interface RightSidebarProps {
  sections: HeadingItem[];
}

export default function RightSidebar({ sections }: RightSidebarProps) {
  const headingIds = sections.map(s => s.id);
  const activeId = useScrollSpy(headingIds, 120);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block py-12 px-6 border-l border-gray-100">
      <div className="sticky top-24">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">On this page</h3>
        {sections.length > 0 ? (
          <nav className="space-y-1 max-h-[calc(100vh-20rem)] overflow-y-auto pr-2">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              const isH3 = section.level === 'h3';
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`block text-sm py-1.5 transition-all duration-200 ${
                    isH3 ? 'pl-6 pr-2' : 'pl-3 pr-2'
                  } ${
                    isActive
                      ? 'text-blue-600 font-semibold border-l-2 border-blue-600 -ml-[2px]'
                      : 'text-gray-500 hover:text-gray-900 border-l border-transparent -ml-[1px]'
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
          </nav>
        ) : (
          <p className="text-xs text-gray-400">No page sections</p>
        )}

        <div className="mt-8 rounded-xl bg-blue-50/60 border border-blue-100/50 p-4 shadow-sm">
          <h4 className="font-semibold text-blue-900 text-sm mb-2">Need help?</h4>
          <p className="text-xs text-blue-700 mb-4 leading-relaxed">
            Join our active community on Discord for immediate assistance with questions.
          </p>
          <a
            href="https://discord.gg/mernworkshop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition-colors text-center"
          >
            Join Discord
          </a>
        </div>
      </div>
    </aside>
  );
}
