import { MenuItem } from '@/packages/components/Dropdown';
import { LayersIcon, OpacityIcon, GlobeIcon, TransparencyGridIcon } from '@radix-ui/react-icons';
export const commonMenus: MenuItem[] = [
  {
    id: '001',
    label: 'item-001',
  },
  {
    id: '002',
    label: 'item-002',
  },
  {
    id: '003',
    label: 'item-003',
  },
];
export const menuWidthSeparator: MenuItem[] = [
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Set',
    label: 'Setting',
  },
  {
    type: 'separator',
  },
  {
    id: 'Exit',
    label: 'Exit',
  },
];

export const menuWithChildren: MenuItem[] = [
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Set',
    label: 'Setting',
  },
  {
    id: 'Share',
    label: 'Share',
    children: [
      {
        id: 'email',
        label: 'Email',
      },
      {
        id: 'wehChat',
        label: 'weChat',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    id: 'Exit',
    label: 'Exit',
  },
];

export const menuWidthPreAndSuffix: MenuItem[] = [
  {
    id: 'layer',
    label: 'Layer',
    prefix: <LayersIcon className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + L</div>,
    onItemClick: (item) => {
      console.log(item);
    },
  },
  {
    id: 'opacity',
    label: 'Opacity',
    prefix: <OpacityIcon className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + O</div>,
    onItemClick: (item) => {
      console.log(item);
    },
  },
  {
    id: 'more',
    label: 'More tools',
    prefix: <GlobeIcon className="mr-1" />,
    children: [
      {
        id: 'tool-trans',
        label: 'Trans',
        prefix: <TransparencyGridIcon className="mr-1" />,
        suffix: <div className="text-gray-400 ml-10">⌘ + ⌥ + T</div>,
      },
    ],
  },
];
