import React from 'react';
import { Menu, X, Tractor, Truck, ShoppingCart, Building2, LayoutDashboard, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navigation = [
    { name: 'Banco Digital', href: '/banking', icon: Building2 },
    { name: 'Transporte', href: '/transport', icon: Truck },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Painel Admin', href: '/admin', icon: LayoutDashboard },
    { name: 'Painel Cliente', href: '/customer', icon: User },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Celeiro Global</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/marketplace/cart"
              className="relative ml-4 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-medium text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="ml-8 inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-700">
              Entrar
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                to="/marketplace/cart"
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Carrinho ({totalItems})</span>
              </Link>
              <button className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-700">
                Entrar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;