import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
export default function Layout() {
  return (
    <div className="flex">
      <SideMenu />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
