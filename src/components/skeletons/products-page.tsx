import ProductsCardSkeleton from './products-skeleton';

function ProductsPageSkeleton() {
  return (
    <div role='status' className='animate-pulse mx-auto'>
      <div className='relative aspect-square md:aspect-video flex justify-center items-center max-h-[75vh] w-screen bg-gray-400' />
      <section className='p-12 md:p-24 lg:p-32 flex flex-col gap-4 w-full'>
        <div className='flex w-full justify-between'>
          <h1 className='bg-gray-300 w-40 h-6'></h1>
          <p className='bg-gray-300 w-20 h-6'></p>
        </div>
        <ProductsCardSkeleton />
      </section>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export default ProductsPageSkeleton;
