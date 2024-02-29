import React, { Suspense } from 'react';

import { useGetProductsQuery } from '@/api';
import Carousel from '@/components/carousel';
import { carouselImages } from '@/lib/constants';
import ProductsCardSkeleton from '@/components/skeletons/products-skeleton';
import LikeCount from '@/components/like-count';
import { useAppSelector } from '@/store';
import {
  selectIsFilteredProducts,
  selectLikedProducts,
} from '@/store/features/liked-products/selectors';

const ProductList = React.lazy(() => import('@/components/product-list'));

export default function Products() {
  const { data: products, isLoading } = useGetProductsQuery();
  const likedProducts = useAppSelector(selectLikedProducts);
  const isFilterApplied = useAppSelector(selectIsFilteredProducts);

  // Filter products based on liked status if the filter is applied
  const filteredProducts = isFilterApplied
    ? products?.filter((product) => likedProducts[product.id])
    : products;

  return (
    <>
      <Carousel imageCarousel images={carouselImages} loop showDots speed={3000} />
      <section className='p-12 md:p-24 lg:p-32'>
        <div className='flex flex-col md:flex-row justify-between items-center p-4'>
          <h1 className='text-2xl leading-loose font-medium'>Content title goes here</h1>
          <LikeCount />
        </div>
        {isLoading ? (
          <ProductsCardSkeleton />
        ) : (
          <Suspense fallback={<ProductsCardSkeleton />}>
            <ProductList products={filteredProducts} />
          </Suspense>
        )}
      </section>
    </>
  );
}
