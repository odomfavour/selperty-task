import axiosInstance from './axiosInstance';

const TENANT_ID = '2b6c4561-7893-4d5d-a1e6-33084f02a8c2';

export const fetchPropertyList = async () => {
  const response = await axiosInstance.post('/product/list', {
    tenantId: TENANT_ID,
  });
  return response.data;
};

export const fetchPropertyById = async (id: string) => {
  const response = await axiosInstance.post('/product/get', {
    tenantId: TENANT_ID,
    id,
  });
  return response.data;
};
