'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

import { Container } from '../../page-container';
import { NavbarToggle } from './navbar-toggle';
import { NavbarSearch } from './navbar-search';
import { Button } from '../../ui/button';

import search from '@/assets/search.svg';
import { navLinks } from '@/lib/constants';
import { listVariants, sideVariants } from '@/lib/framer-variants';
import { Logo } from '@/components/Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 70) setScrolled(true);
    else setScrolled(false);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={twMerge(
        'ease-in top-0 right-0 z-50 left-0 bg-transparent md:opacity-95 bg-white',
        scrolled ? 'fixed' : 'absolute'
      )}
    >
      <Container
        className={twMerge(
          'transition-all duration-300 flex flex-col py-2',
          scrolled ? '' : 'py-6'
        )}
      >
        <section className='w-full grid md:grid-cols-navbar items-center gap-4'>
          <Link to='/' className='text-primary'>
            <Logo wrapperStyles={'text-primary'} />
          </Link>
          <NavbarSearch />
          <Button className='hidden md:block'>
            <img src={search} />
          </Button>
        </section>

        <div className='z-20 md:hidden absolute right-4 top-[-1/2]'>
          <NavbarToggle open={open} toggle={() => setOpen(!open)} />
        </div>
      </Container>
      <section className='border-t'>
        <Container>
          <ul className='gap-2 hidden md:flex w-full justify-between pt-4 pb-2'>
            {navLinks.map(
              (
                { text, id },
                idx // since navlinks items don't have any unique value ım using idx here
              ) => (
                <li key={idx}>
                  <Link
                    to={id}
                    className={`h-full block relative mx-auto ${scrolled ? 'before:h-1' : ' before:h-0.25'}`}
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* Mobile Sidebar */}
          <AnimatePresence>
            {open && (
              <div>
                <button
                  onClick={() => setOpen(false)}
                  className='backdrop-blur-[1px] absolute left-0 top-0 h-screen p-4 w-screen'
                />
                <aside className='md:hidden bg-white shadow-md absolute right-0 top-0 overflow-y-scroll p-4 max-w-[50vw] h-screen'>
                  <motion.ul
                    className='mt-24'
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={sideVariants}
                  >
                    {navLinks.map(
                      (
                        { text, id },
                        idx // since navlinks items don't have any unique value ım using idx here
                      ) => (
                        <motion.li
                          className='border-b py-3 px-3 text-center'
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          variants={listVariants}
                        >
                          <Link to={id}>{text}</Link>
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </aside>
              </div>
            )}
          </AnimatePresence>
        </Container>
      </section>
      {/* End of the Mobile Sidebar */}
    </nav>
  );
};
