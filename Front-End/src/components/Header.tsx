import { Search, ShoppingCart, User, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TopBanner from './TopBanner';
import { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false); // State for desktop dropdown
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false); // State for mobile categories

  // Ref for the categories dropdown to detect clicks outside
  const categoriesDropdownRef = useRef(null);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(event.target)) {
        setIsCategoriesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categoriesDropdownRef]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close mobile categories if main menu is closed
    if (isMobileMenuOpen) {
      setIsMobileCategoriesOpen(false);
    }
  };

  const toggleDesktopCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const toggleMobileCategories = () => {
    setIsMobileCategoriesOpen(!isMobileCategoriesOpen);
  };

  const categories = [
    { name: 'Cosmetics and Personal Products', path: '/categories/cosmetics' },
    { name: 'Clothes', path: '/categories/clothes' },
    { name: 'Made In Rwanda', path: '/categories/made-in-rwanda' },
    { name: 'Household Products', path: '/categories/household' },
    { name: 'Shoes', path: '/categories/shoes' },
  ];

  return (
    <>
      <TopBanner />
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center space-x-2">
                <img
                  src="/wxc.png"
                  alt="Rwanda Marketplace Logo"
                  className="h-12 w-auto"
                />
              </div>
            </Link>

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-purple-600 transition-colors">Products</Link>

              {/* Categories Dropdown for Desktop (Click-to-toggle) */}
              <div
                className="relative"
                ref={categoriesDropdownRef} // Attach ref here
              >
                <button
                  className="flex items-center text-gray-700 hover:text-purple-600 transition-colors focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isCategoriesDropdownOpen}
                  onClick={toggleDesktopCategoriesDropdown} // Click handler
                >
                  Categories <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCategoriesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-600 transition-colors"
                          onClick={() => setIsCategoriesDropdownOpen(false)} // Close dropdown on link click
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about-us" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none outline-none text-sm"
                />
              </div>
              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full pb-4">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMobileMenu}>Products</Link>

              {/* Mobile Categories (Expandable/Accordion) */}
              <div className="w-full text-center">
                <button
                  className="flex justify-center items-center w-full py-2 text-gray-700 hover:text-purple-600 transition-colors focus:outline-none"
                  onClick={toggleMobileCategories}
                >
                  Categories {isMobileCategoriesOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
                {isMobileCategoriesOpen && (
                  <div className="mt-2 flex flex-col items-center space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors w-full px-4 py-1"
                        onClick={() => {
                          toggleMobileMenu(); // Close main menu
                          setIsMobileCategoriesOpen(false); // Close mobile categories
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about-us" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMobileMenu}>About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={toggleMobileMenu}>Contact</Link>
              {/* Optional: Mobile search input */}
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-11/12">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none outline-none text-sm w-full"
                />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;