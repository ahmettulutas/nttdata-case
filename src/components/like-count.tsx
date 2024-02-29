import { useCallback } from 'react';

import { LikeIcon } from './Icons';
import { Button } from './ui/button';

import { toggleFilter } from '@/store/features/liked-products';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectIsFilteredProducts,
  selectLikedProducts,
} from '@/store/features/liked-products/selectors';
import { getLength } from '@/lib/utils';

function LikeCount() {
  const dispatch = useAppDispatch();
  const likedProducts = useAppSelector(selectLikedProducts);
  const isFiltered = useAppSelector(selectIsFilteredProducts);
  const count = useCallback(() => getLength(likedProducts), [likedProducts]);

  return (
    <div className='flex gap-2 items-center'>
      <LikeIcon />
      {`${count()} ürün`}
      <Button className='py-0 h-8 ml-4' onClick={() => dispatch(toggleFilter())}>
        {isFiltered ? 'Tümünü Gör' : 'Beğenilenler'}
      </Button>
    </div>
  );
}

export default LikeCount;
