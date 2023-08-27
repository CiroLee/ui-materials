import { RouteObject, createHashRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/layout';
import DropdownMenuPage from '@/pages/dropdowm-menu';
export const router = createHashRouter([
  {
    path: '/',
    id: 'layout',
    element: <Layout />,
    children: [
      {
        path: '/',
        id: 'home',
        element: <Home />,
        meta: {
          title: 'Radix Demo',
          role: 'title',
        },
      },
      {
        path: '/dropdown-menu',
        id: 'dropdown-menu',
        element: <DropdownMenuPage />,
        meta: {
          title: 'DropdownMenu',
          role: 'component',
        },
      },
    ] as unknown as RouteObject[],
  },
]);
