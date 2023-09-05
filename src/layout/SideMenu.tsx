import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { router } from '@/routes';
import { type MyRouteObject } from '@/routes';
export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const navRoutes = (router.routes.find((r) => r.id === 'layout')?.children || []) as MyRouteObject[];
  const variant: Variants = {
    collapsed: {
      width: 0,
      padding: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    expanded: {
      width: 200,
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.aside
      initial="expanded"
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variant}
      className="relative flex flex-col shrink-0 w-[200px] h-[100vh] border-r px-3">
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
        <ChevronLeft size={20} className="text-[20px]" />
      </motion.div>
      {navRoutes.map((r) =>
        r.meta.role === 'title' ? (
          <motion.div key={r.id} className="overflow-hidden whitespace-nowrap">
            <Link className="h-[36px] px-8px h-44px mb-2 flex items-center px-2 font-bold cursor-pointer" to={r.path!}>
              {r.meta.title}
            </Link>
          </motion.div>
        ) : (
          <motion.div key={r.id} className="overflow-hidden whitespace-nowrap">
            <NavLink
              to={r.path!}
              className={({ isActive }) =>
                `h-[36px] flex items-center rounded-[4px] hover:bg-gray-200/60 transition-all duration-200 px-2 ${
                  isActive ? 'text-brand-500' : 'text-gray-500/40'
                }`
              }>
              {r.meta.title}
            </NavLink>
          </motion.div>
        ),
      )}
    </motion.aside>
  );
}
