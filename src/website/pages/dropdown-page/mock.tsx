import { MenuItem } from '@/packages/ui/Dropdown';
import { Layers, Droplet, Globe, Pipette } from 'lucide-react';

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
  {
    id: '004',
    label: 'item-004',
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
    prefix: <Layers size={16} className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + L</div>,
  },
  {
    id: 'opacity',
    label: 'Opacity',
    prefix: <Droplet size={16} className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + O</div>,
  },
  {
    id: 'more',
    label: 'More tools',
    prefix: <Globe size={16} className="mr-1" />,
    children: [
      {
        id: 'tool-trans',
        label: 'Pipette',
        prefix: <Pipette size={15} className="mr-1" />,
        suffix: <div className="text-gray-400 ml-10">⌘ + ⌥ + T</div>,
      },
    ],
  },
];
