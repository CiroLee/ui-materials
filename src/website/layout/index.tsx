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
        <main className="flex-1 py-4 px-4 h-[100vh] overflow-auto md:px-12">
          <Suspense fallback={<Loading show />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </ToastProvider>
  );
}
