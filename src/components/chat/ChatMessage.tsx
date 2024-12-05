import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
  isOwnMessage: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isOwnMessage }) => {
  return (
    <div
      className={`mb-4 flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isOwnMessage ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <div className="mb-1 text-sm font-medium">{message.senderName}</div>
        <div className="text-sm">{message.content}</div>
        <div className={`mt-1 text-xs ${isOwnMessage ? 'text-green-100' : 'text-gray-500'}`}>
          {format(new Date(message.timestamp), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;