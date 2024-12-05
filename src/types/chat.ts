export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  type: 'text' | 'proposal';
}

export interface Proposal {
  id: string;
  senderId: string;
  senderName: string;
  price: number;
  deliveryDate: string;
  conditions: string;
  timestamp: string;
  status: 'pending' | 'accepted' | 'rejected';
}