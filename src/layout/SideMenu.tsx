import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { motion, type Variants } from 'framer-motion';
import { router } from '@/routes';
import { type MyRouteObject } from '@/routes';
export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const navRoutes = (router.routes.find((r) => r.id === 'layout')?.children || []) as MyRouteObject[];
  const variant: Variants = {
    collapsed: {
      x: -200,
      transition: {
        ease: 'easeInOut',
      },
    },
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.div
      initial="expanded"
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variant}
      className="relative flex flex-col w-[200px] shrink-0 h-[100vh] border-r px-3">
      <motion.div
        variants={{
          collapsed: {
            x: 20,
            rotateZ: 180,
          },
          expanded: {
            x: 0,
          },
        }}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-[14%] right-[-16px] w-[32px] h-[32px] border rounded-full flex bg-white items-center justify-center">
        <ChevronLeftIcon className="w-[1em] h-[1em] text-[20px]" />
      </motion.div>
      {navRoutes.map((r) =>
        r.meta.role === 'title' ? (
          <Link
            className="h-[36px] px-8px h-44px mb-2 flex items-center px-2 font-bold cursor-pointer"
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
                isActive ? 'text-brand-500' : 'text-gray-500/40'
              }`
            }>
            {r.meta.title}
          </NavLink>
        ),
      )}
    </motion.div>
  );
}
