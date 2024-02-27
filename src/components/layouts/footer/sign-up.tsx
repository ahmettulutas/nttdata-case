import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function SignUp() {
  return (
    <div className='flex'>
      <Input placeholder='Email' className='rounded-r-none' />
      <Button variant={'secondary'} className='text-white rounded-l-none'>
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
