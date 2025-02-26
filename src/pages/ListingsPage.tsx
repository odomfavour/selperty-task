import Filters from '@/components/listings/Filters';
import Pagination from '@/components/listings/Pagination';
import PropertyCard from '@/components/listings/PropertyCard';
import { useState } from 'react';

const ListingsPage = () => {
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
    // Add more properties
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 85;
  const totalPages = 50;
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="pt-[36px] mb-5">
          <h1 className="text-2xl font-bold mb-6">Listings</h1>
          <Filters />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <Pagination
            totalItems={totalItems}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
