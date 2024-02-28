import React, { Suspense } from 'react';

import { useGetProductsQuery } from '@/api';
import Carousel from '@/components/carousel';
import { carouselImages } from '@/lib/constants';
import ProductsCardSkeleton from '@/components/skeletons/products-skeleton';
import LikeCount from '@/components/like-count';

const ProductList = React.lazy(() => import('@/components/product-list'));

export default function Products() {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <>
      <Carousel imageCarousel images={carouselImages} loop showDots speed={3000} />
      <section className='p-12 md:p-24 lg:p-32'>
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-2xl leading-loose'>Content title goes here</h1>
          <LikeCount />
        </div>
        {isLoading ? (
          <ProductsCardSkeleton />
        ) : (
          <Suspense fallback={<ProductsCardSkeleton />}>
            <ProductList products={data} />
          </Suspense>
        )}
      </section>
    </>
  );
}
