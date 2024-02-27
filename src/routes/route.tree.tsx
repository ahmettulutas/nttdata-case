import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsSkeleton from '../components/skeletons/products-skeleton';

/* const NotFound = React.lazy(() => import("./pages/not-found")); */
const Products = React.lazy(() => import('../pages/products'));

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <React.Suspense fallback={<ProductsSkeleton />}>
            <Products />
          </React.Suspense>
        }
      />
      {/*  <Route
        path="/product/:id"
        element={
          <React.Suspense fallback={<ProductDetailSkeleton />}>
            <Product />
          </React.Suspense>
        }
      /> */}
      {/* todo */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
