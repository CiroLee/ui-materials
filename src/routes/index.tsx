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
import CheckboxPage from '@/pages/checkbox-page';
import AvatarPage from '@/pages/avatar-page';
export const router = createHashRouter([
  {
    path: '/',
    id: 'layout',
    element: <Layout />,
    meta: {
      title: 'Radix materials',
      role: 'title',
    },
    children: [
      {
        path: '/',
        id: 'home',
        element: <Home />,
        meta: {
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
        path: '/dropdown',
        id: 'dropdown',
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
          role: 'component',
        },
      },
      {
        path: '/switch',
        id: 'switch',
        element: <SwitchPage />,
        meta: {
          title: 'Switch',
          role: 'component',
        },
      },
      {
        path: 'checkbox',
        id: 'checkbox',
        element: <CheckboxPage />,
        meta: {
          title: 'Checkbox',
          role: 'component',
        },
      },
      {
        path: 'avatar',
        id: 'avatar',
        element: <AvatarPage />,
        meta: {
          title: 'Avatar',
          role: 'component',
        },
      },
    ] as MyRouteObject[],
  } as MyRouteObject,
]);
