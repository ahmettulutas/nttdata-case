import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { LikeIcon } from '../Icons';

import { toggleLike } from '@/store/features/liked-products';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectLikedProducts } from '@/store/features/liked-products/selectors';

function LikeButton({ id }: { id: number }) {
  const likedProducts = useAppSelector(selectLikedProducts);
  const isProductLiked = likedProducts[id];
  const dispatch = useAppDispatch();
  const handleLikeClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      dispatch(toggleLike(id));
    },
    [dispatch, id]
  );
  return (
    <LikeIcon
      className={twMerge(
        'cursor-pointer absolute right-2 top-2 z-10 rounded-full bg-white p-2 flex items-center justify-center',
        isProductLiked ? 'text-red-600 animate-pulse-100' : ''
      )}
      onClick={handleLikeClick}
    />
  );
}

export default LikeButton;
