import { useState } from 'react';
import { Proposal } from '../types/chat';

const mockProposals: Proposal[] = [
  {
    id: '1',
    senderId: 'transporter-123',
    senderName: 'Transportadora ABC',
    price: 12000,
    deliveryDate: '2024-04-01',
    conditions: 'Pagamento em 30 dias após a entrega. Inclui seguro da carga.',
    timestamp: '2024-03-20T10:30:00',
    status: 'pending',
  },
  {
    id: '2',
    senderId: 'transporter-456',
    senderName: 'Transportadora XYZ',
    price: 11500,
    deliveryDate: '2024-04-02',
    conditions: 'Pagamento 50% antecipado. Combustível por conta do contratante.',
    timestamp: '2024-03-20T11:15:00',
    status: 'rejected',
  },
];

export const useProposals = (cargoId: string) => {
  const [proposals, setProposals] = useState<Proposal[]>(mockProposals);

  const addProposal = (proposal: Omit<Proposal, 'id' | 'timestamp' | 'status'>) => {
    const newProposal: Proposal = {
      ...proposal,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: 'pending',
    };
    setProposals((prev) => [...prev, newProposal]);
  };

  const updateProposalStatus = (proposalId: string, status: Proposal['status']) => {
    setProposals((prev) =>
      prev.map((p) => (p.id === proposalId ? { ...p, status } : p))
    );
  };

  return {
    proposals,
    addProposal,
    updateProposalStatus,
  };
};