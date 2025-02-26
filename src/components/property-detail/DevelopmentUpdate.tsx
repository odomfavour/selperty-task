import { Crane } from '@/utils/icons';
import { RxChevronRight } from 'react-icons/rx';
const DevelopmentUpdate = () => {
  return (
    <div className="bg-[#FAFAFA] border-[#F0F0F0] border p-4 rounded-2xl mb-6 h-[152px]">
      <h3 className="text-lg font-semibold flex items-center gap-1">
        <Crane />
        Development Update
      </h3>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: '15%' }}
        ></div>
      </div>
      <p className="text-gray-600 text-sm mt-2 mb-4">15% Complete</p>

      <div className="flex justify-between items-center">
        <p className="text-[13px] font-semibold mb-1">View Updates</p>

        <RxChevronRight className="text-lg opacity-50" />
      </div>
    </div>
  );
};

export default DevelopmentUpdate;
