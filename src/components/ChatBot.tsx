import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Send, Volume2, VolumeX } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useChatbot } from '../hooks/useChatbot';
import { ChatMessage } from '../types';
import MessageList from './chat/MessageList';
import LanguageSelector from './chat/LanguageSelector';

const ChatBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en-IN');
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { transcript, isListening, startListening, stopListening, hasSupport } = 
    useSpeechRecognition(language);
  const { speak, hasSupport: hasSpeechSupport } = useSpeechSynthesis();
  const { messages, isLoading, error, sendMessage } = useChatbot();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput('');
    
    await sendMessage(userMessage, language);
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="bg-white p-4 border-b flex justify-between items-center">
        <LanguageSelector language={language} onLanguageChange={setLanguage} />
        <button
          onClick={() => setIsSpeechEnabled(!isSpeechEnabled)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isSpeechEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>

      <MessageList 
        messages={messages} 
        isLoading={isLoading} 
        error={error} 
        messagesEndRef={messagesEndRef}
      />

      <div className="border-t p-4 bg-white">
        <div className="flex items-center gap-2">
          {hasSupport && (
            <button
              onClick={toggleListening}
              className={`p-2 rounded-full ${
                isListening ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
          )}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-green-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="p-2 bg-green-600 text-white rounded-full disabled:bg-green-400"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;