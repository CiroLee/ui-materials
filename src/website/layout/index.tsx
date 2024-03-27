import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SideMenu from './SideMenu';
import { ToastProvider } from '@ui/Toast';
export default function Layout() {
  return (
    <ToastProvider>
      <div className="flex">
        <SideMenu />
        <main className="flex-1 py-4 px-4 h-[100vh] overflow-auto md:px-12">
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </ToastProvider>
  );
}
