import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
