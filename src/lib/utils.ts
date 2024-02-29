import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLength = <T extends object>(obj: T): number => {
  let likedProductsCount = 0;
  for (const productId in obj) {
    if (obj[productId]) {
      likedProductsCount++;
    }
  }
  return likedProductsCount;
};
