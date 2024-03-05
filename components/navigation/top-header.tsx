import MobileToggle from '@/components/navigation/mobile-toggle';

const TopHeader = () => {
  return (
    <header className="md:ml-[280px] text-md font-semibold  flex items-center h-20 border-neutral-200 dark:border-neutral-900 border-b-2">
      <div className="w-full flex items-center gap-2 px-2">
        <MobileToggle />
        111 TopHeader
      </div>
    </header>
  );
};

export default TopHeader;
