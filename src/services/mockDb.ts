import { Chapter, Lesson, User, UserProgress } from '../types';
import { DEFAULT_CHAPTERS, DEFAULT_LESSONS } from '../data/defaultLessons';

// Keys for localStorage
const KEYS = {
  CHAPTERS: 'mern_workshop_chapters',
  LESSONS: 'mern_workshop_lessons',
  USERS: 'mern_workshop_users',
  PROGRESS: 'mern_workshop_progress',
  USER_PASSWORDS: 'mern_workshop_passwords'
};

// Initial seeding helper
export const initializeMockDb = () => {
  if (!localStorage.getItem(KEYS.CHAPTERS)) {
    localStorage.setItem(KEYS.CHAPTERS, JSON.stringify(DEFAULT_CHAPTERS));
  }
  if (!localStorage.getItem(KEYS.LESSONS)) {
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(DEFAULT_LESSONS));
  }
  if (!localStorage.getItem(KEYS.USERS)) {
    // Seed default Admin and Student
    const defaultUsers: User[] = [
      {
        id: 'user-admin',
        username: 'Admin Rishav',
        email: 'admin@example.com',
        role: 'admin',
        createdAt: new Date().toISOString()
      },
      {
        id: 'user-student',
        username: 'Student Rishav',
        email: 'student@example.com',
        role: 'student',
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(KEYS.USERS, JSON.stringify(defaultUsers));
    
    // Seed passwords
    const passwords = {
      'admin@example.com': 'admin123',
      'student@example.com': 'student123'
    };
    localStorage.setItem(KEYS.USER_PASSWORDS, JSON.stringify(passwords));
  }
};

// Seeding trigger
initializeMockDb();

export const mockDb = {
  // CHAPTERS
  getChapters(): Chapter[] {
    const data = localStorage.getItem(KEYS.CHAPTERS);
    const chapters: Chapter[] = data ? JSON.parse(data) : [];
    const lessons = this.getLessons();
    
    // Map lessons back to chapters for layout trees
    return chapters
      .map(ch => ({
        ...ch,
        lessons: lessons
          .filter(l => l.chapterId === ch.id)
          .sort((a, b) => a.order - b.order)
      }))
      .sort((a, b) => a.order - b.order);
  },

  getChapterBySlug(slug: string): Chapter | undefined {
    return this.getChapters().find(c => c.slug === slug);
  },

  saveChapter(chapter: Chapter): void {
    const chapters = this.getChapters();
    const index = chapters.findIndex(c => c.id === chapter.id);
    if (index >= 0) {
      chapters[index] = { ...chapters[index], ...chapter };
    } else {
      chapters.push(chapter);
    }
    localStorage.setItem(KEYS.CHAPTERS, JSON.stringify(chapters.map(({ lessons, ...ch }) => ch)));
  },

  deleteChapter(chapterId: string): void {
    let chapters = this.getChapters();
    chapters = chapters.filter(c => c.id !== chapterId);
    localStorage.setItem(KEYS.CHAPTERS, JSON.stringify(chapters.map(({ lessons, ...ch }) => ch)));

    // Cascade delete lessons
    let lessons = this.getLessons();
    lessons = lessons.filter(l => l.chapterId !== chapterId);
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
  },

  // LESSONS
  getLessons(): Lesson[] {
    const data = localStorage.getItem(KEYS.LESSONS);
    return data ? JSON.parse(data) : [];
  },

  getLessonBySlug(chapterSlug: string, lessonSlug: string): Lesson | undefined {
    const chapter = this.getChapterBySlug(chapterSlug);
    if (!chapter) return undefined;
    return this.getLessons().find(l => l.chapterId === chapter.id && l.slug === lessonSlug);
  },

  saveLesson(lesson: Lesson): void {
    const lessons = this.getLessons();
    const index = lessons.findIndex(l => l.id === lesson.id);
    if (index >= 0) {
      lessons[index] = { ...lessons[index], ...lesson };
    } else {
      lessons.push(lesson);
    }
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
  },

  deleteLesson(lessonId: string): void {
    let lessons = this.getLessons();
    lessons = lessons.filter(l => l.id !== lessonId);
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
  },

  // USERS
  getUsers(): User[] {
    const data = localStorage.getItem(KEYS.USERS);
    return data ? JSON.parse(data) : [];
  },

  getUserByEmail(email: string): (User & { passwordHash: string }) | undefined {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return undefined;

    const pwData = localStorage.getItem(KEYS.USER_PASSWORDS);
    const passwords = pwData ? JSON.parse(pwData) : {};
    return {
      ...user,
      passwordHash: passwords[user.email.toLowerCase()] || ''
    };
  },

  registerUser(username: string, email: string, passwordHash: string, role: 'student' | 'admin' = 'student'): User {
    const users = this.getUsers();
    const newUser: User = {
      id: 'user-' + Date.now(),
      username,
      email: email.toLowerCase(),
      role,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));

    const pwData = localStorage.getItem(KEYS.USER_PASSWORDS);
    const passwords = pwData ? JSON.parse(pwData) : {};
    passwords[email.toLowerCase()] = passwordHash;
    localStorage.setItem(KEYS.USER_PASSWORDS, JSON.stringify(passwords));

    return newUser;
  },

  // PROGRESS
  getProgress(userId: string): UserProgress {
    const data = localStorage.getItem(KEYS.PROGRESS);
    const allProgress: UserProgress[] = data ? JSON.parse(data) : [];
    const userProgress = allProgress.find(p => p.userId === userId);

    if (userProgress) return userProgress;

    // Create empty progress
    const newProgress: UserProgress = {
      userId,
      completedLessons: [],
      progressPercentage: 0
    };
    allProgress.push(newProgress);
    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(allProgress));
    return newProgress;
  },

  markLessonCompleted(userId: string, lessonId: string): UserProgress {
    const data = localStorage.getItem(KEYS.PROGRESS);
    const allProgress: UserProgress[] = data ? JSON.parse(data) : [];
    const index = allProgress.findIndex(p => p.userId === userId);

    const lessonsCount = this.getLessons().length;
    let userProgress: UserProgress;

    if (index >= 0) {
      userProgress = allProgress[index];
      if (!userProgress.completedLessons.includes(lessonId)) {
        userProgress.completedLessons.push(lessonId);
      }
    } else {
      userProgress = {
        userId,
        completedLessons: [lessonId],
        progressPercentage: 0
      };
      allProgress.push(userProgress);
    }

    userProgress.progressPercentage = Math.round(
      (userProgress.completedLessons.length / (lessonsCount || 1)) * 100
    );

    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(allProgress));
    return userProgress;
  },

  updateLastOpenedLesson(userId: string, lessonId: string): UserProgress {
    const data = localStorage.getItem(KEYS.PROGRESS);
    const allProgress: UserProgress[] = data ? JSON.parse(data) : [];
    const index = allProgress.findIndex(p => p.userId === userId);

    let userProgress: UserProgress;

    if (index >= 0) {
      userProgress = allProgress[index];
      userProgress.lastOpenedLessonId = lessonId;
    } else {
      userProgress = {
        userId,
        completedLessons: [],
        lastOpenedLessonId: lessonId,
        progressPercentage: 0
      };
      allProgress.push(userProgress);
    }

    localStorage.setItem(KEYS.PROGRESS, JSON.stringify(allProgress));
    return userProgress;
  }
};
