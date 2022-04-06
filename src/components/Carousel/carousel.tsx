import React, { FC, useCallback, useLayoutEffect, useRef } from 'react';

interface CarouselItem {
  id: number;
  src: string;
  name: string;
}
interface CarouselProps {
  imgArr: CarouselItem[];
  timeout: number;
}

export const Carousel: FC<CarouselProps> = (props) => {
  const { imgArr, timeout } = props;

  const firstLi = useRef<any>(null);
  const lastLi = useRef<any>(null);
  const timer = useRef<any>(null);

  const ulRef = useRef<HTMLUListElement>(null);
  const preRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    firstLi.current = ulRef.current!.children[0];
    ulRef.current!.style.transition = '0.4s';
    ulRef.current!.style.transform = `translateX(${-100 / imgArr.length}%)`;
    const tmp = setTimeout(() => {
      ulRef.current!.appendChild(firstLi.current);
      ulRef.current!.style.transition = 'none';
      ulRef.current!.style.transform = `translateX(0%)`;
      clearTimeout(tmp);
    }, 400);
  }, [imgArr.length])

  const pre = () => {
    firstLi.current = ulRef.current!.children[0];
    lastLi.current = ulRef.current!.children[imgArr.length - 1];
    ulRef.current!.insertBefore(lastLi.current, firstLi.current);
    ulRef.current!.style.transition = 'none';
    ulRef.current!.style.transform = `translateX(${-100 / imgArr.length}%)`;
    const tmp = setTimeout(() => {
      ulRef.current!.style.transition = '0.4s';
      ulRef.current!.style.transform = `translateX(0%)`;
      clearTimeout(tmp);
    }, 0);
  };

  const animation = useCallback(() => {
    timer.current = setInterval(next, timeout);
  }, [timeout, next]);

  const getNext = () => {
    clearInterval(timer.current);
    next();
    animation();
  };

  const getPre = () => {
    clearInterval(timer.current);
    pre();
    animation();
  };

  useLayoutEffect(() => {
    animation();
  }, [animation]);

  return (
    <div className="lamb-carousel-component">
      <ul
        id="carousel-banner"
        ref={ulRef}
        onMouseEnter={() => {
          clearInterval(timer.current);
        }}
        onMouseLeave={animation}
        style={{width: `${imgArr.length * 100}%`}}
      >
        {imgArr.map((img, idx) => (
          <li key={img.id} style={{width: `${100 / imgArr.length}%`}}>
            <img src={img.src} alt={img.name} />
          </li>
        ))}
      </ul>
      <div id="carousel-pre" ref={preRef} onClick={getPre} />
      <div id="carousel-next" ref={nextRef} onClick={getNext} />
    </div>
  );
};

export default Carousel;
