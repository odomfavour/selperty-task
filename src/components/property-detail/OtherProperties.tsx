import { Property } from '@/types/property';
import PropertyCard from '../listings/PropertyCard';

interface OtherPropertiesProps {
  properties: Property[];
}

const OtherProperties = ({ properties }: OtherPropertiesProps) => {
  return (
    <section className="mt-[60px]">
      <h3 className="text-[20px] font-semibold mb-2">Other Properties</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default OtherProperties;
