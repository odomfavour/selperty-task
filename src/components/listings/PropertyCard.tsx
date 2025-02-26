import { Property } from '@/types/property';
import { FaLocationPin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { DoubleBed, BathTub, FloorPlan } from '@/utils/icons';
import { IoHeartOutline } from 'react-icons/io5';
interface PropertyCardProps {
  property: Property;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white border-[#F0F0F0] border rounded-lg overflow-hidden relative">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="py-5 px-[23px]">
        <div className="flex gap-1 items-center mb-2">
          <FaLocationPin className="text-sm" />
          <p className="text-gray-500 text-sm">{property.location}</p>
        </div>
        <h2 className="text-lg font-normal">{property.title}</h2>
        <div className="flex gap-[10px] text-gray-600 mt-2">
          <span className="border-[#D9D9D9] border py-1 px-2 rounded-lg flex items-center gap-1">
            <DoubleBed /> {property.beds}
          </span>
          <span className="border-[#D9D9D9] border py-1 px-2 rounded-lg flex items-center gap-1">
            <BathTub /> {property.baths}
          </span>
          <span className="border-[#D9D9D9] border py-1 px-2 rounded-lg flex items-center gap-1">
            <FloorPlan /> {property.size}
          </span>
        </div>
        <p className="text-[20px] font-semibold mt-2">{property.price}</p>
        <Link
          to={`/listings/${property.id}`}
          className="mt-4 w-full plain-btn py-1 rounded"
        >
          View Property
        </Link>
      </div>
      <div className="absolute  top-3 right-3">
        <IoHeartOutline className="text-white text-lg" />
      </div>
    </div>
  );
};

export default PropertyCard;
