import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Check, X, Clock } from 'lucide-react';
import { Proposal } from '../../types/chat';

interface ProposalListProps {
  proposals: Proposal[];
  onAcceptProposal?: (proposalId: string) => void;
  onRejectProposal?: (proposalId: string) => void;
  isSupplier?: boolean;
}

const ProposalList: React.FC<ProposalListProps> = ({ 
  proposals, 
  onAcceptProposal,
  onRejectProposal,
  isSupplier = false 
}) => {
  return (
    <div className="space-y-4 p-4">
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{proposal.senderName}</span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    proposal.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : proposal.status === 'accepted'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {proposal.status === 'pending'
                    ? 'Aguardando'
                    : proposal.status === 'accepted'
                    ? 'Aceita'
                    : 'Recusada'}
                </span>
              </div>
              <div className="mt-2 space-y-2">
                <p className="text-2xl font-semibold text-gray-900">
                  R$ {proposal.price.toLocaleString('pt-BR')}
                </p>
                <p className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-1 h-4 w-4" />
                  Entrega prevista: {format(new Date(proposal.deliveryDate), "dd 'de' MMMM", {
                    locale: ptBR,
                  })}
                </p>
                <p className="text-sm text-gray-700">{proposal.conditions}</p>
              </div>
            </div>
            {isSupplier && proposal.status === 'pending' && (
              <div className="flex space-x-2">
                <button
                  onClick={() => onAcceptProposal?.(proposal.id)}
                  className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200"
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onRejectProposal?.(proposal.id)}
                  className="rounded-full bg-red-100 p-2 text-red-600 hover:bg-red-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Enviada em {format(new Date(proposal.timestamp), "dd/MM/yyyy 'às' HH:mm", {
              locale: ptBR,
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProposalList;