import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { BookOpen } from 'lucide-react';

export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-1 mx-auto w-full max-w-7xl relative">
      {/* Mobile Floating Action Button to toggle Chapters Sidebar */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2 bg-blue-700 text-white rounded-full px-5 py-3.5 shadow-xl hover:bg-blue-800 transition-all border border-blue-600 font-semibold text-sm active:scale-95"
        aria-label="Open Course Navigation"
      >
        <BookOpen className="h-5 w-5" />
        <span>Chapters</span>
      </button>

      {/* Dynamic Sidebar handles both desktop and mobile drawer layouts internally */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
