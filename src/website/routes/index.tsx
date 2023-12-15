import { RouteObject, createHashRouter } from 'react-router-dom';
import Home from '@site/pages/home';
import Layout from '@site/layout';
export type MyRouteObject = RouteObject & {
  meta: {
    title?: string;
    role?: string;
  };
};
import DropdownMenuPage from '@site/pages/dropdown-page';
import PopupPage from '@site/pages/popup-page';
import SwitchPage from '@site/pages/switch-page';
import ButtonPage from '@site/pages/button-page';
import CheckboxPage from '@site/pages/checkbox-page';
import AvatarPage from '@site/pages/avatar-page';
import TablePage from '@site/pages/table-page';
import RadioPage from '@site/pages/radio-page';
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
      {
        path: 'table',
        id: 'table',
        element: <TablePage />,
        meta: {
          title: 'Table',
          role: 'component',
        },
      },
      {
        path: 'radio group',
        id: 'radio group',
        element: <RadioPage />,
        meta: {
          title: 'Radio Group',
          role: 'component',
        },
      },
    ] as MyRouteObject[],
  } as MyRouteObject,
]);
