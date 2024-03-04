import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import NavSidebar from './nav-sidebar';

const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 !w-[280px]">
        <p>asdas</p>

        <NavSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
