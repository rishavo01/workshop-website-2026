import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mockDb } from '../services/mockDb';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Settings, Award, CheckCircle, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const { user, userProgress, logout } = useAuth();
  
  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
        <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-8 max-w-sm">Please log in to your account to review your profile and track course progress.</p>
        <Link to="/login" className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-6 py-2.5 font-bold transition-colors">
          Sign In
        </Link>
      </div>
    );
  }

  // Get completed lessons info from DB
  const lessons = mockDb.getLessons();
  const chapters = mockDb.getChapters();
  
  const completedLessonsDetails = (userProgress?.completedLessons || [])
    .map(id => {
      const lesson = lessons.find(l => l.id === id);
      if (!lesson) return null;
      const chapter = chapters.find(c => c.id === lesson.chapterId);
      return {
        ...lesson,
        chapterSlug: chapter?.slug || ''
      };
    })
    .filter(Boolean);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formattedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* User Info Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            {/* Avatar Placeholder */}
            <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-3xl font-extrabold shadow-inner mb-4 select-none uppercase">
              {user.username.slice(0, 2)}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900">{user.username}</h3>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mt-1.5 ${
              user.role === 'admin' 
                ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                : 'bg-blue-100 text-blue-800 border border-blue-200'
            }`}>
              {user.role === 'admin' ? 'Administrator' : 'Student'}
            </span>

            <div className="border-t border-gray-100 mt-6 pt-6 text-left space-y-4">
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <GraduationCap className="h-4 w-4 shrink-0 text-gray-400" />
                <span className="truncate">{user.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Calendar className="h-4 w-4 shrink-0 text-gray-400" />
                <span>Joined {formattedDate}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-6 pt-6 flex flex-col gap-3">
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg py-2.5 text-sm font-bold transition-colors shadow-sm"
                >
                  <Settings className="h-4 w-4" /> Admin Console
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg py-2.5 text-sm font-bold transition-colors"
              >
                <LogOut className="h-4 w-4 text-gray-500" /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Progress & Completed Lessons List */}
        <div className="md:col-span-2 space-y-6">
          {/* Progress Tracker Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span>Syllabus Course Progress</span>
            </h4>
            
            <div className="flex items-center justify-between text-sm font-bold text-gray-700 mb-2">
              <span>Overall Completion Status</span>
              <span className="text-blue-700">{userProgress?.progressPercentage || 0}%</span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-3 border border-gray-200 overflow-hidden mb-6">
              <div 
                className="bg-blue-700 h-full rounded-full transition-all duration-500"
                style={{ width: `${userProgress?.progressPercentage || 0}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-2xl font-black text-gray-900">{userProgress?.completedLessons.length || 0}</p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-1">Completed Lessons</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-2xl font-black text-gray-900">
                  {Math.max(0, lessons.length - (userProgress?.completedLessons.length || 0))}
                </p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-1">Remaining Lessons</p>
              </div>
            </div>
          </div>

          {/* Completed Lessons details lists */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Completed Modules Details</span>
            </h4>

            {completedLessonsDetails.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {completedLessonsDetails.map((lesson) => {
                  if (!lesson) return null;
                  return (
                    <div key={lesson.id} className="py-4 flex justify-between items-center group">
                      <div>
                        <h5 className="font-bold text-gray-800 text-sm group-hover:text-blue-700 transition-colors">
                          {lesson.title}
                        </h5>
                        <p className="text-xs text-gray-400 mt-0.5">Lesson {lesson.order}</p>
                      </div>
                      <Link
                        to={`/lessons/${lesson.chapterSlug}/${lesson.slug}`}
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 border border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 rounded-lg px-3 py-1.5 transition-all"
                      >
                        Review <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-10">
                <GraduationCap className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-4">You have not completed any lesson modules yet.</p>
                <Link
                  to="/lessons"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-5 py-2 transition-colors shadow-sm"
                >
                  Start Learning Now
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
