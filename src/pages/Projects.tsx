import { Eye, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'profile',
    title: 'Personal Profile',
    description: 'A responsive landing page featuring semantic HTML5 and modern CSS layouts.',
    tags: ['HTML5', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Interactive portfolio using CSS Grid, Flexbox, and basic JavaScript interactions.',
    tags: ['Flexbox', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'todo',
    title: 'To-Do List',
    description: 'State management exercise building a persistent task tracker with LocalStorage.',
    tags: ['React', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1507925922893-873105f4e0c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'movie',
    title: 'Movie App',
    description: 'Fetching real-time data from TMDB API with search and filtering capabilities.',
    tags: ['React', 'Fetch API'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'weather',
    title: 'Weather App',
    description: 'Dynamic UI updates based on external weather API data and geolocation.',
    tags: ['Axios', 'OpenWeather'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Content management system with CRUD operations and Markdown support.',
    tags: ['Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Full-featured store with cart functionality and payment gateway integration.',
    tags: ['Redux', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'final',
    title: 'Final MERN App',
    description: 'A comprehensive full-stack application with JWT auth, complex state, and Cloudinary.',
    tags: ['MERN Stack', 'JWT Auth'],
    badge: 'CAPSTONE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Projects() {
  return (
    <div className="py-12 px-4 sm:px-8 max-w-6xl">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Projects Showcase</h1>
      <p className="text-gray-600 mb-12 max-w-2xl text-lg">
        Apply your learning through building. These projects progress from simple semantic markup to full-stack MERN application architecture.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            {project.badge && (
              <div className="absolute top-4 right-4 z-10 rounded bg-blue-900 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                {project.badge}
              </div>
            )}
            <div className="h-48 bg-gray-100 overflow-hidden border-b border-gray-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="rounded bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-100 mt-auto">
                <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  <Eye className="h-4 w-4" /> View Demo
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                  <Code2 className="h-4 w-4" /> Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
