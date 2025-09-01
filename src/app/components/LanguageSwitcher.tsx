'use client';

import { Button } from '@nextui-org/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant={language === 'en' ? 'solid' : 'ghost'}
        onClick={() => setLanguage('en')}
        className="min-w-unit-12"
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={language === 'es' ? 'solid' : 'ghost'}
        onClick={() => setLanguage('es')}
        className="min-w-unit-12"
      >
        ES
      </Button>
    </div>
  );
}