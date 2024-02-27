import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';

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

export const Carousel: React.FC<CarouselProps> = (props) => {
  const { imageCarousel, loop, showDots, speed } = props;

  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const items = imageCarousel ? props.images : props.carouselItems;
  const itemsCount = items.length;
  const paginate = React.useCallback(
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

  React.useEffect(() => {
    if (loop) {
      const interval = setInterval(() => paginate(1), speed || 4000);
      return () => clearInterval(interval);
    } else return;
  }, [paginate, loop, speed]);

  return (
    <div className='relative aspect-video flex justify-center items-center overflow-hidden'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={carouselVariants}
          className='w-full h-full absolute'
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {imageCarousel ? (
            <img className='aspect-video' src={props.images[current]} />
          ) : (
            props.carouselItems[current]
          )}
        </motion.div>
      </AnimatePresence>
      {showDots ? (
        <DotIndicators numDots={itemsCount} currentSlide={current} onDotClick={handleDotClick} />
      ) : null}
    </div>
  );
};
