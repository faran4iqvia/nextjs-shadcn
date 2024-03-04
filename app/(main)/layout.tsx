import { ReactNode } from 'react';
import NavSidebar from '@/components/navigation/nav-sidebar'

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full md:w-[200px] lg:w-[280px] z-30 flex-col fixed  inset-y-0">
        <NavSidebar />
      </div>
      {/* adjusting padding pixels here */}
      <main className="md:pl-[212px] lg:pl-[292px] h-full py-3 pr-3">{children}</main>
    </div>
  );
};

export default MainLayout;
