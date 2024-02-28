import ProductCard from './product-card';

import { ProductListRes } from '@/api/types';

function ProductList({ products }: { products: ProductListRes | undefined }) {
  if (!products) return <div>No products to show</div>; // todo - change here.
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
      {products?.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

export default ProductList;
