import { type FC, useState } from 'react';
import * as DropDownMenu from '@radix-ui/react-dropdown-menu';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export interface MenuItem {
  key: string;
  label: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  children?: MenuItem[];
}
interface DropDownProps {
  children?: React.ReactNode;
  className?: string;
  menus: MenuItem[];
}

const MenuItem: FC<MenuItem> = (props) => {
  return (
    <DropDownMenu.Item className="outline-none min-h-[32px] flex items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-brand-300 data-[highlighted]:text-white px-4 rounded-sm">
      {props.label}
    </DropDownMenu.Item>
  );
};

function renderSubMenu(menu: MenuItem) {
  return (
    <DropDownMenu.Sub key={menu.key}>
      <DropDownMenu.SubTrigger className="outline-none min-h-[32px] flex justify-between items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-brand-300 data-[highlighted]:text-white px-4 rounded-sm">
        {menu.label}
      </DropDownMenu.SubTrigger>
      <DropDownMenu.Portal>
        <DropDownMenu.SubContent className="bg-white border border-gray-200 py-1 px-1">
          {renderMenuList(menu.children!)}
        </DropDownMenu.SubContent>
      </DropDownMenu.Portal>
    </DropDownMenu.Sub>
  );
}
function renderMenuList(menu: MenuItem[]) {
  return menu.map((item) => {
    if (item.children) {
      return renderSubMenu(item);
    }
    return <MenuItem key={item.key} label={item.label} prefix={item.prefix} suffix={item.suffix} />;
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
  return (
    <>
      <DropDownMenu.Root open={open} onOpenChange={setOpen}>
        <DropDownMenu.Trigger asChild>{props.children}</DropDownMenu.Trigger>
        <AnimatePresence>
          {open ? (
            <DropDownMenu.Portal forceMount>
              <DropDownMenu.Content sideOffset={8}>
                <motion.div
                  initial="closed"
                  animate={open ? 'open' : 'closed'}
                  exit="closed"
                  variants={dropdownVariants}>
                  <DropDownMenu.Arrow className="fill-white" />
                  <DropDownMenu.Group className="bg-white rounded-sm border border-gray-200 py-2 px-1">
                    {renderMenuList(props.menus)}
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
