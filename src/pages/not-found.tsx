import React from 'react';
import { useNavigate } from 'react-router-dom';

import PageLayout from '@/components/layouts/page-layout';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <div className='flex justify-center flex-col container my-6 h-screen items-center gap-4'>
        You have hit a route that doesn&apos;t exist.
        <Button type='button' variant={'default'} onClick={() => navigate('/')}>
          Go Back
        </Button>
      </div>
    </PageLayout>
  );
};

export default NotFound;
