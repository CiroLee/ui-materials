import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as RadixDropDownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, ChevronRightIcon } from '@radix-ui/react-icons';
export default function DropdownMenuPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <RadixDropDownMenu.Root open={open} onOpenChange={setOpen}>
        <RadixDropDownMenu.Trigger asChild>
          <button className="w-[32px] h-[32px] rounded-full inline-flex justify-center items-center border">
            <HamburgerMenuIcon />
          </button>
        </RadixDropDownMenu.Trigger>
        <AnimatePresence>
          {open && (
            <RadixDropDownMenu.Portal forceMount>
              <RadixDropDownMenu.Content
                className="bg-white rounded-sm border border-gray-200 py-2 px-1"
                align="start"
                sideOffset={5}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}>
                  <RadixDropDownMenu.Item className="outline-0 h-[24px] flex items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-purple-400 data-[highlighted]:text-white hover:text-white px-4 rounded-sm">
                    <div>Open new file</div>
                  </RadixDropDownMenu.Item>
                  <RadixDropDownMenu.Item className="outline-0 h-[24px] flex items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-purple-400 data-[highlighted]:text-white hover:text-white px-4 rounded-sm">
                    <div>close window</div>
                  </RadixDropDownMenu.Item>
                  <RadixDropDownMenu.Sub>
                    <RadixDropDownMenu.SubTrigger className="outline-0 h-[24px] flex justify-between items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-purple-400 data-[highlighted]:text-white hover:text-white px-4 rounded-sm">
                      <span>more</span>
                      <ChevronRightIcon />
                    </RadixDropDownMenu.SubTrigger>
                    <RadixDropDownMenu.Portal>
                      <RadixDropDownMenu.SubContent className="bg-white border border-gray-200 py-1 px-1">
                        <RadixDropDownMenu.Item className="outline-0 h-[24px] flex justify-between items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-purple-400 data-[highlighted]:text-white px-4 rounded-sm">
                          <div>save As</div>
                        </RadixDropDownMenu.Item>
                        <RadixDropDownMenu.Item className="outline-0 h-[24px] flex justify-between items-center text-[#333] text-sm cursor-default data-[highlighted]:bg-purple-400 data-[highlighted]:text-white px-4 rounded-sm">
                          <div>export</div>
                        </RadixDropDownMenu.Item>
                      </RadixDropDownMenu.SubContent>
                    </RadixDropDownMenu.Portal>
                  </RadixDropDownMenu.Sub>
                </motion.div>
              </RadixDropDownMenu.Content>
            </RadixDropDownMenu.Portal>
          )}
        </AnimatePresence>
      </RadixDropDownMenu.Root>
    </div>
  );
}
