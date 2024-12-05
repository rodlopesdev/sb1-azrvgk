import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  FileText,
  BarChart,
  Palette,
  Map,
} from 'lucide-react';

const navigation = [
  { name: 'Resumo', href: '/admin', icon: LayoutDashboard },
  { name: 'Cargas', href: '/admin/cargas', icon: Package },
  { name: 'Central de Cargas', href: '/admin/central-cargas', icon: Map },
  { name: 'Motoristas', href: '/admin/motoristas', icon: Users },
  { name: 'Relatórios', href: '/admin/relatorios', icon: FileText },
  { name: 'Análises', href: '/admin/analises', icon: BarChart },
  { name: 'Estilos', href: '/admin/estilos', icon: Palette },
  { name: 'Configurações', href: '/admin/configuracoes', icon: Settings },
];

const AdminLayout: React.FC = () => {
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
              <div className="h-8 w-8 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm font-medium text-gray-700">João Silva</p>
                <p className="text-xs text-gray-500">Administrador</p>
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

export default AdminLayout;