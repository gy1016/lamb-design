import { FC, useEffect, useRef, useState } from 'react';
import head from '../../assets/imgs/head.png';
import body from '../../assets/imgs/body.png';
import tail from '../../assets/imgs/tail.png';

export const Loading: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [margin, setMargin] = useState({ marginLeft: '', marginTop: '' });

  useEffect(() => {
    setMargin({
      marginLeft: `${-imgRef.current!.width / 2}px`,
      marginTop: `${-imgRef.current!.height / 2}px`
    });
  }, []);

  return (
    <div className="lamb-loading-component">
      <div className="tiger-loading">
        <img
          ref={imgRef}
          src={head}
          alt="tiget-head"
          className="tiger-part head"
          style={{
            zIndex: '2',
            marginLeft: margin.marginLeft,
            marginTop: margin.marginTop
          }}
        />
        <img
          src={body}
          alt="tiget-body"
          className="tiger-part body"
          style={{
            zIndex: '1',
            marginLeft: margin.marginLeft,
            marginTop: margin.marginTop
          }}
        />
        <img
          src={tail}
          alt="tiget-tail"
          className="tiger-part tail"
          style={{
            zIndex: '3',
            marginLeft: margin.marginLeft,
            marginTop: margin.marginTop
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
