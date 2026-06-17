import React, { createContext, useState, useEffect, useContext } from 'react';
import { User, UserProgress } from '../types';
import { mockDb } from '../services/mockDb';

interface AuthContextType {
  user: User | null;
  userProgress: UserProgress | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<{ success: boolean; error?: string }>;
  register: (username: string, email: string, password: string, role?: 'student' | 'admin') => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  refreshProgress: () => void;
  markLessonAsCompleted: (lessonId: string) => void;
  setLastOpenedLesson: (lessonId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-login check
  useEffect(() => {
    const savedUser = localStorage.getItem('mern_current_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser) as User;
        setUser(parsedUser);
        
        // Fetch progress
        const progress = mockDb.getProgress(parsedUser.id);
        setUserProgress(progress);
      } catch (err) {
        localStorage.removeItem('mern_current_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, remember: boolean) => {
    setIsLoading(true);
    try {
      const match = mockDb.getUserByEmail(email);
      if (!match || match.passwordHash !== password) {
        setIsLoading(false);
        return { success: false, error: 'Invalid email or password' };
      }

      const verifiedUser: User = {
        id: match.id,
        username: match.username,
        email: match.email,
        role: match.role,
        createdAt: match.createdAt
      };

      setUser(verifiedUser);
      const progress = mockDb.getProgress(verifiedUser.id);
      setUserProgress(progress);

      if (remember) {
        localStorage.setItem('mern_current_user', JSON.stringify(verifiedUser));
      } else {
        sessionStorage.setItem('mern_current_user', JSON.stringify(verifiedUser));
      }
      setIsLoading(false);
      return { success: true };
    } catch (err) {
      setIsLoading(false);
      return { success: false, error: 'An error occurred during authentication' };
    }
  };

  const register = async (username: string, email: string, password: string, role: 'student' | 'admin' = 'student') => {
    setIsLoading(true);
    try {
      const existing = mockDb.getUserByEmail(email);
      if (existing) {
        setIsLoading(false);
        return { success: false, error: 'Email already registered' };
      }

      const created = mockDb.registerUser(username, email, password, role);
      setUser(created);
      const progress = mockDb.getProgress(created.id);
      setUserProgress(progress);
      localStorage.setItem('mern_current_user', JSON.stringify(created));
      
      setIsLoading(false);
      return { success: true };
    } catch (err) {
      setIsLoading(false);
      return { success: false, error: 'Failed to create account' };
    }
  };

  const logout = () => {
    setUser(null);
    setUserProgress(null);
    localStorage.removeItem('mern_current_user');
    sessionStorage.removeItem('mern_current_user');
  };

  const refreshProgress = () => {
    if (user) {
      const progress = mockDb.getProgress(user.id);
      setUserProgress(progress);
    }
  };

  const markLessonAsCompleted = (lessonId: string) => {
    if (user) {
      const nextProgress = mockDb.markLessonCompleted(user.id, lessonId);
      setUserProgress(nextProgress);
    }
  };

  const setLastOpenedLesson = (lessonId: string) => {
    if (user) {
      const nextProgress = mockDb.updateLastOpenedLesson(user.id, lessonId);
      setUserProgress(nextProgress);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProgress,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        refreshProgress,
        markLessonAsCompleted,
        setLastOpenedLesson
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
