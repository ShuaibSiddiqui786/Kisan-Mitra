import React from 'react';

const SUPPORTED_LANGUAGES = [
  { code: 'en-IN', name: 'English' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'mr-IN', name: 'Marathi' },
  { code: 'ta-IN', name: 'Tamil' },
  { code: 'te-IN', name: 'Telugu' }
];

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  return (
    <select
      value={language}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="border rounded px-2 py-1"
    >
      {SUPPORTED_LANGUAGES.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;