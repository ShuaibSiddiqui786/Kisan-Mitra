import React from 'react';
import { ChatMessage } from '../../types';

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  isLoading, 
  error, 
  messagesEndRef 
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-lg ${
              message.sender === 'user'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
            Thinking...
          </div>
        </div>
      )}
      {error && (
        <div className="flex justify-center">
          <div className="bg-red-100 text-red-600 p-3 rounded-lg">
            {error}
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;