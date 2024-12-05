import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  Bell,
  Settings,
  User,
} from 'lucide-react';

const navigation = [
  { name: 'Resumo', href: '/customer', icon: LayoutDashboard },
  { name: 'Meus Pedidos', href: '/customer/orders', icon: ShoppingBag },
  { name: 'Lista de Desejos', href: '/customer/wishlist', icon: Heart },
  { name: 'Notificações', href: '/customer/notifications', icon: Bell },
  { name: 'Configurações', href: '/customer/settings', icon: Settings },
];

const CustomerLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 flex-none border-r border-gray-200 bg-white">
        <nav className="flex h-full flex-col">
          <div className="space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-auto border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-200">
                <User className="h-full w-full p-1.5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">João Silva</p>
                <p className="text-xs text-gray-500">Cliente desde 2024</p>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;