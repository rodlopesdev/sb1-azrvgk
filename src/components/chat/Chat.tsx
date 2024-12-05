import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChatMessages } from '../../hooks/useChatMessages';

interface ChatProps {
  cargoId: string;
}

const Chat: React.FC<ChatProps> = ({ cargoId }) => {
  const { messages, sendMessage } = useChatMessages(cargoId);
  const currentUserId = 'transporter-123';

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isOwnMessage={message.senderId === currentUserId}
          />
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default React.memo(Chat);