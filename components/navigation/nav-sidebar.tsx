import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Plus, Workflow } from 'lucide-react';

import ThemeToggle from '@/components/theme-toggle';

const NavSidebar = () => {
  return (
    <nav className="hidden md:flex h-full md:w-[280px] z-30 flex-col fixed  inset-y-0">
      <div className="px-4 z-50 flex items-center h-20 border-neutral-200 dark:border-neutral-950 border-b-2 bg-gray-100 dark:bg-[#1e1f22]">
        <button className="group relative flex items-center w-full gap-4">
          <div className="absolute -left-3 bg-primary rounded-r-full transition-all w-[6px]  h-full" />
          <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background  dark:bg-neutral-700 group-hover:bg-primary">
            <Workflow className="group-hover:text-white transition" size={23} />
          </div>
          Company
        </button>

      </div>

     

  
      <ScrollArea className="flex-1 w-full bg-gray-100 dark:bg-[#1e1f22] p-4 relative">
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
              Menu {i + 1}
            </button>
          ))}
      </ScrollArea>

      <div className="p-4 mt-auto flex items-center gap-y-4 w-full bg-gray-100 dark:bg-[#1e1f22] border-neutral-200 dark:border-neutral-950 border-t-2">
        <ThemeToggle />
      </div>
 
    </nav>
  );
};

export default NavSidebar;
