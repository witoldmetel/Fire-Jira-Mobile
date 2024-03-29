import React, {createContext, ReactNode} from 'react';

import {theme, ThemeType} from '../core/theme';

type ThemeContextType = ThemeType;

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({children}: {children: ReactNode}) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export {ThemeContext, ThemeProvider};
