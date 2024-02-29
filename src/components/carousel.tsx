import { motion, AnimatePresence } from 'framer-motion';
import { memo, useCallback, useEffect, useState } from 'react';

import { DotIndicators } from './carousel-dots';

import { carouselVariants } from '@/lib/framer-variants';

type ImageCarousel = {
  images: Array<string>;
  imageCarousel: true;
};

type NodeCarousel = {
  imageCarousel: false;
  carouselItems: Array<React.ReactNode>;
};

export type CarouselProps = (ImageCarousel | NodeCarousel) & {
  loop?: boolean;
  showDots?: boolean;
  speed?: number;
};

const Carousel: React.FC<CarouselProps> = (props) => {
  const { imageCarousel, loop, showDots, speed } = props;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const items = imageCarousel ? props.images : props.carouselItems;
  const itemsCount = items.length;

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex = current + newDirection;
      // the newIndex stays within the bounds of the images array
      const boundedIndex = (newIndex + itemsCount) % itemsCount;
      setCurrent(boundedIndex);
      setDirection(newDirection);
    },
    [current, itemsCount]
  );

  const handleDotClick = (number: number) => {
    setCurrent(number);
  };

  useEffect(() => {
    if (loop) {
      const interval = setInterval(() => paginate(1), speed || 4000);
      return () => clearInterval(interval);
    } else return;
  }, [paginate, loop, speed]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={carouselVariants}
          className='absolute inset-0 flex justify-center items-center'
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {imageCarousel ? (
            <img className='object-cover w-full h-full' src={props.images[current]} />
          ) : (
            props.carouselItems[current]
          )}
        </motion.div>
      </AnimatePresence>
      {showDots && (
        <DotIndicators numDots={itemsCount} currentSlide={current} onDotClick={handleDotClick} />
      )}
    </div>
  );
};
export default memo(Carousel);
