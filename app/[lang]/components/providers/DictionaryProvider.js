'use client';

import { createContext, useContext, memo } from 'react';

const DictionaryContext = createContext(undefined);

function DictionaryProvider({ children, dict, lang }) {
  const value = { dict, lang };

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
}

export default memo(DictionaryProvider);
