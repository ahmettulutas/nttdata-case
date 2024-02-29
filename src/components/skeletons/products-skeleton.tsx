function ProductsCardSkeleton() {
  return (
    <div
      role='status'
      className='animate-pulse w-full mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
    >
      {Array.from({ length: 12 }).map((_, key) => (
        <article key={key} className='flex gap-2 p-4 border border-gray-300 rounded-sm flex-col'>
          <div className='aspect-square bg-gray-300'></div>
          <div className='w-10 h-4 bg-gray-300'></div>
          <div className='w-full h-4 bg-gray-300'></div>
          <div className='w-10 h-4 bg-gray-300'></div>
          <div className='w-full h-10 bg-gray-300'></div>
        </article>
      ))}

      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export default ProductsCardSkeleton;
