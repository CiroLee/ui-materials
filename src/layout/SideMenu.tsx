import { Link, NavLink } from 'react-router-dom';
import { router } from '@/routes';
import { type MyRouteObject } from '@/routes';
export default function SideMenu() {
  const navRoutes = (router.routes.find((r) => r.id === 'layout')?.children || []) as MyRouteObject[];
  return (
    <div className="flex flex-col w-[200px] shrink-0 h-[100vh] border-r px-3">
      {navRoutes.map((r) =>
        r.meta.role === 'title' ? (
          <Link
            className="h-[36px] px-8px h-44px mb-2 flex items-center justify-center font-bold cursor-pointer"
            key={r.id}
            to={r.path!}>
            {r.meta.title}
          </Link>
        ) : (
          <NavLink
            key={r.id}
            to={r.path!}
            className={({ isActive }) =>
              `h-[36px] flex items-center rounded-[4px] hover:bg-gray-200/60 transition-all duration-200 px-2 ${
                isActive ? 'text-black' : 'text-gray-500/40'
              }`
            }>
            {r.meta.title}
          </NavLink>
        ),
      )}
    </div>
  );
}
