import {theme} from '../../core/theme';
import dimensions from '../../utils/dimensions';
import type {SlideType} from './types';

export const SLIDE_HEIGHT = 0.65 * dimensions.screenHeight;
export const SLIDE_WIDTH = dimensions.screenWidth;
export const BORDER_RADIUS = 75;

export const SLIDES: SlideType[] = [
  {
    title: 'Visualize',
    titlePosition: 'left',
    subtitle: 'Visualize Your Workflow',
    description: 'It helps visualize the actual workflow',
    backgroundColor: theme.palette.chart.blue[2],
    picture: {
      src: require('../../../assets/images/onboarding_1.png'),
      width: 810,
      height: 1247,
    },
  },
  {
    title: 'Balance',
    titlePosition: 'right',
    subtitle: 'Balance Your Work',
    description: 'It balances the work and workflow',
    backgroundColor: theme.palette.chart.green[2],
    picture: {
      src: require('../../../assets/images/onboarding_2.png'),
      width: 972,
      height: 1347,
    },
  },
  {
    title: 'Motivate',
    titlePosition: 'left',
    subtitle: 'Be a Leader',
    description: 'It encourages leadership roles at all levels',
    backgroundColor: theme.palette.chart.red[2],
    picture: {
      src: require('../../../assets/images/onboarding_3.png'),
      width: 765,
      height: 1291,
    },
  },
];
