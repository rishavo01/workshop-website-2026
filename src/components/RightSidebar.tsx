export interface RightSidebarProps {
  sections: { id: string; title: string }[];
}

export default function RightSidebar({ sections }: RightSidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block py-12 px-6">
      <div className="sticky top-24">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">On this page</h3>
        <nav className="space-y-2">
          {sections.map((section, idx) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-sm ${idx === 0 ? 'text-blue-600 font-medium border-l-2 border-blue-600 -ml-4 pl-4' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {section.title}
            </a>
          ))}
        </nav>

        <div className="mt-8 rounded-lg bg-blue-50/50 border border-blue-100 p-4">
          <h4 className="font-semibold text-blue-900 text-sm mb-2">Need help?</h4>
          <p className="text-xs text-blue-700 mb-4 leading-relaxed">
            Join our active community on Discord for immediate assistance with questions.
          </p>
          <button className="w-full rounded bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800">
            Join Discord
          </button>
        </div>
      </div>
    </aside>
  );
}
