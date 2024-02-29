import { useRef, useState } from 'react';

type ImageProps = {
  src: string;
};

const ZoomableImage: React.FC<ImageProps> = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleHover = (e: React.MouseEvent<HTMLImageElement>) => {
    if (imgRef.current) {
      const x = (100 * e.nativeEvent.offsetX) / e.currentTarget.offsetWidth;
      const y = (100 * e.nativeEvent.offsetY) / e.currentTarget.offsetHeight;
      imgRef.current.style.transform = 'scale(1.4)';
      imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = 'scale(1)';
      imgRef.current.style.transition = 'transform 0.2s ease-in-out';
    }
  };
  const handleImageLoad = () => setImageLoaded(true);
  return (
    <div className='overflow-hidden relative rounded-sm block w-full h-auto border-red-400'>
      {!imageLoaded && (
        <div className='animate-pulse flex-row items-center aspect-square bg-gray-300 absolute inset-0'></div>
      )}
      <img
        className='aspect-square object-cover h-auto w-full'
        ref={imgRef}
        onMouseMove={handleHover}
        onMouseLeave={handleMouseLeave}
        onLoad={() => handleImageLoad()}
        src={src}
      />
    </div>
  );
};
export default ZoomableImage;
