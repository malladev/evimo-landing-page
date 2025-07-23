'use client';

import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemeProvider>
  );
}