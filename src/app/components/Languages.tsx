import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Language {
  id: number;
  name: string;
  level: string;
}

interface LanguagesProps {
  languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  const {t, language} = useLanguage();

  return (
    <div className="w-full">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black uppercase tracking-wider">{t('education.languages')}</h2>
      
      <div className="space-y-4">
        {languages.map((language) => (
          <div key={language.id} className="flex items-center gap-3">
            <span className="text-purple-500 text-lg">★</span>
            <div className="flex flex-col">
              <span className="font-bold text-black text-base">{language.name}</span>
              <span className="text-gray-600 text-sm">—{language.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;