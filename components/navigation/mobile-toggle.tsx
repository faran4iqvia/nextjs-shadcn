import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import MobSidebar from './mob-sidebar';

const MobileToggle = () => {
 return (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant='ghost' size='icon' className='md:hidden'>
     <Menu />
    </Button>
   </SheetTrigger>

   <SheetContent side='left' className='w-[260px] p-0'>
    <MobSidebar />
   </SheetContent>
  </Sheet>
 );
};

export default MobileToggle;
