import { Property } from '@/types/property';
import { DoubleBed, BathTub, FloorPlan, PaymentSuccess } from '@/utils/icons';
import { FaLocationPin } from 'react-icons/fa6';

interface PropertyHeaderProps {
  propertyDetail: Property;
}
const PropertyHeader = ({ propertyDetail }: PropertyHeaderProps) => {
  return (
    <div>
      <div className="rounded-lg overflow-hidden">
        <img
          src={propertyDetail?.mediaUrls?.[0].url}
          alt={propertyDetail?.asset?.name}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="mt-4 flex md:flex-row flex-col justify-between items-start">
        <div>
          <h1 className="md:text-[30px] text-2xl font-bold capitalize">
            {propertyDetail?.asset?.name || '6 Bedroom Luxury Duplex'}
          </h1>
          <div className="flex gap-1 items-center mb-2">
            <FaLocationPin className="text-sm" />
            <p className="text-gray-500 text-sm">
              {' '}
              {propertyDetail?.asset?.location.city || 'Ikoyi'},{' '}
              {propertyDetail?.asset?.location?.state || 'Lagos'}
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="md:text-[30px] text-2xl  font-bold mb-1">
            ₦400,000,000
          </h2>
          <div className="bg-[#ECFFF8] border border-[#A5F5D7] flex items-center gap-1 text-sm py-1 px-2 rounded-lg">
            <PaymentSuccess /> Flexible payment available
          </div>
        </div>
      </div>
      <div className="flex gap-[10px] text-gray-600 mt-2">
        <span className="border-[#D9D9D9] border py-1 px-2 rounded-lg flex items-center gap-1">
          <DoubleBed /> 3
        </span>
        <span className="border-[#D9D9D9] border py-1 px-2 rounded-lg flex items-center gap-1">
          <BathTub /> 5
        </span>
        <span className="border-[#D9D9D9] border py-1 px-2 rounded-lg flex items-center gap-1">
          <FloorPlan /> {propertyDetail?.asset?.totalSizeValue || 7000}{' '}
          {propertyDetail?.asset?.totalSizeUnit || 'sqm'}
        </span>
      </div>
    </div>
  );
};

export default PropertyHeader;
