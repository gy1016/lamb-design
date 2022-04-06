import { ComponentMeta } from '@storybook/react';
import { Carousel } from './carousel';

export default {
  title: 'Example/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>;

const imgArr = [
  {
    id: 1,
    src: 'http://121.199.160.202/images/1.jpg',
    name: '1'
  },
  {
    id: 2,
    src: 'http://121.199.160.202/images/2.jpg',
    name: '2'
  },
  {
    id: 3,
    src: 'http://121.199.160.202/images/3.jpg',
    name: '3'
  }
  // {
  //   id: 4,
  //   src: 'http://121.199.160.202/images/4.jpg',
  //   name: '4'
  // },
  // {
  //   id: 5,
  //   src: 'http://121.199.160.202/images/5.jpg',
  //   name: '5'
  // }
];

export const SimpleCarousel = () => {
  return <Carousel imgArr={imgArr} timeout={2000} />;
};
