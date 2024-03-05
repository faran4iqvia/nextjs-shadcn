import MobileToggle from '@/components/navigation/mobile-toggle';

const TopHeader = () => {
 return (
  <header className='text-md flex h-20  items-center border-b-2 border-neutral-200 font-semibold dark:border-neutral-900 md:ml-[280px]'>
   <div className='flex w-full items-center gap-2 px-2'>
    <MobileToggle />
    111 TopHeader
   </div>
  </header>
 );
};

export default TopHeader;
