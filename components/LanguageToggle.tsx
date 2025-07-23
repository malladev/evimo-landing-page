'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="font-medium transition-colors hover:bg-primary/10"
    >
      {language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
    </Button>
  );
}