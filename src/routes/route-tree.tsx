import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from '@/components/layouts/page-layout';
import ProductsPageSkeleton from '@/components/skeletons/products-page';

const NotFound = React.lazy(() => import('@/pages/not-found'));
const Products = React.lazy(() => import('@/pages/products'));

const RouteTree = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PageLayout>
            <React.Suspense fallback={<ProductsPageSkeleton />}>
              <Products />
            </React.Suspense>
          </PageLayout>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RouteTree;
