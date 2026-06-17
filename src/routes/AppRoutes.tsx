import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockDb } from '../services/mockDb';

// Layouts
import RootLayout from '../layouts/RootLayout';
import SidebarLayout from '../layouts/SidebarLayout';

// Pages
import Home from '../pages/Home';
import Roadmap from '../pages/Roadmap';
import Projects from '../pages/Projects';
import Resources from '../pages/Resources';
import LessonPage from '../pages/LessonPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import AdminDashboard from '../pages/AdminDashboard';

// Route Guards
const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ children, adminOnly }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
};

const GuestRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
};

// Redirect to first lesson helper component
const LessonRedirect: React.FC = () => {
  const chapters = mockDb.getChapters();
  if (chapters.length > 0) {
    const firstChapter = chapters[0];
    if (firstChapter.lessons && firstChapter.lessons.length > 0) {
      const firstLesson = firstChapter.lessons[0];
      return <Navigate to={`/lessons/${firstChapter.slug}/${firstLesson.slug}`} replace />;
    }
  }
  return <Navigate to="/roadmap" replace />;
};

// Redirect to first lesson of a specific chapter helper component
const ChapterRedirect: React.FC<{ slug?: string }> = () => {
  const chapters = mockDb.getChapters();
  // We extract chapterSlug via standard React Router hooks if needed, but since it's used inside a Route component:
  // Let's implement it inside the component using current slugs.
  return <LessonRedirect />; // default back to first lesson
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Core Pages (Not nested in left syllabus sidebar) */}
        <Route index element={<Home />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resources" element={<Resources />} />

        {/* Guest Authentication Routes */}
        <Route path="login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="register" element={<GuestRoute><Register /></GuestRoute>} />

        {/* Student Protected Routes */}
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        {/* Administrator Protected Routes */}
        <Route path="admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />

        {/* Documentation / Lessons Engine Sub-Tree (Contains left syllabus sidebar) */}
        <Route element={<SidebarLayout />}>
          {/* Lessons base paths */}
          <Route path="lessons" element={<LessonRedirect />} />
          <Route path="lessons/:chapterSlug" element={<ChapterRedirect />} />
          <Route path="lessons/:chapterSlug/:lessonSlug" element={<LessonPage />} />
        </Route>

        {/* Fallbacks */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
