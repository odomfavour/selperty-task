import Navbar from '@/components/general/Navbar';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
