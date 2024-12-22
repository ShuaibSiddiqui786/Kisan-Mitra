import { useState } from 'react';
import { getChatResponse } from '../services/chatService';
import { ChatMessage } from '../types';

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (message: string, language: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      setMessages(prev => [...prev, { text: message, sender: 'user' }]);
      
      const response = await getChatResponse(message, language);
      
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Chatbot error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => setMessages([]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages
  };
};