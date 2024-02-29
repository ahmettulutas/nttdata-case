import { useState } from 'react';
import { motion } from 'framer-motion';

import NoContent from './no-content';
import ProductCard from './card/product-card';
import { Button } from './ui/button';

import { ProductListRes } from '@/api/types';
import { cardVariants } from '@/lib/framer-variants';

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
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'
        variants={cardVariants}
        initial='hidden'
        animate='visible'
      >
        {products.slice(0, paginate).map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

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
