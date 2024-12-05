import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MapPin, Package, Truck, Clock, Phone, Plus } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import Chat from '../components/chat/Chat';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useCargoData } from '../hooks/useCargoData';
import { useProposals } from '../hooks/useProposals';
import ProposalList from '../components/cargo/ProposalList';
import ProposalForm from '../components/cargo/ProposalForm';

const CargoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cargo, loading, error } = useCargoData(id);
  const { proposals, addProposal, updateProposalStatus } = useProposals(id || '');
  const [showProposalForm, setShowProposalForm] = useState(false);
  const isSupplier = true; // TODO: Get from auth context

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !cargo) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-lg text-gray-600">{error || 'Carga não encontrada'}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Cargo Information */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-6 text-2xl font-bold">Detalhes da Carga #{cargo.id}</h1>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-medium text-gray-900">Rota</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>Origem: {cargo.origin.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>Destino: {cargo.destination.name}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-gray-900">Especificações</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-gray-400" />
                  <span>
                    {cargo.weight}t - {cargo.specifications.dimensions}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-gray-400" />
                  <span>{cargo.specifications.transportType}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-gray-900">Prazos</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>
                    Disponível em:{' '}
                    {format(new Date(cargo.availableDate), "dd 'de' MMMM 'de' yyyy", {
                      locale: ptBR,
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>Tempo estimado: {cargo.estimatedDeliveryTime}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-gray-900">Contato</h3>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>
                  {cargo.contact.name} - {cargo.contact.phone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat and Proposals */}
        <div className="rounded-lg bg-white shadow-lg">
          <Tabs.Root defaultValue="chat" className="h-[600px]">
            <Tabs.List className="flex border-b">
              <Tabs.Trigger
                value="chat"
                className="flex-1 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:border-green-500 data-[state=active]:text-green-600"
              >
                Chat
              </Tabs.Trigger>
              <Tabs.Trigger
                value="proposals"
                className="flex-1 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:border-green-500 data-[state=active]:text-green-600"
              >
                Propostas
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="chat" className="h-[calc(100%-41px)]">
              <Chat cargoId={cargo.id} />
            </Tabs.Content>

            <Tabs.Content value="proposals" className="h-[calc(100%-41px)] overflow-y-auto">
              {showProposalForm ? (
                <ProposalForm
                  onSubmit={(proposal) => {
                    addProposal({
                      ...proposal,
                      senderId: 'supplier-123',
                      senderName: 'Fornecedor ABC',
                    });
                    setShowProposalForm(false);
                  }}
                />
              ) : (
                <>
                  {isSupplier && (
                    <div className="border-b p-4">
                      <button
                        onClick={() => setShowProposalForm(true)}
                        className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Nova Proposta
                      </button>
                    </div>
                  )}
                  <ProposalList
                    proposals={proposals}
                    onAcceptProposal={(id) => updateProposalStatus(id, 'accepted')}
                    onRejectProposal={(id) => updateProposalStatus(id, 'rejected')}
                    isSupplier={isSupplier}
                  />
                </>
              )}
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default CargoDetails;