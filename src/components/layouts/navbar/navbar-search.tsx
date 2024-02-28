import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import search from '@/assets/search.svg';
export function NavbarSearch() {
  return (
    <div className='flex items-center justify-between relative'>
      <Input placeholder='Search...' />
      <Select>
        <SelectTrigger
          id='categories'
          className='absolute right-0 w-auto translate-y-[-50%] top-1/2 bg-gray-200 hidden md:flex'
        >
          <SelectValue placeholder='Categories' />
        </SelectTrigger>
        <SelectContent position='popper'>
          <SelectItem value='category1'>Category 1</SelectItem>
          <SelectItem value='category2'>Category 2</SelectItem>
          <SelectItem value='category3'>Category 3</SelectItem>
          <SelectItem value='category4'>Category 4</SelectItem>
        </SelectContent>
      </Select>
      <Button className='absolute right-0 translate-y-[-50%] top-1/2 md:hidden rounded-l-none'>
        <img src={search} />
      </Button>
    </div>
  );
}
