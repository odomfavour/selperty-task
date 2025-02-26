import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for the menu

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 py-5 h-[70px] bg-white border-[#D9D9D9] transition-all ${
        isScrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          {/* Navigation Links aligned to the left */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-gray-900">
              <img src="/images/logo.svg" alt="company-logo" />
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="#" className="pri-btn">
              Signup
            </Link>
            <Link to="#" className="plain-btn">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col bg-white shadow-md mt-4 py-4 absolute w-full left-0 px-5">
            <Link
              to="#"
              className="mt-3 pri-btn text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
            <Link
              to="#"
              className="mt-2 plain-btn text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
