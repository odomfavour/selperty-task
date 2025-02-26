import Loader from '@/components/general/Loader';
import Filters from '@/components/listings/Filters';
import Pagination from '@/components/listings/Pagination';
import PropertyCard from '@/components/listings/PropertyCard';
import { useProperty } from '@/hooks/useProperty';
import { Property } from '@/types/property';

const ListingsPage = () => {
  const { data, isLoading, error } = useProperty();
  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <p>Error fetching products</p>;
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="pt-[36px] mb-5">
          <h1 className="text-2xl font-bold mb-6">Listings</h1>
          <Filters />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {data?.realEstateProducts?.map((property: Property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <Pagination
            totalItems={data?.meta.total}
            currentPage={data?.meta.currentPage}
            totalPages={data?.meta.numberOfPages}
            onPageChange={(page) => console.log('Go to page:', page)}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
