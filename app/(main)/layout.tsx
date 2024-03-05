import { ReactNode } from 'react';
import NavSidebar from '@/components/navigation/nav-sidebar';
import TopHeader from '@/components/navigation/top-header';
import { ScrollArea } from '@/components/ui/scroll-area';

const MainLayout = ({
 children,
}: Readonly<{
 children: ReactNode;
}>) => {
 return (
  <div className='h-full overflow-hidden'>
   <NavSidebar />

   <TopHeader />

   {/* adjusting padding pixels here based on top header and nav sidebar */}
   <main className='h-full overflow-y-auto py-4 pb-24 pl-3 pr-3 md:pl-[292px]'>
    {children}
   </main>
  </div>
 );
};

export default MainLayout;
