import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiArrowLeftSLine } from '@remixicon/react';
import { motion, type Variants } from 'framer-motion';
import { router } from '../routes';
import { type MyRouteObject } from '../routes';
export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const head = router.routes.find((r) => r.id === 'layout') as MyRouteObject;
  const children = router.routes.find((r) => r.id === 'layout')!.children as MyRouteObject[];
  const navRoutes = children.filter((c) => c.meta.role !== 'title').sort((a, b) => a.id!.localeCompare(b.id!));
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

  useEffect(() => {
    if (document.body.clientWidth < 768) {
      setCollapsed(true);
    }
  }, []);
  return (
    <motion.aside
      initial="expanded"
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variant}
      className="flex flex-col shrink-0 w-[200px] h-[100vh] border-r bg-white z-10 fixed md:relative">
      <motion.div className="overflow-hidden whitespace-nowrap">
        <Link className="h-[36px] px-8px h-44px mb-2 flex items-center px-2 font-bold cursor-pointer" to={head.path!}>
          {head.meta.title}
        </Link>
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
          <RiArrowLeftSLine size={20} className="text-[20px]" />
        </motion.div>
      </motion.div>
      <div className="flex-1 overflow-y-auto pb-4 md:site-scrollbar">
        {navRoutes.map((r) => (
          <motion.div key={r.id} className="overflow-hidden whitespace-nowrap">
            <NavLink
              to={r.path!}
              className={({ isActive }) =>
                `h-[36px] flex items-center hover:bg-gray-200/60 hover:text-brand-500/50 transition-all duration-200 px-2 cursor-default ${
                  isActive ? 'text-brand-500 hover:text-brand-500' : 'text-gray-500/40'
                }`
              }>
              {r.meta.title}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}
