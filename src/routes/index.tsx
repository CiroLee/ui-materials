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
import PopupPage from '@/pages/popup-page';
import SwitchPage from '@/pages/switch-page';
import ButtonPage from '@/pages/button-page';
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
        path: '/button',
        id: 'button',
        element: <ButtonPage />,
        meta: {
          title: 'Button',
          role: 'component',
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
      {
        path: '/popup',
        id: 'popup',
        element: <PopupPage />,
        meta: {
          title: 'Popup',
        },
      },
      {
        path: '/switch',
        id: 'switch',
        element: <SwitchPage />,
        meta: {
          title: 'Switch',
        },
      },
    ] as MyRouteObject[],
  },
]);
