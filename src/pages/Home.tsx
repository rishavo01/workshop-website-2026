import { Link } from 'react-router-dom';
import { MonitorPlay, Award, RotateCcw, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-6">
          <MonitorPlay className="h-3.5 w-3.5" />
          Zero to Professional Developer
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 max-w-3xl mb-6">
          Learn MERN Stack in 20 Days
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          Master MongoDB, Express, React, and Node.js through a strict 20-day hands-on curriculum designed for speed and technical depth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link to="/lessons/react/usestate" className="rounded-md bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors w-full sm:w-auto flex items-center justify-center">
            Start Learning
          </Link>
          <Link to="/roadmap" className="rounded-md border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto flex items-center justify-center">
            View Roadmap
          </Link>
        </div>

        {/* Hero Image / Placeholder */}
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 aspect-[16/9] mx-auto">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" alt="Laptop code desk" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-6">
              <MonitorPlay className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Project-based</h3>
            <p className="text-gray-600 leading-relaxed">
              Build 5 industry-standard applications including an E-commerce platform and a Real-time Chat app.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Certificate</h3>
            <p className="text-gray-600 leading-relaxed">
              Earn a verifiable certificate of completion upon finishing all lessons and the final capstone project.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-6">
              <RotateCcw className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Access</h3>
            <p className="text-gray-600 leading-relaxed">
              Once you enroll, the content is yours forever. Includes all future curriculum updates and code patches.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Architecture */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern Architecture</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Learn how to structure enterprise-grade MERN applications. We focus on clean code, RESTful APIs, and responsive UI design using Tailwind CSS.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-600" /> Context API & Redux State Management
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-600" /> JWT Authentication & Authorization
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-600" /> Mongoose Schemas & Middleware
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="rounded-xl bg-slate-900 text-slate-300 p-6 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed border border-slate-800">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <pre>
                <code className="language-jsx">
                  <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;<br/>
                  <span className="text-purple-400">import</span> {'{'} UserContext {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'./context'</span>;<br/>
                  <br/>
                  <span className="text-blue-400">const</span> Dashboard = () ={'>'} {'{'}<br/>
                  {'  '}<span className="text-blue-400">const</span> {'{'} user {'}'} = <span className="text-yellow-200">useContext</span>(UserContext);<br/>
                  <br/>
                  {'  '}<span className="text-purple-400">return</span> (<br/>
                  {'    '}&lt;<span className="text-red-400">div</span> className=<span className="text-green-300">"p-4"</span>&gt;<br/>
                  {'      '}&lt;<span className="text-red-400">h1</span>&gt;Welcome, {'{'}user.name{'}'}&lt;/<span className="text-red-400">h1</span>&gt;<br/>
                  {'    '}&lt;/<span className="text-red-400">div</span>&gt;<br/>
                  {'  '});<br/>
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 px-6 py-16 md:py-20 text-center shadow-2xl md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to accelerate your career?
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Join 10,000+ students who have mastered the stack and landed jobs at top tech companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 rounded-md px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="rounded-md bg-white px-8 py-3 text-sm font-bold text-blue-700 hover:bg-gray-50 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
