import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, LogOut, User as UserIcon, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const isLessonsRoute = location.pathname.startsWith('/lessons');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md select-none">
      <div className="flex h-16 items-center px-4 md:px-8">
        
        {/* Branding Title */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-black text-blue-700 tracking-tight">MERN Workshop</span>
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden md:ml-8 md:flex items-center gap-6 text-sm font-semibold">
          <Link to="/roadmap" className={location.pathname === '/roadmap' ? 'text-blue-700 font-bold' : 'text-gray-600 hover:text-gray-900'}>Roadmap</Link>
          <Link to="/lessons" className={isLessonsRoute ? 'text-blue-700 font-bold' : 'text-gray-600 hover:text-gray-900'}>Lessons</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'text-blue-700 font-bold' : 'text-gray-600 hover:text-gray-900'}>Projects</Link>
          <Link to="/resources" className={location.pathname === '/resources' ? 'text-blue-700 font-bold' : 'text-gray-600 hover:text-gray-900'}>Resources</Link>
        </nav>
        
        {/* Right controls */}
        <div className="ml-auto flex items-center gap-4">
          
          {/* Search bar inside header (only visible when outside home page on desktop) */}
          {(location.pathname !== '/' && location.pathname !== '/roadmap') && (
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search resources..."
                className="h-9 w-64 rounded-lg border border-gray-200 bg-gray-50 pl-8 pr-3 text-xs outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          )}
          
          {/* User profile avatar or Sign In button */}
          {user ? (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/profile"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors"
                title="View profile"
              >
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs uppercase border border-blue-200">
                  {user.username.slice(0, 2)}
                </div>
                <span className="max-w-[100px] truncate">{user.username}</span>
              </Link>
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-purple-700 hover:bg-purple-50 transition-all"
                  title="Admin console"
                >
                  <Settings className="h-4.5 w-4.5" />
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                title="Logout"
              >
                <LogOut className="h-4.5 w-4.5" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-blue-700 px-4.5 py-2 text-xs font-bold text-white hover:bg-blue-800 transition-colors hidden sm:inline-flex items-center gap-1.5 shadow"
            >
              <UserIcon className="h-3.5 w-3.5" /> Sign In
            </Link>
          )}

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white/95 backdrop-blur-md absolute top-16 left-0 right-0 py-5 px-6 flex flex-col gap-4 shadow-lg z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-3 font-semibold text-base">
            <Link 
              to="/roadmap" 
              onClick={() => setIsOpen(false)}
              className={location.pathname === '/roadmap' ? 'text-blue-700 py-1 font-bold' : 'text-gray-600 py-1 hover:text-gray-900'}
            >
              Roadmap
            </Link>
            <Link 
              to="/lessons" 
              onClick={() => setIsOpen(false)}
              className={isLessonsRoute ? 'text-blue-700 py-1 font-bold' : 'text-gray-600 py-1 hover:text-gray-900'}
            >
              Lessons
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsOpen(false)}
              className={location.pathname === '/projects' ? 'text-blue-700 py-1 font-bold' : 'text-gray-600 py-1 hover:text-gray-900'}
            >
              Projects
            </Link>
            <Link 
              to="/resources" 
              onClick={() => setIsOpen(false)}
              className={location.pathname === '/resources' ? 'text-blue-700 py-1 font-bold' : 'text-gray-600 py-1 hover:text-gray-900'}
            >
              Resources
            </Link>
          </nav>
          
          {(location.pathname !== '/' && location.pathname !== '/roadmap') && (
            <div className="relative mt-2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search resources..."
                className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          )}
          
          <div className="border-t border-gray-100 pt-4 mt-2">
            {user ? (
              <div className="flex flex-col gap-3">
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-blue-700"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs uppercase">
                    {user.username.slice(0, 2)}
                  </div>
                  <span>{user.username} ({user.role})</span>
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm font-semibold text-purple-700"
                  >
                    <Settings className="h-4 w-4" /> Admin Console
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="h-4.5 w-4.5 text-gray-500" /> Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-bold text-white hover:bg-blue-800"
              >
                <UserIcon className="h-4 w-4" /> Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
