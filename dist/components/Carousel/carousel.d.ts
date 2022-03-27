import { FC } from 'react';
interface CarouselItem {
    id: number;
    src: string;
    name: string;
}
interface CarouselProps {
    imgArr: CarouselItem[];
    timeout: number;
}
export declare const Carousel: FC<CarouselProps>;
export default Carousel;
