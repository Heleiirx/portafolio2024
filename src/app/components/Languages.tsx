import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Language {
  id: number;
  name: {
    en: string;
    es: string;
  };
  level: {
    en: string;
    es: string;
  };
}

interface LanguagesProps {
  languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  const { t, language: currentLanguage } = useLanguage(); // Renamed to avoid conflict

  return (
    <div className="w-full">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black uppercase tracking-wider">{t('education.languages')}</h2>

      <div className="space-y-4">
        {languages.map((langItem) => ( // Renamed from 'language' to 'langItem'
          <div key={langItem.id} className="flex items-center gap-3">
            <span className="text-purple-500 text-lg">★</span>
            <div className="flex flex-col">
              <span className="font-bold text-black text-base">
                {langItem.name[currentLanguage]}
              </span>
              <span className="text-gray-600 text-sm">
                —{langItem.level[currentLanguage]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;