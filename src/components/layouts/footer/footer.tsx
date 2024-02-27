import SignUp from './sign-up';

import Logo from '@/components/logo';
import { Container } from '@/components/page-container';
import { contactInfos, socialLinks } from '@/lib/constants';

function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <section className='py-10'>
        <Container className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <Logo />
            <p className='text-sm'>trusted-global-innovator</p>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
            </p>
            <div className='mt-12'>
              <SignUp />
            </div>
          </div>
          <div className='hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='flex flex-col'>
              <h4 className='text-lg mb-4'>Title</h4>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-lg mb-4'>Title</h4>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
            </div>
            <div className='flex flex-col'>
              <h4 className='text-lg mb-4'>Title</h4>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
              <p className='font-light'>Subtitle</p>
            </div>
          </div>
        </Container>
      </section>
      <section className='border-t-2 border-white'>
        <Container className='flex justify-between py-4 flex-wrap'>
          <p>{contactInfos.email}</p>
          <p>{contactInfos.phone}</p>
          <div className='flex gap-2'>
            {socialLinks.map((item) => (
              <a key={item.url} href={item.url} target='_blank' rel='noreferrer'>
                <img src={item.logo} alt={item.url} />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </footer>
  );
}

export default Footer;
