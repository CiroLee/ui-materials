import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
export default function Layout() {
  return (
    <div className="flex">
      <SideMenu />
      <main className="flex-1 py-4 px-12 h-[100vh] overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
