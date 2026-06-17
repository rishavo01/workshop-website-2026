import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockDb } from '../services/mockDb';
import { Chapter, Lesson, QuizQuestion } from '../types';
import { Plus, Edit2, Trash2, ShieldAlert, Award, FileText, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if not admin
  if (!user || user.role !== 'admin') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
        <ShieldAlert className="h-12 w-12 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-8 max-w-sm">This console is strictly restricted to administrator credentials.</p>
        <button onClick={() => navigate('/login')} className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-6 py-2.5 font-bold transition-colors">
          Sign in as Admin
        </button>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<'chapters' | 'lessons'>('chapters');
  const [chapters, setChapters] = useState<Chapter[]>(mockDb.getChapters());
  const [lessons, setLessons] = useState<Lesson[]>(mockDb.getLessons());

  // Forms states - Chapters
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterSlug, setChapterSlug] = useState('');
  const [chapterOrder, setChapterOrder] = useState('');
  const [editingChapterId, setEditingChapterId] = useState<string | null>(null);

  // Forms states - Lessons
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonSlug, setLessonSlug] = useState('');
  const [lessonChapterId, setLessonChapterId] = useState('');
  const [lessonOrder, setLessonOrder] = useState('');
  const [lessonDesc, setLessonDesc] = useState('');
  const [lessonObjectives, setLessonObjectives] = useState('');
  const [lessonTheory, setLessonTheory] = useState('');
  const [lessonCode, setLessonCode] = useState('');
  const [lessonTask, setLessonTask] = useState('');
  const [lessonInitialCode, setLessonInitialCode] = useState('');
  const [lessonSolution, setLessonSolution] = useState('');
  
  // Custom single quiz state helper
  const [quizQuestion, setQuizQuestion] = useState('');
  const [quizOption1, setQuizOption1] = useState('');
  const [quizOption2, setQuizOption2] = useState('');
  const [quizOption3, setQuizOption3] = useState('');
  const [quizOption4, setQuizOption4] = useState('');
  const [quizCorrectIndex, setQuizCorrectIndex] = useState('0');
  const [quizExplanation, setQuizExplanation] = useState('');

  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  // Handle Chapter Submissions
  const handleChapterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chapterTitle || !chapterSlug || !chapterOrder) return;

    const nextChapter: Chapter = {
      id: editingChapterId || 'ch-' + Date.now(),
      title: chapterTitle,
      slug: chapterSlug.toLowerCase().replace(/\s+/g, '-'),
      order: parseInt(chapterOrder)
    };

    mockDb.saveChapter(nextChapter);
    setChapters(mockDb.getChapters());

    // Reset Form
    setChapterTitle('');
    setChapterSlug('');
    setChapterOrder('');
    setEditingChapterId(null);
  };

  const handleEditChapter = (ch: Chapter) => {
    setEditingChapterId(ch.id);
    setChapterTitle(ch.title);
    setChapterSlug(ch.slug);
    setChapterOrder(ch.order.toString());
  };

  const handleDeleteChapter = (id: string) => {
    if (window.confirm('Are you sure you want to delete this chapter? This will also delete all associated lessons.')) {
      mockDb.deleteChapter(id);
      setChapters(mockDb.getChapters());
      setLessons(mockDb.getLessons());
    }
  };

  // Handle Lesson Submissions
  const handleLessonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lessonTitle || !lessonSlug || !lessonChapterId || !lessonOrder || !lessonDesc || !lessonTheory) return;

    // Optional single quiz construction
    const quizQuestions: QuizQuestion[] = [];
    if (quizQuestion && quizOption1 && quizOption2) {
      quizQuestions.push({
        id: 'q-' + Date.now(),
        question: quizQuestion,
        options: [quizOption1, quizOption2, quizOption3, quizOption4].filter(Boolean),
        correctAnswerIndex: parseInt(quizCorrectIndex),
        explanation: quizExplanation
      });
    }

    const nextLesson: Lesson = {
      id: editingLessonId || 'les-' + Date.now(),
      chapterId: lessonChapterId,
      title: lessonTitle,
      slug: lessonSlug.toLowerCase().replace(/\s+/g, '-'),
      order: parseInt(lessonOrder),
      description: lessonDesc,
      objectives: lessonObjectives.split('\n').map(o => o.trim()).filter(Boolean),
      theory: lessonTheory,
      codeExample: lessonCode || undefined,
      practiceTask: lessonTask || undefined,
      practiceInitialCode: lessonInitialCode || undefined,
      practiceSolution: lessonSolution || undefined,
      quizQuestions
    };

    mockDb.saveLesson(nextLesson);
    setChapters(mockDb.getChapters());
    setLessons(mockDb.getLessons());

    // Reset Form
    setLessonTitle('');
    setLessonSlug('');
    setLessonChapterId('');
    setLessonOrder('');
    setLessonDesc('');
    setLessonObjectives('');
    setLessonTheory('');
    setLessonCode('');
    setLessonTask('');
    setLessonInitialCode('');
    setLessonSolution('');
    setQuizQuestion('');
    setQuizOption1('');
    setQuizOption2('');
    setQuizOption3('');
    setQuizOption4('');
    setQuizExplanation('');
    setEditingLessonId(null);
  };

  const handleEditLesson = (les: Lesson) => {
    setEditingLessonId(les.id);
    setLessonTitle(les.title);
    setLessonSlug(les.slug);
    setLessonChapterId(les.chapterId);
    setLessonOrder(les.order.toString());
    setLessonDesc(les.description);
    setLessonObjectives(les.objectives.join('\n'));
    setLessonTheory(les.theory);
    setLessonCode(les.codeExample || '');
    setLessonTask(les.practiceTask || '');
    setLessonInitialCode(les.practiceInitialCode || '');
    setLessonSolution(les.practiceSolution || '');

    // Prepopulate quiz if present
    if (les.quizQuestions && les.quizQuestions.length > 0) {
      const q = les.quizQuestions[0];
      setQuizQuestion(q.question);
      setQuizOption1(q.options[0] || '');
      setQuizOption2(q.options[1] || '');
      setQuizOption3(q.options[2] || '');
      setQuizOption4(q.options[3] || '');
      setQuizCorrectIndex(q.correctAnswerIndex.toString());
      setQuizExplanation(q.explanation || '');
    }
  };

  const handleDeleteLesson = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      mockDb.deleteLesson(id);
      setChapters(mockDb.getChapters());
      setLessons(mockDb.getLessons());
    }
  };

  return (
    <div className="flex-1 max-w-6xl mx-auto w-full py-12 px-4 sm:px-6">
      
      {/* Admin header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 flex items-center gap-2">
            <Award className="h-8 w-8 text-purple-700" /> Administrative Console
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage chapters, construct lessons, and audit course contents in real-time.</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-md transition-colors ${
              activeTab === 'chapters' ? 'bg-purple-700 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Plus className="h-4 w-4" /> Chapters
          </button>
          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-md transition-colors ${
              activeTab === 'lessons' ? 'bg-purple-700 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-4 w-4" /> Lessons
          </button>
        </div>
      </div>

      {activeTab === 'chapters' ? (
        /* CHAPTERS ADMIN VIEW */
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Chapter Form Card */}
          <div className="md:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
            <h3 className="font-bold text-gray-900 text-base mb-6">
              {editingChapterId ? 'Edit Chapter Details' : 'Create New Chapter'}
            </h3>
            
            <form onSubmit={chapterSubmit => handleChapterSubmit(chapterSubmit)} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Chapter Title</label>
                <input
                  type="text"
                  required
                  value={chapterTitle}
                  onChange={(e) => setChapterTitle(e.target.value)}
                  placeholder="e.g. Next.js Foundations"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>
              
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">URL Path Slug</label>
                <input
                  type="text"
                  required
                  value={chapterSlug}
                  onChange={(e) => setChapterSlug(e.target.value)}
                  placeholder="e.g. nextjs"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Display Sort Order</label>
                <input
                  type="number"
                  required
                  value={chapterOrder}
                  onChange={(e) => setChapterOrder(e.target.value)}
                  placeholder="e.g. 10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-purple-700 hover:bg-purple-800 text-white rounded-lg py-2 text-sm font-bold transition-colors"
                >
                  {editingChapterId ? 'Save Edits' : 'Create Chapter'}
                </button>
                {editingChapterId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingChapterId(null);
                      setChapterTitle('');
                      setChapterSlug('');
                      setChapterOrder('');
                    }}
                    className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg px-4 py-2 text-sm font-bold transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Chapters List */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 text-base mb-6">Existing Workshop Syllabus Chapters</h3>
            
            {chapters.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {chapters.map((ch) => (
                  <div key={ch.id} className="py-4 flex justify-between items-center group">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{ch.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">
                        Order: {ch.order} | Path: <span className="font-mono bg-gray-50 px-1.5 py-0.5 rounded text-[10px]">/lessons/{ch.slug}</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditChapter(ch)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                        title="Edit details"
                      >
                        <Edit2 className="h-4.5 w-4.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteChapter(ch.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete chapter"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 py-6 italic text-center">No syllabus chapters configured in database.</p>
            )}
          </div>
        </div>
      ) : (
        /* LESSONS ADMIN VIEW */
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Lesson Form Column */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 text-base mb-6">
              {editingLessonId ? 'Edit Lesson Parameters' : 'Create New Lesson Module'}
            </h3>

            <form onSubmit={lessonSubmit => handleLessonSubmit(lessonSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">Parent Chapter Selector</label>
                  <select
                    required
                    value={lessonChapterId}
                    onChange={(e) => setLessonChapterId(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  >
                    <option value="">Select Chapter</option>
                    {chapters.map(ch => (
                      <option key={ch.id} value={ch.id}>{ch.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">Display Order</label>
                  <input
                    type="number"
                    required
                    value={lessonOrder}
                    onChange={(e) => setLessonOrder(e.target.value)}
                    placeholder="e.g. 1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">Lesson Title</label>
                  <input
                    type="text"
                    required
                    value={lessonTitle}
                    onChange={(e) => setLessonTitle(e.target.value)}
                    placeholder="e.g. Setting up Routes"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 block mb-1">Lesson Path Slug</label>
                  <input
                    type="text"
                    required
                    value={lessonSlug}
                    onChange={(e) => setLessonSlug(e.target.value)}
                    placeholder="e.g. setup-routes"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Brief Description</label>
                <input
                  type="text"
                  required
                  value={lessonDesc}
                  onChange={(e) => setLessonDesc(e.target.value)}
                  placeholder="Summarize objectives in a single line"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Learning Objectives (One objective per line)</label>
                <textarea
                  value={lessonObjectives}
                  onChange={(e) => setLessonObjectives(e.target.value)}
                  placeholder="Understand standard routers...&#10;Implement dynamic links..."
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Theory & Core Concepts (Format with double newlines for paragraphs)</label>
                <textarea
                  required
                  value={lessonTheory}
                  onChange={(e) => setLessonTheory(e.target.value)}
                  placeholder="Write clear Markdown concept text here..."
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>

              {/* Code Sandbox options */}
              <div className="border-t border-gray-100 pt-4 mt-6">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-3">Add Code Example (Optional)</h4>
                <textarea
                  value={lessonCode}
                  onChange={(e) => setLessonCode(e.target.value)}
                  placeholder="// write code block here..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-gray-50/50"
                />
              </div>

              {/* Interactive Coding options */}
              <div className="border-t border-gray-100 pt-4 mt-6 space-y-3">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wider">Add Code Practice Playground (Optional)</h4>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Practice Instructions</label>
                  <input
                    type="text"
                    value={lessonTask}
                    onChange={(e) => setLessonTask(e.target.value)}
                    placeholder="Create a function returning..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Initial Starter Code</label>
                    <textarea
                      value={lessonInitialCode}
                      onChange={(e) => setLessonInitialCode(e.target.value)}
                      placeholder="function run() {&#10;  // write logic&#10;}"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Solution Checker Code</label>
                    <textarea
                      value={lessonSolution}
                      onChange={(e) => setLessonSolution(e.target.value)}
                      placeholder="function run() {&#10;  return true;&#10;}"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-gray-50/50"
                    />
                  </div>
                </div>
              </div>

              {/* Quiz construction options */}
              <div className="border-t border-gray-100 pt-4 mt-6 space-y-3">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wider">Add Multi-Choice Quiz Question (Optional)</h4>
                <input
                  type="text"
                  value={quizQuestion}
                  onChange={(e) => setQuizQuestion(e.target.value)}
                  placeholder="Which syntax represents...?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
                
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={quizOption1}
                    onChange={(e) => setQuizOption1(e.target.value)}
                    placeholder="Option 1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                  <input
                    type="text"
                    value={quizOption2}
                    onChange={(e) => setQuizOption2(e.target.value)}
                    placeholder="Option 2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                  <input
                    type="text"
                    value={quizOption3}
                    onChange={(e) => setQuizOption3(e.target.value)}
                    placeholder="Option 3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                  <input
                    type="text"
                    value={quizOption4}
                    onChange={(e) => setQuizOption4(e.target.value)}
                    placeholder="Option 4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 items-center">
                  <div className="col-span-1">
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Correct Option Index</label>
                    <select
                      value={quizCorrectIndex}
                      onChange={(e) => setQuizCorrectIndex(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                    >
                      <option value="0">Option 1</option>
                      <option value="1">Option 2</option>
                      <option value="2">Option 3</option>
                      <option value="3">Option 4</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Explanation</label>
                    <input
                      type="text"
                      value={quizExplanation}
                      onChange={(e) => setQuizExplanation(e.target.value)}
                      placeholder="Why is this option correct?"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-sm font-bold transition-colors cursor-pointer"
                >
                  {editingLessonId ? 'Save Lesson Edits' : 'Create Lesson Module'}
                </button>
                {editingLessonId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingLessonId(null);
                      setLessonTitle('');
                      setLessonSlug('');
                      setLessonChapterId('');
                      setLessonOrder('');
                      setLessonDesc('');
                      setLessonObjectives('');
                      setLessonTheory('');
                      setLessonCode('');
                      setLessonTask('');
                      setLessonInitialCode('');
                      setLessonSolution('');
                      setQuizQuestion('');
                      setQuizOption1('');
                      setQuizOption2('');
                      setQuizOption3('');
                      setQuizOption4('');
                      setQuizExplanation('');
                    }}
                    className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg px-4 py-2 text-sm font-bold transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Lessons List Column */}
          <div className="md:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-gray-900 text-base mb-6">Course Lessons</h3>

            {lessons.length > 0 ? (
              <div className="space-y-4">
                {chapters.map(ch => {
                  const chLessons = lessons.filter(l => l.chapterId === ch.id);
                  if (chLessons.length === 0) return null;
                  
                  return (
                    <div key={ch.id} className="space-y-2 border-b border-gray-100 pb-3">
                      <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">{ch.title}</span>
                      <div className="space-y-2">
                        {chLessons.map(les => (
                          <div key={les.id} className="flex justify-between items-center text-xs group">
                            <span className="truncate max-w-[150px] font-semibold text-gray-700">{les.title}</span>
                            <div className="flex gap-1 shrink-0">
                              <button
                                onClick={() => handleEditLesson(les)}
                                className="p-1 rounded text-gray-400 hover:text-purple-700 hover:bg-purple-50"
                                title="Edit lesson"
                              >
                                <Edit2 className="h-3.5 w-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteLesson(les.id)}
                                className="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50"
                                title="Delete lesson"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-gray-500 py-6 italic text-center">No lessons configured in database.</p>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
