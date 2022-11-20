import React from 'react';
import {Dimensions, View} from 'react-native';
import {useTheme} from '../../../hooks/useTheme';
import {getResponsiveValue} from '../../../utils/getResponsiveValue';

type BoxProps = {
  children: React.ReactNode;

  padding?: any;
  margin?: any;
  backgroundColor?: any;
};

export const Box = ({padding, margin, backgroundColor, children, ...rest}: BoxProps) => {
  const theme = useTheme();
  const dimensions = Dimensions.get('window');

  return (
    <View
      style={{
        margin: theme.spacing[getResponsiveValue({value: margin, dimensions, theme})],
        padding: theme.spacing[getResponsiveValue({value: padding, dimensions, theme})],
        backgroundColor:
          theme.palette[getResponsiveValue({value: backgroundColor, dimensions, theme})],
      }}
      {...rest}>
      {children}
    </View>
  );
};
