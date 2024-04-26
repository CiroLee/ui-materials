import { RouteObject, createHashRouter } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '@site/layout';
export type MyRouteObject = RouteObject & {
  meta: {
    title?: string;
    role?: string;
  };
};

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
        Component: lazy(() => import('@site/pages/home')),
        meta: {
          role: 'title',
        },
      },
      {
        path: '/button',
        id: 'button',
        Component: lazy(() => import('@site/pages/button-page')),
        meta: {
          title: 'Button',
          role: 'component',
        },
      },
      {
        path: '/dropdown',
        id: 'dropdown',
        Component: lazy(() => import('@site/pages/dropdown-page')),
        meta: {
          title: 'Dropdown',
          role: 'component',
        },
      },
      {
        path: '/popup',
        id: 'popup',
        Component: lazy(() => import('@site/pages/popup-page')),
        meta: {
          title: 'Popup',
          role: 'component',
        },
      },
      {
        path: '/switch',
        id: 'switch',
        Component: lazy(() => import('@site/pages/switch-page')),
        meta: {
          title: 'Switch',
          role: 'component',
        },
      },
      {
        path: 'checkbox',
        id: 'checkbox',
        Component: lazy(() => import('@site/pages/checkbox-page')),
        meta: {
          title: 'Checkbox',
          role: 'component',
        },
      },
      {
        path: 'avatar',
        id: 'avatar',
        Component: lazy(() => import('@site/pages/avatar-page')),
        meta: {
          title: 'Avatar',
          role: 'component',
        },
      },
      {
        path: 'table',
        id: 'table',
        Component: lazy(() => import('@site/pages/table-page')),
        meta: {
          title: 'Table',
          role: 'component',
        },
      },
      {
        path: 'radio-group',
        id: 'radio-group',
        Component: lazy(() => import('@site/pages/radio-page')),
        meta: {
          title: 'RadioGroup',
          role: 'component',
        },
      },
      {
        path: 'badge',
        id: 'badge',
        Component: lazy(() => import('@site/pages/badge-page')),
        meta: {
          title: 'Badge',
          role: 'component',
        },
      },
      {
        path: 'tag',
        id: 'tag',
        Component: lazy(() => import('@site/pages/tag-page')),
        meta: {
          title: 'Tag',
          role: 'component',
        },
      },
      {
        path: 'kbd',
        id: 'kbd',
        Component: lazy(() => import('@site/pages/kbd-page')),
        meta: {
          title: 'Kbd',
          role: 'component',
        },
      },
      {
        path: 'heading',
        id: 'heading',
        Component: lazy(() => import('@site/pages/heading-page')),
        meta: {
          title: 'Heading',
          role: 'component',
        },
      },
      {
        path: 'skeleton',
        id: 'skeleton',
        Component: lazy(() => import('@site/pages/skeleton-page')),
        meta: {
          title: 'Skeleton',
          role: 'component',
        },
      },
      {
        path: 'popover',
        id: 'popover',
        Component: lazy(() => import('@site/pages/popover-page')),
        meta: {
          title: 'Popover',
          role: 'component',
        },
      },
      {
        path: 'tooltip',
        id: 'tooltip',
        Component: lazy(() => import('@site/pages/tooltip-page')),
        meta: {
          title: 'Tooltip',
          role: 'component',
        },
      },
      {
        path: 'circle-progress',
        id: 'circle-progress',
        Component: lazy(() => import('@site/pages/circle-progress-page')),
        meta: {
          title: 'CircleProgress',
          role: 'component',
        },
      },
      {
        path: 'progress',
        id: 'progress',
        Component: lazy(() => import('@site/pages/progress-page')),
        meta: {
          title: 'Progress',
          role: 'component',
        },
      },
      {
        path: 'modal',
        id: 'modal',
        Component: lazy(() => import('@site/pages/modal-page')),
        meta: {
          title: 'Modal',
          role: 'component',
        },
      },
      {
        path: 'input',
        id: 'input',
        Component: lazy(() => import('@site/pages/input-page')),
        meta: {
          title: 'Input',
          role: 'component',
        },
      },
      {
        path: 'input-number',
        id: 'input-number',
        Component: lazy(() => import('@site/pages/input-number-page')),
        meta: {
          title: 'InputNumber',
          role: 'component',
        },
      },
      {
        path: 'textarea',
        id: 'textarea',
        Component: lazy(() => import('@site/pages/textarea-page')),
        meta: {
          title: 'Textarea',
          role: 'component',
        },
      },
      {
        path: 'toast',
        id: 'toast',
        Component: lazy(() => import('@site/pages/toast-page')),
        meta: {
          title: 'Toast',
          role: 'component',
        },
      },
      {
        path: 'calendar',
        id: 'Calendar',
        Component: lazy(() => import('@site/pages/calendar-page')),
        meta: {
          title: 'Calendar',
          role: 'component',
        },
      },
      {
        path: 'link',
        id: 'Link',
        Component: lazy(() => import('@site/pages/link-page')),
        meta: {
          title: 'Link',
          role: 'component',
        },
      },
      {
        path: 'alert',
        id: 'Alert',
        Component: lazy(() => import('@site/pages/alert-page')),
        meta: {
          title: 'Alert',
          role: 'component',
        },
      },
      {
        path: 'pin-input',
        id: 'PinInput',
        Component: lazy(() => import('@site/pages/pin-input-page')),
        meta: {
          title: 'PinInput',
          role: 'component',
        },
      },
      {
        path: 'radio-button-group',
        id: 'RadioButtonGroup',
        Component: lazy(() => import('@site/pages/radio-button-page')),
        meta: {
          title: 'RadioButtonGroup',
          role: 'component',
        },
      },
      {
        path: 'loading',
        id: 'Loading',
        Component: lazy(() => import('@site/pages/loading-page')),
        meta: {
          title: 'Loading',
          role: 'component',
        },
      },
      {
        path: 'code',
        id: 'code',
        Component: lazy(() => import('@site/pages/code-page')),
        meta: {
          title: 'Code',
          role: 'component',
        },
      },
      {
        path: 'counter',
        id: 'counter',
        Component: lazy(() => import('@site/pages/counter-page')),
        meta: {
          title: 'Counter',
          role: 'component',
        },
      },
      {
        path: 'segment',
        id: 'segment',
        Component: lazy(() => import('@site/pages/segment-page')),
        meta: {
          title: 'Segment',
          role: 'component',
        },
      },
      {
        path: 'divider',
        id: 'divider',
        Component: lazy(() => import('@site/pages/divider-page')),
        meta: {
          title: 'Divider',
          role: 'component',
        },
      },
      {
        path: 'tree',
        id: 'tree',
        Component: lazy(() => import('@site/pages/tree-page')),
        meta: {
          title: 'Tree',
          role: 'component',
        },
      },
      {
        path: 'slider',
        id: 'slider',
        Component: lazy(() => import('@site/pages/slider-page')),
        meta: {
          title: 'Slider',
          role: 'component',
        },
      },
      {
        path: 'browserframe',
        id: 'browserframe',
        Component: lazy(() => import('@site/pages/browserframe-page')),
        meta: {
          title: 'BrowserFrame',
          role: 'component',
        },
      },
      {
        path: 'resizable',
        id: 'resizable',
        Component: lazy(() => import('@site/pages/resizable-page')),
        meta: {
          title: 'Resizable',
          role: 'component',
        },
      },
    ] as MyRouteObject[],
  } as MyRouteObject,
]);
