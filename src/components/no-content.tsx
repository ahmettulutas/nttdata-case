import emptyIcon from '@/assets/empty.svg';

function NoContent() {
  return (
    <div className='flex items-center justify-center flex-col p-10'>
      <p>No Content to show.</p>
      <img src={emptyIcon} alt='empty' className='w-64 h-auto' />
    </div>
  );
}

export default NoContent;
