import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function SidebarLayout() {
  return (
    <div className="flex flex-1 mx-auto w-full max-w-7xl">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
