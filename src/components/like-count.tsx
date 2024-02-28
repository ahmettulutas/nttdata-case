import { LikeIcon } from './Icons';
import { Button } from './ui/button';

function LikeCount() {
  const count = 1;
  return (
    <div className='flex gap-2 items-center'>
      <LikeIcon />
      {`${count} ürün`}
      <Button className='py-0 h-8 ml-4'>Beğenilenler</Button>
    </div>
  );
}

export default LikeCount;
