import { Navbar } from './navbar/navbar';
import Footer from './footer/footer';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='grid h-screen pt-32'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default PageLayout;
