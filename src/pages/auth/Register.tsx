import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Building, Loader2 } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Comece a usar a plataforma gratuitamente"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome completo
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
              placeholder="João Silva"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Empresa
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Building className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
              placeholder="Nome da empresa"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            'Criar conta'
          )}
        </button>

        <p className="text-center text-sm text-gray-600">
          Já tem uma conta?{' '}
          <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
            Entre aqui
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;