import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  ...PublicRoutes,
  { path: '*', element: <NotFound /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
