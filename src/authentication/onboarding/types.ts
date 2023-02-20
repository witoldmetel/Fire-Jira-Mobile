import type {ImageRequireSource} from 'react-native';

export type SlideType = {
  title: string;
  titlePosition: 'left' | 'right';
  subtitle: string;
  description: string;
  backgroundColor?: string;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
};
