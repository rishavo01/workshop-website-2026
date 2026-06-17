export interface User {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'admin';
  createdAt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  chapterId: string;
  slug: string;
  title: string;
  order: number;
  description: string;
  objectives: string[];
  theory: string;
  codeExample?: string;
  practiceTask?: string;
  practiceInitialCode?: string;
  practiceSolution?: string;
  quizQuestions: QuizQuestion[];
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  order: number;
  lessons?: Lesson[];
}

export interface UserProgress {
  userId: string;
  completedLessons: string[]; // List of lesson IDs completed
  lastOpenedLessonId?: string; // Last opened lesson ID
  progressPercentage: number;
}

export interface HeadingItem {
  id: string;
  title: string;
  level?: 'h2' | 'h3';
}

