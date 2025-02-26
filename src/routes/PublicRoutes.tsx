import PublicLayout from '@/layouts/PublicLayout';
import ListingDetailsPage from '@/pages/ListingDetailsPage';
import ListingsPage from '@/pages/ListingsPage';

const PublicRoutes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <ListingsPage /> },
      { path: 'listings/:listingId', element: <ListingDetailsPage /> },
    ],
  },
];

export default PublicRoutes;
