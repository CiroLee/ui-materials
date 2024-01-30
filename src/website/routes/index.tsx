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
import BadgePage from '@site/pages/badge-page';
import TagPage from '@site/pages/tag-page';
import KbdPage from '@site/pages/kbd-page';
import HeadingPage from '@site/pages/heading-page';
import SkeletonPage from '@site/pages/skeleton-page';
import PopoverPage from '@site/pages/popover-page';
import TooltipPage from '@site/pages/tooltip-page';
import CircleProgressPage from '@site/pages/circle-progress-page';
import ProgressPage from '@site/pages/progress-page';
import ModalPage from '@site/pages/modal-page';

export const router = createHashRouter([
  {
    path: '/',
    id: 'layout',
    element: <Layout />,
    meta: {
      title: 'ui materials',
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
      {
        path: 'badge',
        id: 'badge',
        element: <BadgePage />,
        meta: {
          title: 'Badge',
          role: 'component',
        },
      },
      {
        path: 'tag',
        id: 'tag',
        element: <TagPage />,
        meta: {
          title: 'Tag',
          role: 'component',
        },
      },
      {
        path: 'kbd',
        id: 'kbd',
        element: <KbdPage />,
        meta: {
          title: 'Kbd',
          role: 'component',
        },
      },
      {
        path: 'heading',
        id: 'heading',
        element: <HeadingPage />,
        meta: {
          title: 'Heading',
          role: 'component',
        },
      },
      {
        path: 'skeleton',
        id: 'skeleton',
        element: <SkeletonPage />,
        meta: {
          title: 'Skeleton',
          role: 'component',
        },
      },
      {
        path: 'popover',
        id: 'popover',
        element: <PopoverPage />,
        meta: {
          title: 'Popover',
          role: 'component',
        },
      },
      {
        path: 'tooltip',
        id: 'tooltip',
        element: <TooltipPage />,
        meta: {
          title: 'Tooltip',
          role: 'component',
        },
      },
      {
        path: 'circle-progress',
        id: 'circle-progress',
        element: <CircleProgressPage />,
        meta: {
          title: 'CircleProgress',
          role: 'component',
        },
      },
      {
        path: 'progress',
        id: 'progress',
        element: <ProgressPage />,
        meta: {
          title: 'Progress',
          role: 'component',
        },
      },
      {
        path: 'modal',
        id: 'modal',
        element: <ModalPage />,
        meta: {
          title: 'Modal',
          role: 'component',
        },
      },
    ] as MyRouteObject[],
  } as MyRouteObject,
]);
