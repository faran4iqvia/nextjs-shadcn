'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Workflow } from 'lucide-react';
import { navItems } from './data-nav-items';

import ThemeToggle from '@/components/theme-toggle';
import Icon from '@/components/Icon';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const TestSidebarContent = () => {
 const pathname = usePathname();
 const router = useRouter();

 return (
  <>
   <div
    className='z-50 flex h-20 items-center border-b-2 border-neutral-200 bg-gray-100 px-4 dark:border-neutral-950 dark:bg-[#1e1f22]'
    onClick={() => router.push('/')}
   >
    <button className='group flex w-full items-center gap-4'>
     <div className='flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-background transition-all group-hover:rounded-[16px]  group-hover:bg-primary dark:bg-neutral-700'>
      <Workflow className='transition group-hover:text-white' size={23} />
     </div>
     Company
    </button>
   </div>

   <ScrollArea className='w-full flex-1 bg-gray-100 py-2 dark:bg-[#1e1f22]'>
    {/* <div className="p-4 py-2">
          <button className="group relative flex items-center w-full gap-4">
            <div className="absolute -left-3 bg-primary rounded-r-full transition-all w-[6px]  h-full" />
            <div className="flex h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-primary">
              <Home className="group-hover:text-white transition" size={23} />
            </div>
            Home
          </button>
        </div> */}

    {navItems.map(({ id, iconName, path, label }) => (
     <div key={id} className='p-4 py-2' onClick={() => router.push(path)}>
      <button className='group relative flex w-full items-center gap-4'>
       {pathname.includes(path) && (
        <div className='absolute -left-3 h-full w-[6px] rounded-r-full bg-primary  transition-all' />
       )}
       <div
        className={cn(
         pathname.includes(path)
          ? 'bg-primary text-white'
          : 'bg-background dark:bg-neutral-700',
         `flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] transition-all group-hover:rounded-[16px]  group-hover:bg-primary `
        )}
       >
        <Icon name={iconName} className='group-hover:text-white' size={23} />
       </div>
       {label}
      </button>
     </div>
    ))}
   </ScrollArea>

   <div className='mt-auto flex w-full items-center gap-y-4 border-t-2 border-neutral-200 bg-gray-100 p-4 pb-2 dark:border-neutral-950 dark:bg-[#1e1f22]'>
    <ThemeToggle showInfo />
   </div>
   <div className='bg-gray-100 p-4 pt-2 dark:bg-[#1e1f22]'>
    <Button size='full' variant='outline'>
     Logout
    </Button>
   </div>
  </>
 );
};

export default TestSidebarContent;
