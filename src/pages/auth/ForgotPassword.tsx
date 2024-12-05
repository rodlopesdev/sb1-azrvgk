import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Loader2 } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AuthLayout
      title="Esqueceu sua senha?"
      subtitle="Digite seu e-mail para receber um link de recuperação"
    >
      {submitted ? (
        <div className="text-center">
          <div className="rounded-full bg-green-100 p-3 text-green-600 mx-auto w-fit">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Verifique seu e-mail</h3>
          <p className="mt-2 text-sm text-gray-600">
            Enviamos um link para você redefinir sua senha. Verifique sua caixa de entrada.
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-500"
          >
            Voltar para o login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Enviar link de recuperação'
            )}
          </button>

          <p className="text-center text-sm text-gray-600">
            Lembrou sua senha?{' '}
            <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
              Voltar para o login
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;