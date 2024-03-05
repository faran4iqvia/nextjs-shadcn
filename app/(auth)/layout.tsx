import ThemeToggle from '@/components/theme-toggle';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
 return (
  <section className='h-full'>
   <header className='text-md flex h-20 w-full items-center justify-between  border-b-2 border-neutral-200 px-4 font-semibold dark:border-neutral-900'>
    <div className=''>Company Logo</div>
    <ThemeToggle />
   </header>

   <div className='h-[calc(100%-5rem)] '>{children}</div>
  </section>
 );
};

export default AuthLayout;
