import React from 'react';
import { Link } from 'react-router-dom';

import ZoomableImage from './zoomable-image';
import PriceTag from './price-tag';
import LikeButton from './like-button';

import { Product } from '@/api/types';

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to='https://www.ahmetulutas.com/'
      className='relative flex flex-col gap-2 p-4 border border-gray-300 rounded-sm text-textBrand justify-between'
    >
      <div className='relative'>
        <ZoomableImage src={product.imageUrl} />
        <LikeButton id={product.id} />
      </div>
      <h2 className='text-lg lg:text-xl font-semibold leading-5'>{product.name}</h2>
      <PriceTag price={product.price} />
      <p>Description</p>
      <p className='text-xs font-light'>{product.description}</p>
      <span className='text-2xs text-black'>{product.shippingMethod}</span>
    </Link>
  );
}

export default React.memo(ProductCard);
