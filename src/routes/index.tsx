import { RouteObject, createHashRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/layout';
export type MyRouteObject = RouteObject & {
  meta: {
    title?: string;
    role?: string;
  };
};
import DropdownMenuPage from '@/pages/dropdown-page';
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
          title: 'Radix materials',
          role: 'title',
        },
      },
      {
        path: '/dropdown-menu',
        id: 'dropdown-menu',
        element: <DropdownMenuPage />,
        meta: {
          title: 'Dropdown',
          role: 'component',
        },
      },
    ] as MyRouteObject[],
  },
]);
