import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Plus, Workflow } from 'lucide-react';

import ThemeToggle from '@/components/theme-toggle';

const NavSidebar = () => {
  return (
    <nav className="space-y-4 flex flex-col font-semibold items-center h-full w-full bg-gray-100 dark:bg-[#1e1f22] p-4">
      <button className="group relative flex items-center w-full gap-4">
        <div className="absolute -left-4 bg-primary rounded-r-full transition-all w-[6px]  h-full" />
        <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-primary">
          <Workflow className="group-hover:text-white transition" size={23} />
        </div>
        Company
      </button>

      <Separator className="h-[1px] bg-zinc-300 dark:bg-zinc-700 rounded-md !mt-4 mx-auto" />
      <ScrollArea className="flex flex-col gap-y-4 w-full">
        <button className="group relative  flex items-center w-full gap-4 mb-4">
          <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-primary">
            <Home className="group-hover:text-white transition" size={23} />
          </div>
          Home
        </button>

        {Array(3)
          .fill('-')
          .map((_, i) => (
            <button key={i} className="group flex items-center w-full gap-4 mb-4">
              <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-primary">
                <Plus className="group-hover:text-white transition" size={25} />
              </div>
              Menu Item {i + 1}
            </button>
          ))}
      </ScrollArea>

      <Separator className="h-[1px] bg-zinc-300 dark:bg-zinc-700 rounded-md !mt-0 mx-auto" />
      <div className="pl-2 mt-auto flex items-center   gap-y-4 w-full">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavSidebar;
