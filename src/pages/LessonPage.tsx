import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockDb } from '../services/mockDb';
import { Lesson, HeadingItem } from '../types';
import { useAuth } from '../context/AuthContext';
import RightSidebar from '../components/RightSidebar';
import QuizComponent from '../components/QuizComponent';
import InteractiveCode from '../components/InteractiveCode';
import { ChevronLeft, ChevronRight, CheckCircle2, BookmarkCheck, BookOpen, Key, AlertCircle } from 'lucide-react';

export default function LessonPage() {
  const { chapterSlug, lessonSlug } = useParams<{ chapterSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  const { user, userProgress, markLessonAsCompleted, setLastOpenedLesson } = useAuth();
  
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState(mockDb.getChapters());

  // Flatten lessons to calculate next/prev links
  const allLessons = chapters.flatMap(ch => 
    (ch.lessons || []).map(l => ({
      ...l,
      chapterSlug: ch.slug
    }))
  );

  useEffect(() => {
    setLoading(true);
    if (chapterSlug && lessonSlug) {
      const activeLesson = mockDb.getLessonBySlug(chapterSlug, lessonSlug);
      if (activeLesson) {
        setLesson(activeLesson);
        
        // Track last opened lesson
        if (user) {
          setLastOpenedLesson(activeLesson.id);
        }
      } else {
        setLesson(null);
      }
    }
    setLoading(false);
  }, [chapterSlug, lessonSlug, user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="py-16 px-4 text-center max-w-lg mx-auto">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Lesson Not Found</h2>
        <p className="text-gray-600 mb-8">
          The requested lesson page does not exist or has been deleted by an administrator.
        </p>
        <Link to="/roadmap" className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-6 py-2.5 font-bold transition-colors">
          Return to Roadmap
        </Link>
      </div>
    );
  }

  // Calculate index for navigation
  const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const isCompleted = userProgress?.completedLessons.includes(lesson.id);

  // Generate dynamic headings for the Right Table of Contents Sidebar
  const rightHeadings: HeadingItem[] = [
    { id: 'objectives', title: 'Learning Objectives', level: 'h2' },
    { id: 'theory', title: 'Theory & Concepts', level: 'h2' }
  ];

  if (lesson.codeExample) {
    rightHeadings.push({ id: 'code-example', title: 'Code Example', level: 'h2' });
  }
  if (lesson.practiceTask) {
    rightHeadings.push({ id: 'interactive-practice', title: 'Interactive Practice', level: 'h2' });
  }
  if (lesson.quizQuestions && lesson.quizQuestions.length > 0) {
    rightHeadings.push({ id: 'quiz-section', title: 'Knowledge Quiz', level: 'h2' });
  }

  const handleManualComplete = () => {
    if (user) {
      markLessonAsCompleted(lesson.id);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      {/* Lesson Body Content */}
      <div className="flex-1 py-10 px-4 sm:px-8 max-w-4xl min-w-0">
        
        {/* Completion status notification */}
        {isCompleted && (
          <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
            <span className="text-sm font-semibold">You completed this lesson module! Great job!</span>
          </div>
        )}

        {/* Title & Metadata */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">{lesson.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{lesson.description}</p>

        {/* 1. Learning Objectives Box */}
        <div id="objectives" className="rounded-xl border border-blue-100 bg-blue-50/40 p-6 mb-10 scroll-mt-24">
          <div className="flex items-center gap-2 mb-4 text-blue-900 font-bold">
            <BookOpen className="h-5 w-5 text-blue-700" />
            <h3>Learning Objectives</h3>
          </div>
          <ul className="space-y-2">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Theory & Content */}
        <div id="theory" className="prose max-w-none text-gray-700 mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Theory & Concepts</h2>
          {lesson.theory.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4 leading-relaxed whitespace-pre-line">{para}</p>
          ))}
        </div>

        {/* 3. Code Example Box */}
        {lesson.codeExample && (
          <div id="code-example" className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm mb-12 scroll-mt-24">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
              <span>Code Example</span>
            </div>
            <div className="p-4 overflow-x-auto text-sm font-mono text-gray-800 leading-relaxed bg-[#f8f9fa]">
              <pre><code>{lesson.codeExample}</code></pre>
            </div>
          </div>
        )}

        {/* 4. Interactive Practice Code area */}
        {lesson.practiceTask && lesson.practiceInitialCode && lesson.practiceSolution && (
          <div id="interactive-practice" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Interactive Coding</h2>
            <InteractiveCode
              task={lesson.practiceTask}
              initialCode={lesson.practiceInitialCode}
              solution={lesson.practiceSolution}
              onPracticeCompleted={() => user && markLessonAsCompleted(lesson.id)}
            />
          </div>
        )}

        {/* 5. Quiz Section */}
        {lesson.quizQuestions && lesson.quizQuestions.length > 0 && (
          <div id="quiz-section" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Knowledge Check</h2>
            <QuizComponent
              questions={lesson.quizQuestions}
              onQuizCompleted={() => user && markLessonAsCompleted(lesson.id)}
            />
          </div>
        )}

        {/* Manual completion trigger when there are no quiz or codes questions */}
        {user && !isCompleted && (!lesson.practiceTask && (!lesson.quizQuestions || lesson.quizQuestions.length === 0)) && (
          <div className="my-10 bg-blue-50/50 rounded-xl p-6 border border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-bold text-blue-900 text-sm">Finish this reading?</h4>
              <p className="text-xs text-blue-700 mt-1">Mark this lesson completed to update your progress dashboard metrics.</p>
            </div>
            <button
              onClick={handleManualComplete}
              className="flex items-center gap-2 rounded-lg bg-blue-700 hover:bg-blue-800 px-6 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer shadow"
            >
              <BookmarkCheck className="h-4 w-4" /> Mark as Completed
            </button>
          </div>
        )}

        {/* Next/Prev Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-between border-t border-gray-200 pt-8 mt-12">
          {prevLesson ? (
            <Link
              to={`/lessons/${prevLesson.chapterSlug}/${prevLesson.slug}`}
              className="group flex flex-col items-start gap-1 p-2 hover:bg-gray-50 rounded transition-colors"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Previous Lesson</span>
              <span className="flex items-center gap-2 font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors text-left">
                <ChevronLeft className="h-4.5 w-4.5 shrink-0" /> {prevLesson.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              to={`/lessons/${nextLesson.chapterSlug}/${nextLesson.slug}`}
              className="group flex flex-col items-start sm:items-end gap-1 p-2 hover:bg-gray-50 rounded transition-colors"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Next Lesson</span>
              <span className="flex items-center gap-2 font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors text-left sm:text-right">
                {nextLesson.title} <ChevronRight className="h-4.5 w-4.5 shrink-0" />
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Right Table of Contents Sidebar */}
      <RightSidebar sections={rightHeadings} />
    </div>
  );
}
