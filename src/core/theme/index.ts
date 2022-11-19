import {breakpoints} from './breakpoints';
import {palette} from './palette';
import {spacing} from './spacing';
import {typography} from './typography';

export type ThemeType = {
  breakpoints: typeof breakpoints;
  palette: typeof palette;
  spacing: typeof spacing;
  typography: typeof typography;
};

export const theme: ThemeType = {
  breakpoints,
  palette,
  spacing,
  typography,
};
