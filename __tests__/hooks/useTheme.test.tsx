import React from 'react';
import {renderHook} from '@testing-library/react-hooks';

import {useTheme} from '@hooks/useTheme';
import {ThemeProvider} from '@contexts/ThemeContext';
import {theme} from '@theme/index';

// Define the type for the wrapper component
type WrapperProps = {
  children: React.ReactNode;
};

describe('useTheme', () => {
  it('should throw an error if not used inside ThemeProvider', () => {
    const {result} = renderHook(() => useTheme());

    expect(result.error).toEqual(new Error('Theme context must be use inside ThemeProvider'));
  });

  it('should return the theme context when used inside ThemeProvider', () => {
    const {result} = renderHook(() => useTheme(), {
      wrapper: ({children}: WrapperProps) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(result.current).toBe(theme);
  });
});
