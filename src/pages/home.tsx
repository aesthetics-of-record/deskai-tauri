import LeftSidebar from '@/components/side/left-sidebar';
import WindowTitlebar from '@/components/titlebar/window-titlebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex'>
      <LeftSidebar className='hidden md:block' />
      {/* <LeftSidebarSm className="block md:hidden" /> */}
      <div className='flex-1'>
        <WindowTitlebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
