import { type FC, useState } from 'react';
import cn from 'classnames';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import * as DropDownMenu from '@radix-ui/react-dropdown-menu';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export type MenuItemOnClickEvent = (menu: MenuItem) => void;
export interface MenuItem {
  id?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  children?: MenuItem[];
  type?: 'separator';
}
export interface DropDownProps {
  menus: MenuItem[];
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onOpenChange?: (open: boolean) => void;
  onItemClick?: MenuItemOnClickEvent;
}

const MenuItem: FC<MenuItem & { onClick?: MenuItemOnClickEvent }> = (props) => {
  return (
    <DropDownMenu.Item
      onClick={() => props.onClick?.(props)}
      disabled={props.disabled}
      className="outline-none h-[32px] flex items-center justify-between text-[#333] text-sm cursor-default data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed data-[highlighted]:bg-gray-100 p-[4px] rounded-[4px]">
      <div className="flex items-center">
        {props.prefix}
        <span>{props.label}</span>
      </div>
      {props.suffix}
    </DropDownMenu.Item>
  );
};

function renderSubMenu(menu: MenuItem, onItemClick?: MenuItemOnClickEvent) {
  return (
    <DropDownMenu.Sub key={menu.id}>
      <DropDownMenu.SubTrigger className="outline-none h-[32px] flex justify-between items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-gray-100 p-[4px] rounded-[4px]">
        <div className="flex items-center">
          {menu.prefix}
          <span>{menu.label}</span>
        </div>
        <ChevronRightIcon />
      </DropDownMenu.SubTrigger>
      <DropDownMenu.Portal>
        <DropDownMenu.SubContent className="bg-white rounded-[6px] border border-gray-200 p-[4px]">
          {renderMenuList(menu.children!, onItemClick)}
        </DropDownMenu.SubContent>
      </DropDownMenu.Portal>
    </DropDownMenu.Sub>
  );
}
function renderMenuList(menu: MenuItem[], onItemClick?: MenuItemOnClickEvent) {
  return menu.map((item) => {
    if (item.type === 'separator') {
      return <DropDownMenu.Separator key={item.id} className="h-[1px] my-[4px] bg-gray-200" />;
    }
    if (item.children) {
      return renderSubMenu(item, onItemClick);
    }
    return <MenuItem key={item.id} {...item} onClick={() => onItemClick?.(item)} />;
  });
}

const DropDown: FC<DropDownProps> = (props) => {
  const [open, setOpen] = useState(false);
  const dropdownVariants: Variants = {
    open: {
      opacity: 1,
      scale: 1,
    },
    closed: {
      opacity: 0,
      scale: 0.96,
    },
  };
  const onOpenChangeHandler = (open: boolean) => {
    setOpen(open);
    props.onOpenChange?.(open);
  };
  return (
    <>
      <DropDownMenu.Root open={open} onOpenChange={onOpenChangeHandler}>
        <DropDownMenu.Trigger asChild>{props.children}</DropDownMenu.Trigger>
        <AnimatePresence>
          {open ? (
            <DropDownMenu.Portal forceMount>
              <DropDownMenu.Content
                loop={true}
                side={props.side || 'bottom'}
                align={props.align || 'start'}
                sideOffset={8}
                className={cn(props.className)}
                style={props.style}>
                <motion.div
                  initial="closed"
                  animate={open ? 'open' : 'closed'}
                  exit="closed"
                  variants={dropdownVariants}>
                  <DropDownMenu.Group className="bg-white rounded-[6px] border border-gray-200 p-[4px]">
                    {renderMenuList(props.menus, props.onItemClick)}
                  </DropDownMenu.Group>
                </motion.div>
              </DropDownMenu.Content>
            </DropDownMenu.Portal>
          ) : null}
        </AnimatePresence>
      </DropDownMenu.Root>
    </>
  );
};

export default DropDown;
