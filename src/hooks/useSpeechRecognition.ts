import { useState, useEffect } from 'react';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export const useSpeechRecognition = (language: string = 'en-IN') => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognition);
    }
  }, [language]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
    hasSupport: !!window.webkitSpeechRecognition
  };
};