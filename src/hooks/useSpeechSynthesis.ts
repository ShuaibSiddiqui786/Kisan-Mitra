export const useSpeechSynthesis = () => {
  const speak = (text: string, language: string = 'en-IN') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      window.speechSynthesis.speak(utterance);
    }
  };

  return {
    speak,
    hasSupport: 'speechSynthesis' in window
  };
};