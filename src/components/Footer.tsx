export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 px-4 md:h-20 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-700">MERN Workshop</span>
        </div>
        <p className="text-sm text-gray-500">
          © 2024 MERN Workshop. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 hover:underline underline-offset-4">GitHub</a>
          <a href="#" className="hover:text-gray-900 hover:underline underline-offset-4">Discord</a>
          <a href="#" className="hover:text-gray-900 hover:underline underline-offset-4">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
