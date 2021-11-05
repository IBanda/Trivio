import {ImageSourcePropType} from 'react-native';

interface Category {
  title: string;
  icon: ImageSourcePropType;
  gradientColors: string[];
}

export const categories: Category[] = [
  {
    title: 'Art',
    icon: require('../images/paint-kit-front-gradient.png'),
    gradientColors: ['#FF5C58', '#FE8F8F', '#FCD2D1'],
  },
  {
    title: 'Books',
    icon: require('../images/notebook-front-gradient.png'),
    gradientColors: ['#14279B', '#3D56B2', '#5C7AEA'],
  },
  {
    title: 'Celebrities',
    icon: require('../images/boy-front-gradient.png'),
    gradientColors: ['#3E065F', '#700B97', '#8E05C2'],
  },
  {
    title: 'Film',
    icon: require('../images/video-camera-front-gradient.png'),
    gradientColors: ['#38A3A5', '#57CC99', '#80ED99'],
  },
  {
    title: 'Music',
    icon: require('../images/music-front-gradient.png'),
    gradientColors: ['#C3BA85', '#DAD5AB', '#F0F0CB'],
  },
];
