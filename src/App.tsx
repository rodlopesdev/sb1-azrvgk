import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from './components/common/LoadingSpinner';
import AdminLayout from './components/admin/AdminLayout';
import CustomerLayout from './components/customer/CustomerLayout';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Marketplace from './pages/marketplace/Marketplace';
import { CartProvider } from './contexts/CartContext';

// Lazy load pages
const Transport = React.lazy(() => import('./pages/Transport'));
const CargoDetails = React.lazy(() => import('./pages/CargoDetails'));
const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const AdminPanel = React.lazy(() => import('./pages/admin/AdminPanel'));
const CargoForm = React.lazy(() => import('./pages/admin/CargoForm'));
const StyleGuide = React.lazy(() => import('./pages/admin/StyleGuide'));
const CargoCenter = React.lazy(() => import('./pages/admin/CargoCenter'));
const ProductDetails = React.lazy(() => import('./pages/marketplace/ProductDetails'));
const Cart = React.lazy(() => import('./pages/marketplace/Cart'));
const Checkout = React.lazy(() => import('./pages/marketplace/Checkout'));
const CustomerDashboard = React.lazy(() => import('./pages/customer/Dashboard'));
const CustomerOrders = React.lazy(() => import('./pages/customer/Orders'));

function App() {
  return (
    <CartProvider>
      <div className="flex h-screen flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/product/:id" element={<ProductDetails />} />
              <Route path="/marketplace/cart" element={<Cart />} />
              <Route path="/marketplace/checkout" element={<Checkout />} />
              <Route path="/cargo/:id" element={<CargoDetails />} />
              
              {/* Customer routes */}
              <Route path="/customer" element={<CustomerLayout />}>
                <Route index element={<CustomerDashboard />} />
                <Route path="orders" element={<CustomerOrders />} />
              </Route>

              {/* Admin routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="cargas" element={<AdminPanel />} />
                <Route path="central-cargas" element={<CargoCenter />} />
                <Route path="cargo/new" element={<CargoForm />} />
                <Route path="cargo/:id/edit" element={<CargoForm />} />
                <Route path="estilos" element={<StyleGuide />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;