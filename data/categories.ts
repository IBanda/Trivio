import {ImageSourcePropType} from 'react-native';

export interface Category {
  id: number;
  title: string;
  icon: ImageSourcePropType;
  gradientColors: string[];
}

export const categories: Category[] = [
  {
    id: 25,
    title: 'Art',
    icon: require('../images/paint-kit-front-color.png'),
    gradientColors: ['#FF5C58', '#FE8F8F', '#FCD2D1'],
  },
  {
    id: 10,
    title: 'Books',
    icon: require('../images/notebook-front-color.png'),
    gradientColors: ['#14279B', '#3D56B2', '#5C7AEA'],
  },
  {
    id: 26,
    title: 'Celebrities',
    icon: require('../images/boy-front-color.png'),
    gradientColors: ['#3E065F', '#700B97', '#8E05C2'],
  },
  {
    id: 11,
    title: 'Film',
    icon: require('../images/video-camera-front-color.png'),
    gradientColors: ['#38A3A5', '#57CC99', '#80ED99'],
  },
  {
    id: 12,
    title: 'Music',
    icon: require('../images/music-front-color.png'),
    gradientColors: ['#C3BA85', '#DAD5AB', '#F0F0CB'],
  },
];
