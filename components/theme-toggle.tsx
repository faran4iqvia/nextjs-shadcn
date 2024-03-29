'use client';

import { useState, useEffect, FC } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
 showInfo?: boolean;
}
const ThemeToggle: FC<ThemeToggleProps> = ({ showInfo = false }) => {
 const { theme, setTheme } = useTheme();

 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
  setIsClient(true);
 }, []);

 return (
  <div
   className='flex  cursor-pointer items-center'
   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  >
   {!isClient ? (
    <p className='p-2'>Loading...</p>
   ) : (
    <>
     <Button variant='outline' size='icon'>
      <Sun className='h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />

      <span className='sr-only'>Toggle theme</span>
     </Button>
     {showInfo && (
      <span className='mx-4 font-bold capitalize'>Theme: {theme}</span>
     )}
    </>
   )}
  </div>
 );
};
export default ThemeToggle;
