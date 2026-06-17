/**
 * Reference Mongoose Schemas for Backend MongoDB Integration.
 * These match the types defined in types/index.ts.
 */

// NOTE: These are written as string documentation models representing 
// the actual backend code to be implemented on the Node/Express server.

export const UserSchemaText = `
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
`;

export const ChapterSchemaText = `
const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  order: { type: Number, required: true }
});

module.exports = mongoose.model('Chapter', ChapterSchema);
`;

export const LessonSchemaText = `
const mongoose = require('mongoose');

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswerIndex: { type: Number, required: true },
  explanation: { type: String }
});

const LessonSchema = new mongoose.Schema({
  chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', required: true },
  slug: { type: String, required: true },
  title: { type: String, required: true },
  order: { type: Number, required: true },
  description: { type: String, required: true },
  objectives: [{ type: String }],
  theory: { type: String, required: true },
  codeExample: { type: String },
  practiceTask: { type: String },
  practiceInitialCode: { type: String },
  practiceSolution: { type: String },
  quizQuestions: [QuizQuestionSchema]
});

// Compound index to ensure lesson slugs are unique within a chapter
LessonSchema.index({ chapterId: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model('Lesson', LessonSchema);
`;

export const ProgressSchemaText = `
const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  lastOpenedLessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  progressPercentage: { type: Number, default: 0 }
});

module.exports = mongoose.model('Progress', ProgressSchema);
`;
