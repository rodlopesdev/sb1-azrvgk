import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Building2, Users, ArrowRight, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';

const benefits = [
  {
    role: 'Produtores',
    icon: Building2,
    description: 'Conecte-se diretamente com transportadoras confiáveis e acompanhe suas cargas em tempo real.',
    features: [
      'Acesso a uma ampla rede de transportadoras verificadas',
      'Rastreamento em tempo real das suas cargas',
      'Redução de custos logísticos',
      'Gestão simplificada de fretes',
    ],
  },
  {
    role: 'Transportadoras',
    icon: Truck,
    description: 'Encontre cargas disponíveis e otimize suas rotas para maximizar seus lucros.',
    features: [
      'Encontre cargas compatíveis com sua frota',
      'Reduza o tempo ocioso dos veículos',
      'Pagamento garantido e seguro',
      'Planejamento eficiente de rotas',
    ],
  },
  {
    role: 'Fornecedores',
    icon: Users,
    description: 'Gerencie seus produtos e entregas de forma eficiente, mantendo seus clientes satisfeitos.',
    features: [
      'Gestão centralizada de entregas',
      'Integração com produtores e transportadoras',
      'Análise de desempenho em tempo real',
      'Redução de custos operacionais',
    ],
  },
];

const stats = [
  { value: '15k+', label: 'Cargas transportadas', icon: Truck },
  { value: '98%', label: 'Entregas no prazo', icon: Clock },
  { value: '100%', label: 'Segurança garantida', icon: ShieldCheck },
  { value: 'R$2M+', label: 'Economia gerada', icon: DollarSign },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Features />

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Soluções para cada participante do agronegócio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nossa plataforma conecta todos os envolvidos na cadeia logística do agronegócio,
              proporcionando eficiência e transparência em todas as operações.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.role}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-6 inline-flex rounded-lg bg-green-100 p-3 text-green-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.role}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                  <ul className="mt-6 space-y-3">
                    {benefit.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/admin"
                    className="mt-8 inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <dt className="text-2xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-green-100">{stat.label}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pronto para revolucionar sua logística?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Junte-se a milhares de empresas que já estão transformando suas operações com o Celeiro Global.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/admin"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Começar Agora
              </Link>
              <Link
                to="/admin"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Falar com Especialista <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;