import { useState } from 'react';

import NoContent from './no-content';
import ProductCard from './card/product-card';
import { Button } from './ui/button';

import { dummyproducts } from '@/lib/constants';
import { ProductListRes } from '@/api/types';

const initialPageCount = 4;

function ProductList({ products }: { products: ProductListRes | undefined }) {
  const [paginate, setPaginate] = useState(initialPageCount);

  if (!products || !products.length) return <NoContent />;
  const remainingProducts = products.length - paginate;

  const loadMoreProducts = () => {
    setPaginate((prevPaginate) => prevPaginate + 4);
  };

  return (
    <section className='flex flex-col'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {(products || dummyproducts).slice(0, paginate).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Button
        className='mx-auto my-4'
        onClick={() => (remainingProducts > 0 ? loadMoreProducts() : setPaginate(initialPageCount))}
      >
        {remainingProducts > 0 ? 'Daha Fazla Gör' : 'Daha Az Gör'}
      </Button>
    </section>
  );
}

export default ProductList;
