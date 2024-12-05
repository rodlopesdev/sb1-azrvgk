import { useState, useCallback } from 'react';
import { Message } from '../types/chat';

export const useChatMessages = (cargoId: string) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: 'producer-456',
      senderName: 'João Silva',
      content: 'Olá! Tudo bem? Vi que você tem interesse na carga.',
      timestamp: new Date().toISOString(),
      type: 'text',
    },
  ]);

  const sendMessage = useCallback((content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'transporter-123',
      senderName: 'Transportadora ABC',
      content,
      timestamp: new Date().toISOString(),
      type: 'text',
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  return { messages, sendMessage };
};