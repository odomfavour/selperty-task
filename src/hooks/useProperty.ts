import { useQuery } from '@tanstack/react-query';
import { fetchPropertyById, fetchPropertyList } from '@/api/propertyApi';

export const useProperty = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchPropertyList,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePropertyById = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchPropertyById(id),
    enabled: !!id,
  });
};
