import ActionButtons from '@/components/property-detail/ActionButtons';
import DevelopmentUpdate from '@/components/property-detail/DevelopmentUpdate';
import OtherProperties from '@/components/property-detail/OtherProperties';
import PriceInsight from '@/components/property-detail/PriceInsight';
import PropertyFeatures from '@/components/property-detail/PropertyFeatures';
import PropertyHeader from '@/components/property-detail/PropertyHeader';
import PropertyMap from '@/components/property-detail/PropertyMap';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ListingDetailsPage = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto">
        <div className="pt-[36px] mb-5">
          <Link
            to="/"
            className="flex items-center text-primary mb-4 cursor-pointer"
          >
            <FaLongArrowAltLeft className="mr-2" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-2 mb-6 text-sm font-normal">
            <p>Listings</p>
            <p>/</p>
            <p>Property Details</p>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-3/4 w-full">
              <PropertyHeader />
              <PropertyMap />
              <PropertyFeatures />
            </div>
            <div className="md:w-1/4 w-full">
              <PriceInsight />
              <DevelopmentUpdate />
              <ActionButtons />
            </div>
          </div>
          <OtherProperties />
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsPage;
