import TestSidebarContent from './test-sidebar-content';

const NavSidebar = () => {
  return (
    <nav className="hidden md:flex h-full md:w-[280px] z-30 flex-col fixed  inset-y-0">
      <TestSidebarContent />
    </nav>
  );
};

export default NavSidebar;
