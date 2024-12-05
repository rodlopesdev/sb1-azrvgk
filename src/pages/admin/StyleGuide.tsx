import React from 'react';
import { cn } from '../../lib/utils';

const colors = [
  { name: 'Primary', shades: [
    { name: 'green-50', hex: '#F0FDF4' },
    { name: 'green-100', hex: '#DCFCE7' },
    { name: 'green-500', hex: '#22C55E' },
    { name: 'green-600', hex: '#16A34A' },
    { name: 'green-700', hex: '#15803D' },
  ]},
  { name: 'Gray', shades: [
    { name: 'gray-50', hex: '#F9FAFB' },
    { name: 'gray-100', hex: '#F3F4F6' },
    { name: 'gray-500', hex: '#6B7280' },
    { name: 'gray-700', hex: '#374151' },
    { name: 'gray-900', hex: '#111827' },
  ]},
  { name: 'Status', shades: [
    { name: 'yellow-100', hex: '#FEF9C3', label: 'Warning Light' },
    { name: 'yellow-600', hex: '#CA8A04', label: 'Warning' },
    { name: 'red-100', hex: '#FEE2E2', label: 'Error Light' },
    { name: 'red-600', hex: '#DC2626', label: 'Error' },
  ]},
];

const typography = [
  { name: 'Display', className: 'text-4xl font-bold', sample: 'Display Text' },
  { name: 'Heading 1', className: 'text-2xl font-bold', sample: 'Heading 1' },
  { name: 'Heading 2', className: 'text-xl font-semibold', sample: 'Heading 2' },
  { name: 'Heading 3', className: 'text-lg font-medium', sample: 'Heading 3' },
  { name: 'Body Large', className: 'text-base', sample: 'Body text large' },
  { name: 'Body', className: 'text-sm', sample: 'Body text default' },
  { name: 'Small', className: 'text-xs', sample: 'Small text' },
];

const spacing = [
  { name: 'xs', value: '0.5rem', className: 'w-2 h-2' },
  { name: 'sm', value: '0.75rem', className: 'w-3 h-3' },
  { name: 'base', value: '1rem', className: 'w-4 h-4' },
  { name: 'lg', value: '1.5rem', className: 'w-6 h-6' },
  { name: 'xl', value: '2rem', className: 'w-8 h-8' },
  { name: '2xl', value: '3rem', className: 'w-12 h-12' },
];

const StyleGuide: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Guia de Estilos</h1>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Cores</h2>
        <div className="space-y-8">
          {colors.map((colorGroup) => (
            <div key={colorGroup.name}>
              <h3 className="mb-3 text-lg font-medium text-gray-700">{colorGroup.name}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {colorGroup.shades.map((shade) => (
                  <div key={shade.name} className="space-y-2">
                    <div
                      className={cn(
                        'h-16 w-full rounded-lg border border-gray-200',
                        `bg-${shade.name}`
                      )}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {shade.label || shade.name}
                      </p>
                      <p className="text-xs text-gray-500">{shade.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Tipografia</h2>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="divide-y divide-gray-200">
            {typography.map((type) => (
              <div key={type.name} className="flex items-center gap-8 p-4">
                <div className="w-32">
                  <p className="text-sm font-medium text-gray-700">{type.name}</p>
                  <p className="text-xs text-gray-500">{type.className}</p>
                </div>
                <div className={cn(type.className, 'text-gray-900')}>{type.sample}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Espaçamentos</h2>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="divide-y divide-gray-200">
            {spacing.map((space) => (
              <div key={space.name} className="flex items-center gap-8 p-4">
                <div className="w-32">
                  <p className="text-sm font-medium text-gray-700">{space.name}</p>
                  <p className="text-xs text-gray-500">{space.value}</p>
                </div>
                <div className={cn(space.className, 'bg-green-200')} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Componentes</h2>
        
        {/* Buttons */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-gray-700">Botões</h3>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              Primário
            </button>
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Secundário
            </button>
            <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Perigo
            </button>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-medium text-gray-700">Formulários</h3>
          <div className="grid max-w-md gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Input Padrão</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                placeholder="Digite algo..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select</label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500">
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Status Badges */}
        <div>
          <h3 className="mb-3 text-lg font-medium text-gray-700">Badges de Status</h3>
          <div className="flex gap-4">
            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
              Disponível
            </span>
            <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
              Em Trânsito
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
              Concluída
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;