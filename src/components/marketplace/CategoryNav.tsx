import React from 'react';
import { Tractor, Leaf, Package, Wrench, Droplet, Sun } from 'lucide-react';

const categories = [
  { name: 'Máquinas', icon: Tractor },
  { name: 'Sementes', icon: Leaf },
  { name: 'Fertilizantes', icon: Package },
  { name: 'Ferramentas', icon: Wrench },
  { name: 'Irrigação', icon: Droplet },
  { name: 'Energia Solar', icon: Sun },
];

const CategoryNav: React.FC = () => {
  return (
    <nav className="border-b border-t border-gray-200 bg-white">
      <div className="flex items-center justify-between overflow-x-auto py-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex min-w-[120px] flex-col items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
          >
            <category.icon className="mb-1 h-6 w-6" />
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;