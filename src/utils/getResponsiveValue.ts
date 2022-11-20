import type {ScaledSize} from 'react-native';
import type {ThemeType} from '../core/theme';

type getResponsiveValueType = {
  value: number;
  dimensions: ScaledSize;
  theme: ThemeType;
};

type getBreakpointForScreenSizeType = Omit<getResponsiveValueType, 'value'>;

const getBreakpointForScreenSize = ({theme, dimensions}: getBreakpointForScreenSizeType) => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort((valA, valB) => {
    return valA[1] - valB[1];
  });

  return sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
    if (dimensions.width >= minWidth) {
      return breakpoint;
    }

    return acc;
  }, null);
};

export const getResponsiveValue = ({value, dimensions, theme}: getResponsiveValueType): number => {
  if (typeof value === 'object') {
    return value[getBreakpointForScreenSize({theme, dimensions})];
  }

  return value;
};
