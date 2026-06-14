import { CheckCircle2, ChevronRight, Copy, ExternalLink, ChevronLeft } from 'lucide-react';
import RightSidebar from '../components/RightSidebar';
import { Link } from 'react-router-dom';

export default function ReactUseState() {
  const sections = [
    { id: 'mastering', title: 'Mastering useState' },
    { id: 'why-use-state', title: 'Why use State?' },
    { id: 'code-examples', title: 'Code Examples' },
    { id: 'interactive-practice', title: 'Interactive Practice' },
    { id: 'knowledge-check', title: 'Knowledge Check' },
  ];

  return (
    <div className="flex w-full">
      <div className="flex-1 py-12 px-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
          <span>React.js</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-blue-700">useState Hook</span>
        </div>

        <h1 id="mastering" className="text-3xl font-extrabold text-gray-900 mb-6">Mastering useState</h1>
        
        <p className="text-gray-700 mb-8 leading-relaxed">
          In React, "state" refers to data or properties that need to be tracked in an application. When this data changes, React automatically re-renders the component to reflect the new information. The <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-sm">useState</code> hook is the foundational tool for managing functional component state.
        </p>

        {/* Learning Objectives Box */}
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6 mb-12">
          <div className="flex items-center gap-3 mb-4 text-blue-900">
            <CheckCircle2 className="h-5 w-5" />
            <h3 className="font-bold">Learning Objectives</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-blue-500" />
              <span className="text-sm text-gray-700">Understand the difference between local variables and React state.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-blue-500" />
              <span className="text-sm text-gray-700">Master the array destructuring syntax used by the useState hook.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-blue-500" />
              <span className="text-sm text-gray-700">Learn how to trigger re-renders by updating state values.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-blue-500" />
              <span className="text-sm text-gray-700">Identify common pitfalls like direct state mutation.</span>
            </li>
          </ul>
        </div>

        <h2 id="why-use-state" className="text-2xl font-bold text-gray-900 mb-4">Why use State?</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Imagine a counter. If you use a simple variable like <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800">let count = 0;</code>, incrementing it won't tell React to update the UI. React only knows to refresh the screen when its internal "State" mechanisms are used.
        </p>

        <blockquote className="border-l-4 border-blue-200 bg-gray-50 p-6 mb-12 text-gray-600 italic rounded-r-lg">
          "Think of State as the memory of a component. It stays consistent between renders but can be modified to change what the user sees."
        </blockquote>

        <div id="code-examples" className="rounded-xl border border-blue-200 bg-white overflow-hidden shadow-sm mb-12">
          <div className="flex items-center justify-between border-b border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Example: Simple Counter</span>
            <button className="flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900">
              <Copy className="h-3.5 w-3.5" /> Copy
            </button>
          </div>
          <div className="p-4 overflow-x-auto text-sm font-mono text-gray-800 leading-relaxed bg-[#f8f9fa]">
            <pre>
<span className="text-blue-600">import</span> React, {'{'} useState {'}'} <span className="text-blue-600">from</span> <span className="text-green-600">'react'</span>;{'\n\n'}
<span className="text-blue-600">function</span> <span className="text-orange-500">Counter</span>() {'{'}{'\n'}
{'  '}<span className="text-gray-400">{'// 1. Declare state variable and setter function'}</span>{'\n'}
{'  '}<span className="text-blue-600">const</span> [count, setCount] = <span className="text-orange-500">useState</span>(<span className="text-purple-600">0</span>);{'\n\n'}
{'  '}<span className="text-blue-600">return</span> ({'\n'}
{'    '}&lt;<span className="text-red-500">div</span>&gt;{'\n'}
{'      '}&lt;<span className="text-red-500">p</span>&gt;You clicked {'{'}count{'}'} times&lt;/<span className="text-red-500">p</span>&gt;{'\n'}
{'      '}&lt;<span className="text-red-500">button</span> <span className="text-blue-500">onClick</span>={'{'}() =&gt; <span className="text-orange-500">setCount</span>(count + <span className="text-purple-600">1</span>){'}'}&gt;{'\n'}
{'        '}Click me{'\n'}
{'      '}&lt;/<span className="text-red-500">button</span>&gt;{'\n'}
{'    '}&lt;/<span className="text-red-500">div</span>&gt;{'\n'}
{'  '});{'\n'}
{'}'}
            </pre>
          </div>
        </div>

        <div id="interactive-practice" className="rounded-xl bg-blue-50 border border-blue-100 p-10 text-center mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to practice?</h3>
          <p className="text-gray-600 mb-8 max-w-sm mx-auto text-sm">
            Try modifying the initial value of the state or creating a "Decrement" button in our online playground.
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-8 py-3 text-sm font-bold text-white hover:bg-blue-800 transition-colors shadow-sm">
            Try it Yourself <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        <div id="knowledge-check" className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm mb-16">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-6 py-4">
            <CheckCircle2 className="h-5 w-5 text-gray-500" />
            <h3 className="font-bold text-gray-700">Quick Check</h3>
          </div>
          <div className="p-6">
            <p className="font-medium text-gray-900 mb-6">What is the second element in the array returned by useState?</p>
            <div className="space-y-3">
              <label className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300"></div>
                <span className="text-sm text-gray-700">The current state value</span>
              </label>
              <label className="flex items-center gap-4 rounded-lg border-2 border-blue-600 bg-blue-50 p-4 cursor-pointer">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-4 border-blue-600 bg-white"></div>
                <span className="text-sm font-medium text-blue-900">The setter function to update state</span>
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 cursor-pointer hover:bg-gray-50">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300"></div>
                <span className="text-sm text-gray-700">A boolean indicating if it's rendered</span>
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-4 items-center">
              <button className="text-sm font-medium text-gray-500 hover:text-gray-900">Reset</button>
              <button className="rounded bg-blue-700 px-6 py-2 text-sm font-bold text-white hover:bg-blue-800 transition-colors">Submit Answer</button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <Link to="#" className="group flex flex-col items-start gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Previous</span>
            <span className="flex items-center gap-2 font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              <ChevronLeft className="h-4 w-4" /> Modern JavaScript Recap
            </span>
          </Link>
          <Link to="#" className="group flex flex-col items-end gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Next</span>
            <span className="flex items-center gap-2 font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              useEffect Deep Dive <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
      
      <RightSidebar sections={sections} />
    </div>
  );
}
