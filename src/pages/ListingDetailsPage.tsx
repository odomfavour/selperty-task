import Loader from '@/components/general/Loader';
import ActionButtons from '@/components/property-detail/ActionButtons';
import DevelopmentUpdate from '@/components/property-detail/DevelopmentUpdate';
import OtherProperties from '@/components/property-detail/OtherProperties';
import PriceInsight from '@/components/property-detail/PriceInsight';
import PropertyFeatures from '@/components/property-detail/PropertyFeatures';
import PropertyHeader from '@/components/property-detail/PropertyHeader';
import PropertyMap from '@/components/property-detail/PropertyMap';
import { useProperty, usePropertyById } from '@/hooks/useProperty';
import { Property } from '@/types/property';
import { useEffect } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { propertyId } = useParams<{ propertyId: string }>();

  const {
    data: propertyData,
    isLoading: propertyLoading,
    error: propertyError,
  } = usePropertyById(propertyId || '');
  const {
    data: listingsData,
    isLoading: listingsLoading,
    error: listingsError,
  } = useProperty();

  if (propertyLoading || listingsLoading) {
    return <Loader />;
  }

  if (propertyError) {
    return <p>Error fetching property details: {propertyError.message}</p>;
  }

  if (listingsError) {
    return <p>Error fetching listings: {listingsError.message}</p>;
  }
  const filteredListings = listingsData?.realEstateProducts?.filter(
    (listing: Property) => listing.id !== propertyId
  );

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
            <Link to="/" className="opacity-40">
              Listings
            </Link>
            <p className="opacity-40">/</p>
            <p>Property Details</p>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-3/4 w-full">
              <PropertyHeader
                propertyDetail={propertyData?.realEstateProduct}
              />
              <PropertyMap propertyDetail={propertyData?.realEstateProduct} />
              <PropertyFeatures />
            </div>
            <div className="md:w-1/4 w-full">
              <PriceInsight />
              <DevelopmentUpdate />
              <ActionButtons />
            </div>
          </div>
          <OtherProperties properties={filteredListings} />
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsPage;
