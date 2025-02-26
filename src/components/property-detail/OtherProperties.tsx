import PropertyCard from '../listings/PropertyCard';

const OtherProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Isimi Lagos land for sale',
      location: 'Kings Court Lekki Phase 3',
      price: '₦400,000,000',
      beds: 6,
      baths: 8,
      size: '700sqm',
      image: '/images/cover.png',
    },
    {
      id: 2,
      title: '3 Bedroom Penthouse',
      location: 'Kings Court Lekki Phase 3',
      price: '₦350,000,000',
      beds: 3,
      baths: 4,
      size: '450sqm',
      image: '/images/cover.png',
    },
    {
      id: 3,
      title: '3 Bedroom Penthouse',
      location: 'Kings Court Lekki Phase 3',
      price: '₦350,000,000',
      beds: 3,
      baths: 4,
      size: '450sqm',
      image: '/images/cover.png',
    },
    {
      id: 4,
      title: '3 Bedroom Penthouse',
      location: 'Kings Court Lekki Phase 3',
      price: '₦350,000,000',
      beds: 3,
      baths: 4,
      size: '450sqm',
      image: '/images/cover.png',
    },
    // Add more properties
  ];
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
