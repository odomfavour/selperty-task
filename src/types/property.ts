export interface AssetType {
  id: string;
  userId: string;
  tenantId: string;
  name: string;
}

export interface Location {
  id: string;
  userId: string;
  tenantId: string;
  country: number;
  state: string;
  city: string;
}

export interface Asset {
  id: string;
  userId: string;
  tenantId: string;
  name: string;
  totalSizeValue: number;
  totalSizeUnit: string;
  description: string;
  coordinateX: number;
  coordinateY: number;
  assetType: AssetType;
  location: Location;
}

export interface MediaUrl {
  url: string;
}

export interface Property {
  id: string;
  asset: Asset;
  mediaUrls: MediaUrl[];
  ecommerceProduct: Record<string, unknown>;
  userId: string;
  tenantId: string;
}
