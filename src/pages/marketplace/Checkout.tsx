import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Truck, MapPin, Building2, ArrowLeft, Loader2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

type Step = 'address' | 'shipping' | 'payment' | 'confirmation';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<Step>('address');
  const [loading, setLoading] = useState(false);

  const steps = [
    { id: 'address', name: 'Endereço', icon: MapPin },
    { id: 'shipping', name: 'Entrega', icon: Truck },
    { id: 'payment', name: 'Pagamento', icon: CreditCard },
    { id: 'confirmation', name: 'Confirmação', icon: Check },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (currentStep === 'address') setCurrentStep('shipping');
    else if (currentStep === 'shipping') setCurrentStep('payment');
    else if (currentStep === 'payment') {
      setCurrentStep('confirmation');
      clearCart();
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          <button
            onClick={() => navigate('/marketplace/cart')}
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Carrinho
          </button>
        </div>

        {/* Steps */}
        <nav aria-label="Progress" className="mt-8">
          <ol role="list" className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={`relative ${stepIdx !== steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div className="flex items-center justify-center">
                  <span
                    className={`flex items-center ${
                      stepIdx !== steps.length - 1 ? 'w-full' : ''
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        step.id === currentStep
                          ? 'border-2 border-green-600 bg-white'
                          : steps.findIndex(s => s.id === currentStep) > stepIdx
                          ? 'bg-green-600'
                          : 'bg-gray-100'
                      }`}
                    >
                      <step.icon
                        className={`h-5 w-5 ${
                          step.id === currentStep
                            ? 'text-green-600'
                            : steps.findIndex(s => s.id === currentStep) > stepIdx
                            ? 'text-white'
                            : 'text-gray-400'
                        }`}
                      />
                    </span>
                    {stepIdx !== steps.length - 1 && (
                      <span
                        className={`ml-4 h-0.5 w-full ${
                          steps.findIndex(s => s.id === currentStep) > stepIdx
                            ? 'bg-green-600'
                            : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </span>
                </div>
                <span className="absolute -bottom-6 w-full text-center text-sm font-medium text-gray-500">
                  {step.name}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {currentStep === 'confirmation' ? (
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="mt-4 text-lg font-medium text-gray-900">
                  Pedido Confirmado!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Seu pedido foi realizado com sucesso. Em breve você receberá um e-mail com os
                  detalhes da compra.
                </p>
                <button
                  onClick={() => navigate('/marketplace')}
                  className="mt-6 inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  Continuar Comprando
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 'address' && (
                  <>
                    <div className="rounded-lg border border-gray-200 bg-white p-6">
                      <h2 className="flex items-center text-lg font-medium text-gray-900">
                        <Building2 className="mr-2 h-5 w-5 text-gray-400" />
                        Endereço de Entrega
                      </h2>
                      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            CEP
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Número
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Endereço
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Bairro
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Complemento
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 'shipping' && (
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <h2 className="flex items-center text-lg font-medium text-gray-900">
                      <Truck className="mr-2 h-5 w-5 text-gray-400" />
                      Método de Entrega
                    </h2>
                    <div className="mt-6 space-y-4">
                      <label className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            className="h-4 w-4 text-green-600 focus:ring-green-500"
                            required
                          />
                          <span className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">
                              Entrega Express
                            </span>
                            <span className="block text-sm text-gray-500">
                              2-3 dias úteis
                            </span>
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">R$ 25,00</span>
                      </label>
                      <label className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            className="h-4 w-4 text-green-600 focus:ring-green-500"
                            required
                          />
                          <span className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">
                              Entrega Padrão
                            </span>
                            <span className="block text-sm text-gray-500">
                              4-7 dias úteis
                            </span>
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">Grátis</span>
                      </label>
                    </div>
                  </div>
                )}

                {currentStep === 'payment' && (
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <h2 className="flex items-center text-lg font-medium text-gray-900">
                      <CreditCard className="mr-2 h-5 w-5 text-gray-400" />
                      Método de Pagamento
                    </h2>
                    <div className="mt-6 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Número do Cartão
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Data de Validade
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Nome no Cartão
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                  ) : currentStep === 'payment' ? (
                    'Finalizar Pedido'
                  ) : (
                    'Continuar'
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-medium text-gray-900">Resumo do Pedido</h2>
              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Qtd: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      R$ {(item.product.price * item.quantity).toLocaleString('pt-BR')}
                    </p>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-xl font-bold text-gray-900">
                      R$ {totalPrice.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;