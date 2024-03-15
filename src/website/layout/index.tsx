import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SideMenu from './SideMenu';
import { ToastProvider } from '@ui/Toast';
import Loading from '@ui/Loading';
export default function Layout() {
  return (
    <ToastProvider>
      <div className="flex">
        <SideMenu />
        <main className="flex-1 py-4 px-12 h-[100vh] overflow-auto">
          <Suspense fallback={<Loading text="loading..." />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </ToastProvider>
  );
}
