import TestSidebarContent from './test-sidebar-content';

const NavSidebar = () => {
 return (
  <nav className='fixed inset-y-0 z-30 hidden h-full flex-col md:flex  md:w-[280px]'>
   <TestSidebarContent />
  </nav>
 );
};

export default NavSidebar;
