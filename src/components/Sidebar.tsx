import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Play, Code2, Database, LayoutDashboard, GitMerge, Braces, Terminal } from 'lucide-react';

const CHAPTERS = [
  { id: 'html', title: 'HTML Fundamentals', path: '/lessons/html', icon: LayoutDashboard },
  { id: 'css', title: 'CSS Mastery', path: '/lessons/css', icon: Code2 },
  { id: 'js', title: 'Modern JavaScript', path: '/lessons/js', icon: Braces },
  { id: 'git', title: 'Git & GitHub', path: '/lessons/git', icon: GitMerge },
  { id: 'react', title: 'React.js', path: '/lessons/react', icon: Play },
  { id: 'api', title: 'API Integration', path: '/lessons/api', icon: Terminal },
  { id: 'node', title: 'Node & Express', path: '/lessons/node', icon: Database },
  { id: 'mongodb', title: 'MongoDB & Mongoose', path: '/lessons/mongodb', icon: Database },
  { id: 'final', title: 'Final MERN Project', path: '/lessons/final', icon: LayoutDashboard },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-gray-200 bg-white/50 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden md:block">
      <div className="p-4">
        <h2 className="mb-1 text-sm font-bold text-blue-900">Workshop Chapters</h2>
        <p className="text-xs text-gray-500 mb-4">MERN Stack Roadmap</p>
        <nav className="space-y-1">
          {CHAPTERS.map((chapter) => {
            const isActive = location.pathname.includes(chapter.path) || (chapter.id === 'react' && location.pathname.includes('/lessons/react'));
            return (
              <div key={chapter.id}>
                <Link
                  to={chapter.path}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <chapter.icon className="h-4 w-4" />
                  {chapter.title}
                </Link>
                {isActive && chapter.id === 'react' && (
                  <div className="ml-8 mt-1 space-y-1 border-l border-gray-200 pl-4 py-1">
                    <Link to="/lessons/react/intro" className="block py-1 text-xs text-gray-500 hover:text-gray-900">Introduction</Link>
                    <Link to="/lessons/react/usestate" className="block py-1 text-xs text-blue-600 font-medium border-l-2 border-blue-600 -ml-[17px] pl-4">useState Hook</Link>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
