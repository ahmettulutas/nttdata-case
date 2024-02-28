import React from 'react';

import ZoomableImage from './zoomable-image';

import { Product } from '@/api/types';

function ProductCard({ product }: { product: Product }) {
  return (
    <article className='flex gap-2 p-4 border border-gray-300 rounded-sm'>
      <ZoomableImage src={product.imageUrl} />
    </article>
  );
}

export default React.memo(ProductCard);
