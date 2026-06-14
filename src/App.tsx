/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import SidebarLayout from './components/SidebarLayout';

import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import ReactUseState from './pages/ReactUseState';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          
          <Route element={<SidebarLayout />}>
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resources" element={<Resources />} />
            
            {/* Specific Lesson Pages */}
            <Route path="lessons/react/usestate" element={<ReactUseState />} />
            
            {/* Fallback for all other lessons to the useState page for this demo */}
            <Route path="lessons/*" element={<Navigate to="/lessons/react/usestate" replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
