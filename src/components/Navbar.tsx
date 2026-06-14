import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-700">MERN Workshop</span>
        </Link>
        <nav className="hidden md:ml-8 md:flex items-center gap-6 text-sm font-medium">
          <Link to="/roadmap" className={location.pathname === '/roadmap' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}>Roadmap</Link>
          <Link to="/lessons" className={location.pathname.startsWith('/lessons') ? 'text-blue-600 border-b-2 border-blue-600 pb-5 pt-5' : 'text-gray-600 hover:text-gray-900'}>Lessons</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'text-blue-600 border-b-2 border-blue-600 pb-5 pt-5' : 'text-gray-600 hover:text-gray-900'}>Projects</Link>
          <Link to="/resources" className={location.pathname === '/resources' ? 'text-blue-600 border-b-2 border-blue-600 pb-5 pt-5' : 'text-gray-600 hover:text-gray-900'}>Resources</Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          {(location.pathname !== '/' && location.pathname !== '/roadmap') && (
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search resources..."
                className="h-8 w-64 rounded-md border border-gray-200 bg-gray-50 pl-8 pr-3 text-sm outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          )}
          <button className="rounded-md bg-blue-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
