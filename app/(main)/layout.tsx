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
    <div className="h-full">
      <NavSidebar />
      <ScrollArea >

      <TopHeader />
      {/* adjusting padding pixels here based on top header and nav sidebar */}
      <main className="md:pl-[292px] h-full py-3 pr-3">{children}</main>
      </ScrollArea>
    </div>
  );
};

export default MainLayout;
