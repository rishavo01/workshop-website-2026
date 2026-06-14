import { CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROADMAP = [
  {
    id: 'week1',
    week: 'Week 1',
    days: 'DAYS 1-5',
    title: 'HTML Fundamentals',
    description: 'The structural foundation of every web application. Master semantic markup and accessibility.',
    items: [
      'Semantic Tags & Document Structure',
      'Forms, Inputs & Data Validation',
      'SEO Basics & Web Accessibility (A11y)',
      'Multimedia: Audio, Video & Canvas',
    ],
    status: 'completed'
  },
  {
    id: 'week2',
    week: 'Week 2',
    days: 'DAYS 6-10',
    title: 'CSS Mastery',
    description: 'Bringing life to your layouts. Focus on modern layout engines and responsive design patterns.',
    items: [
      'Flexbox & CSS Grid deep-dive',
      'Responsive Design & Media Queries',
      'CSS Variables & Theming',
      'Animations & Transitions',
    ],
    status: 'in-progress'
  },
  {
    id: 'week3',
    week: 'Week 3',
    days: 'DAYS 11-15',
    title: 'Modern JavaScript',
    description: 'The engine of the MERN stack. From basic logic to asynchronous execution and ES6+.',
    items: [
      'Functional Programming & Closures',
      'Promises, Async/Await & Fetch API',
      'DOM Manipulation & Event Loop',
      'ES6 Modules & Tooling (Babel/Vite)',
    ],
    status: 'locked'
  },
  {
    id: 'git',
    week: 'Essential',
    days: 'DAY 16',
    title: 'Git & Collaboration',
    description: 'Industry standard version control. Learn to manage code history and collaborate effectively.',
    items: [
      'Branching, Merging & Rebase',
      'GitHub Workflow & Pull Requests',
      'Resolving Merge Conflicts',
    ],
    status: 'locked'
  },
  {
    id: 'react',
    week: 'Front-End',
    days: 'DAYS 17-18',
    title: 'React.js',
    description: 'Building dynamic user interfaces. Master components, state management, and hooks.',
    items: [
      'JSX & Functional Components',
      'useState, useEffect & Custom Hooks',
      'Context API & React Router',
    ],
    status: 'locked'
  },
  {
    id: 'api',
    week: 'Communication',
    days: 'DAY 19',
    title: 'API Integration',
    description: 'Connecting front-end to back-end services. Learn to consume and secure data streams.',
    items: [
      'RESTful API Principles',
      'Axios & Interceptors',
      'Error Handling & Loading States',
    ],
    status: 'locked'
  },
  {
    id: 'backend',
    week: 'Full Stack',
    days: 'DAY 20',
    title: 'Node / Express / MongoDB',
    description: 'Completing the stack. Build a server, define models, and handle database persistence.',
    items: [
      'Express Middleware & Routing',
      'Mongoose Models & Schema Design',
      'JWT Authentication & Deployment',
    ],
    status: 'locked'
  }
];

export default function Roadmap() {
  return (
    <div className="py-12 px-8 max-w-4xl">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">20-Day Curriculum Roadmap</h1>
      <p className="text-gray-600 mb-12 max-w-2xl text-lg">
        A structured path from absolute beginner to building full-stack applications with the MERN ecosystem.
      </p>

      <div className="relative pl-4 border-l-2 border-gray-100 space-y-12 mb-16">
        {ROADMAP.map((module) => (
          <div key={module.id} className="relative">
            <div className={`absolute -left-[45px] top-6 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-white ${module.status === 'completed' ? 'bg-blue-600 text-white' : module.status === 'in-progress' ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' : 'bg-gray-100 text-gray-400'}`}>
              {module.status === 'completed' ? (
                 <CheckCircle2 className="h-4 w-4" />
              ) : module.status === 'in-progress' ? (
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              ) : (
                <Lock className="h-3 w-3" />
              )}
            </div>

            <div className={`rounded-xl border p-6 transition-all ${module.status === 'completed' ? 'bg-white border-gray-200' : module.status === 'in-progress' ? 'bg-white border-blue-200 shadow-sm ring-1 ring-blue-50' : 'bg-gray-50/50 border-gray-100 opacity-75'}`}>
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{module.days}</span>
                <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{module.week}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{module.description}</p>
              
              <ul className="space-y-3">
                {module.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${module.status === 'completed' ? 'text-blue-600' : module.status === 'in-progress' ? 'text-blue-400' : 'text-gray-300'}`} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-blue-50 p-8 text-center border border-blue-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to start Day 1?</h3>
        <p className="text-gray-600 mb-6 text-sm">Join thousands of students and build your first MERN application from scratch.</p>
        <div className="flex items-center justify-center gap-4">
          <button className="rounded bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
            Enroll in Workshop
          </button>
          <button className="rounded border border-blue-200 bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
