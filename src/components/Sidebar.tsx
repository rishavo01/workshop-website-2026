import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { cn } from '../lib/utils';
import { mockDb } from '../services/mockDb';
import { ChevronDown, ChevronRight, X, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const { chapterSlug, lessonSlug } = useParams<{ chapterSlug?: string; lessonSlug?: string }>();
  const location = useLocation();
  const { userProgress } = useAuth();
  
  const [chapters, setChapters] = useState(mockDb.getChapters());
  const [expandedChapters, setExpandedChapters] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem('mern_sidebar_expanded');
    return saved ? JSON.parse(saved) : {};
  });

  // Re-read chapters on location change (in case chapters/lessons were added/modified in admin dashboard)
  useEffect(() => {
    setChapters(mockDb.getChapters());
  }, [location.pathname]);

  // Persist expanded state to localStorage
  useEffect(() => {
    localStorage.setItem('mern_sidebar_expanded', JSON.stringify(expandedChapters));
  }, [expandedChapters]);

  // Auto-expand the active chapter based on the active route
  useEffect(() => {
    if (chapterSlug) {
      const activeChapter = chapters.find(c => c.slug === chapterSlug);
      if (activeChapter) {
        setExpandedChapters(prev => ({
          ...prev,
          [activeChapter.id]: true
        }));
      }
    }
  }, [chapterSlug, chapters]);

  const toggleChapter = (id: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderContent = () => (
    <div className="p-4 flex flex-col h-full">
      <div className="flex items-center justify-between md:block mb-4 md:mb-2 border-b border-gray-100 pb-3 md:pb-0 md:border-0">
        <div>
          <h2 className="text-sm font-bold text-blue-900 flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 shrink-0 text-blue-700" />
            <span>Workshop Chapters</span>
          </h2>
          <p className="text-[11px] text-gray-500 mt-0.5">MERN Stack 20-Day Curriculum</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden rounded-lg p-1 text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="space-y-1.5 flex-1 overflow-y-auto mt-3 pr-1">
        {chapters.map((chapter) => {
          const isExpanded = !!expandedChapters[chapter.id];
          const isCurrentChapter = chapter.slug === chapterSlug;
          
          return (
            <div key={chapter.id} className="rounded-lg overflow-hidden border border-gray-100 bg-white">
              {/* Chapter Header Toggle */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold transition-all text-left uppercase tracking-wider",
                  isCurrentChapter 
                    ? "bg-blue-50/50 text-blue-800 border-l-4 border-blue-700 pl-2.5" 
                    : "text-gray-700 hover:bg-gray-50 border-l-4 border-transparent"
                )}
              >
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-gray-400" />
                  <span>{chapter.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>

              {/* Lesson Items */}
              {isExpanded && (
                <div className="bg-gray-50/50 py-1.5 border-t border-gray-100">
                  {chapter.lessons && chapter.lessons.length > 0 ? (
                    <div className="space-y-0.5">
                      {chapter.lessons.map((lesson) => {
                        const isCurrentLesson = lesson.slug === lessonSlug && isCurrentChapter;
                        const isCompleted = userProgress?.completedLessons.includes(lesson.id);

                        return (
                          <Link
                            key={lesson.id}
                            to={`/lessons/${chapter.slug}/${lesson.slug}`}
                            onClick={onClose}
                            className={cn(
                              "flex items-center justify-between text-xs px-5 py-2 font-medium transition-all",
                              isCurrentLesson
                                ? "bg-blue-100/50 text-blue-700 font-semibold border-l-2 border-blue-600 pl-4.5"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-l-2 border-transparent"
                            )}
                          >
                            <span className="truncate max-w-[150px]">{lesson.title}</span>
                            {isCompleted && (
                              <CheckCircle2 className="h-3.5 w-3.5 text-green-600 shrink-0 ml-1.5" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-[10px] text-gray-400 px-6 py-2 italic">No lessons created</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 border-r border-gray-200 bg-white/50 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden md:block select-none">
        {renderContent()}
      </aside>

      {/* Mobile Drawer */}
      {onClose && (
        <div
          className={cn(
            "fixed inset-0 z-50 md:hidden transition-all duration-300",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
          />

          {/* Sliding panel */}
          <aside
            className={cn(
              "absolute left-0 top-0 bottom-0 w-72 bg-white border-r border-gray-200 shadow-2xl transition-transform duration-300 ease-out flex flex-col h-full",
              isOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {renderContent()}
          </aside>
        </div>
      )}
    </>
  );
}
