import {theme} from '../../core/theme';

import type {SlideType} from './types';

export const SLIDES: SlideType[] = [
  {
    title: 'Visualize',
    titlePosition: 'left',
    subtitle: 'Visualize Your Workflow',
    description: 'It helps visualize the actual workflow',
    backgroundColor: theme.palette.chart.blue[2],
  },
  {
    title: 'Balance',
    titlePosition: 'right',
    subtitle: 'Balance Your Work',
    description: 'It balances the work and workflow',
    backgroundColor: theme.palette.chart.green[2],
  },
  {
    title: 'Motivate',
    titlePosition: 'left',
    subtitle: 'Be a Leader',
    description: 'It encourages leadership roles at all levels',
    backgroundColor: theme.palette.chart.red[2],
  },
];
