
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Rwanda Marketplace</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-purple transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-purple transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-purple transition-colors">Contact</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-transparent border-none outline-none text-sm"
              />
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
