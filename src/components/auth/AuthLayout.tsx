import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor } from 'lucide-react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Celeiro Global</span>
            </Link>
            <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{subtitle}</p>
          </div>

          <div className="mt-10">{children}</div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="Agricultura moderna"
        />
      </div>
    </div>
  );
};

export default AuthLayout;