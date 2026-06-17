import { FileText, Github, Download, Code2, Copy, FilePlus2, Lightbulb } from 'lucide-react';
import RightSidebar from '../components/RightSidebar';

export default function Resources() {
  const sections = [
    { id: 'downloadable', title: 'Downloadable Notes' },
    { id: 'source-code', title: 'Source Code' },
    { id: 'assignments', title: 'Assignments' },
    { id: 'practice', title: 'Practice Questions' },
  ];

  return (
    <div className="flex w-full">
      <div className="flex-1 py-12 px-4 sm:px-8 max-w-4xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Resources</h1>
        <p className="text-gray-600 mb-12 max-w-2xl text-lg leading-relaxed">
          Access all the essential materials for the MERN Stack Workshop. From comprehensive PDF notes to hands-on practice assignments and source code repositories.
        </p>

        <h2 id="downloadable" className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
          <FileText className="h-6 w-6 text-blue-600" /> Downloadable Notes
        </h2>
        
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-x-auto mb-16">
          <table className="w-full text-left text-sm min-w-[600px]">
            <thead className="bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-bold">Title</th>
                <th className="px-6 py-4 font-bold">Format</th>
                <th className="px-6 py-4 font-bold">Size</th>
                <th className="px-6 py-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">MERN Architecture Overview</td>
                <td className="px-6 py-4 text-gray-500"><span className="flex items-center gap-1.5"><FileText className="h-4 w-4 text-red-500"/> PDF</span></td>
                <td className="px-6 py-4 text-gray-500">2.4 MB</td>
                <td className="px-6 py-4 text-right">
                  <button className="font-bold text-blue-700 hover:text-blue-900">Download</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">MongoDB Schema Design Patterns</td>
                <td className="px-6 py-4 text-gray-500"><span className="flex items-center gap-1.5"><FileText className="h-4 w-4 text-red-500"/> PDF</span></td>
                <td className="px-6 py-4 text-gray-500">1.8 MB</td>
                <td className="px-6 py-4 text-right">
                  <button className="font-bold text-blue-700 hover:text-blue-900">Download</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">React Hooks Deep Dive</td>
                <td className="px-6 py-4 text-gray-500"><span className="flex items-center gap-1.5"><FileText className="h-4 w-4 text-red-500"/> PDF</span></td>
                <td className="px-6 py-4 text-gray-500">3.1 MB</td>
                <td className="px-6 py-4 text-right">
                  <button className="font-bold text-blue-700 hover:text-blue-900">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="source-code" className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
          <Code2 className="h-6 w-6 text-blue-600" /> Source Code
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg"><Code2 className="h-5 w-5 text-gray-700" /></div>
              <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">MAIN PROJECT</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fullstack Task Manager</h3>
            <p className="text-sm text-gray-600 mb-6 flex-1">Complete source code for the capstone project including backend API and React frontend.</p>
            <div className="flex gap-4 items-center border-t border-gray-100 pt-4">
              <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900">
                <Download className="h-4 w-4" /> .zip
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg"><Copy className="h-5 w-5 text-gray-700" /></div>
              <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">UTILITY</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Auth Starter Template</h3>
            <p className="text-sm text-gray-600 mb-6 flex-1">A clean boilerplate for JWT authentication and user management in Node.js.</p>
            <div className="flex gap-4 items-center border-t border-gray-100 pt-4">
              <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900">
                <Download className="h-4 w-4" /> .zip
              </button>
            </div>
          </div>
        </div>

        <h2 id="assignments" className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
          <FilePlus2 className="h-6 w-6 text-blue-600" /> Assignments & Practice
        </h2>

        <div className="space-y-4 mb-16">
          <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">01</div>
              <div>
                <h4 className="font-bold text-gray-900">Building a Personal Portfolio</h4>
                <p className="text-xs text-gray-500 mt-0.5">Focus: Semantic HTML & CSS Flexbox</p>
              </div>
            </div>
            <button className="rounded border border-gray-300 bg-white px-4 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50">View Task</button>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">02</div>
              <div>
                <h4 className="font-bold text-gray-900">Weather Dashboard with Fetch API</h4>
                <p className="text-xs text-gray-500 mt-0.5">Focus: Async/Await & DOM Manipulation</p>
              </div>
            </div>
            <button className="rounded border border-gray-300 bg-white px-4 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50">View Task</button>
          </div>
        </div>

        <h2 id="practice" className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
          <Lightbulb className="h-6 w-6 text-blue-600" /> Practice Questions
        </h2>

        <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-center sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Lightbulb className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Interview Prep Mock Quiz</h3>
              <p className="text-sm text-gray-600">50+ questions covering Node, React, and MongoDB fundamentals.</p>
            </div>
          </div>
          <button className="w-full sm:w-auto shrink-0 rounded px-6 py-2.5 bg-blue-700 text-white font-bold text-sm hover:bg-blue-800 transition-colors">
            Start Quiz
          </button>
        </div>

      </div>

      <RightSidebar sections={sections} />
    </div>
  );
}
