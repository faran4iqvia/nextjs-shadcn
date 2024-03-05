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

      <div className="sticky top-0 w-full">
        <TopHeader />
      </div>

      {/* adjusting padding pixels here based on top header and nav sidebar */}
      <main className="pl-3 md:pl-[292px] h-full py-4 pr-3">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
